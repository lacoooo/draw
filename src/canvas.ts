import { Idraw, Isetup, IimgObject } from './Types'
import { Input } from './Input'
import { Vec3 } from './Vector'

export class Draw extends Input implements Idraw {

    #canvas!: HTMLCanvasElement
    #ctx!: CanvasRenderingContext2D

    setupParams!: (ctx: CanvasRenderingContext2D) => void
    loopParams!: (ctx: CanvasRenderingContext2D) => void

    get width() { return this.#canvas.width }
    set width(w: number) { this.#canvas.width = w }

    get height() { return this.#canvas.height }
    set height(h: number) { this.#canvas.height = h }

    strokeOpen = false
    fillOpen = false

    public frame = 0

    #loppOnce = false

    #preloadLeftCount = 0

    constructor(params?: Isetup) {
        super()

        this.canvasElementInit(params)

        this.canvasSizeInit(params)

        this.mouseEventInit(this.#canvas)
    }

    private canvasElementInit(params?: Isetup) {
        const { canvasId } = params || {}
        if (canvasId) {
            const canvas = document.getElementById(canvasId) as HTMLCanvasElement
            if (canvas !== null) this.#canvas = canvas
            else this.#canvas = this._createElement("canvas") as HTMLCanvasElement
        }
        else {
            this.#canvas = this._createElement("canvas") as HTMLCanvasElement
            document.body.appendChild(this.#canvas)
        }
        this.#ctx = this.#canvas.getContext('2d') as CanvasRenderingContext2D
    }

    private canvasSizeInit(params?: Isetup) {
        const { width, height } = params || {}
        this.width = width || 1000
        this.height = height || 1000
    }

    /**
    * Helper function to create a DOM element
    * @param elem element tag name
    */
    protected _createElement(elem = "div"): HTMLElement {
        const d = document.createElement(elem)
        return d
    }

    public preload(cb: () => void) {
        if (cb) cb()
    }

    /**
     * Setup only call once
     * @param cb Function to be called at initialization time
     */
    public setup(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (!this.setupParams) {
            this.setupParams = cb
        }

        if (this.#preloadLeftCount > 0 && this.frame === 0) return

        if (cb) cb(this.#ctx)
    }

    /**
     * Loop each frame
     * @param cb function for each frame call
     */
    public loop(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (!this.loopParams) {
            this.loopParams = cb
        }

        if (this.#preloadLeftCount > 0 && this.frame === 0) return

        if (document.hidden === true) {
            requestAnimationFrame(this.loop.bind(this, cb))
            return
        }
        this.frame++
        const mousePos = new Vec3(this.mouseX, this.mouseY)
        this.pushMousePosHistory(mousePos)
        if (cb) cb(this.#ctx)
        else throw Error('without callback')

        if (this.#loppOnce === true) return

        requestAnimationFrame(this.loop.bind(this, cb))
    }

    public loppOnce() {
        this.#loppOnce = true
    }

    /**
     * 
     * @param width stroke width
     */
    public strokeWeight(width: number): this {
        this.#ctx.lineWidth = width
        return this
    }

    private beginPath(): this {
        this.#ctx.beginPath()
        return this
    }

    private closePath(): this {
        this.#ctx.closePath()
        return this
    }

    public save(): this {
        this.#ctx.save()
        return this
    }

    public restore(): this {
        this.#ctx.restore()
        return this
    }



    /**
     * Draw lines
     * @param x1 X coordinate of the starting point
     * @param y1 Y coordinate of the starting point
     * @param x2 X coordinate of the ending point
     * @param y2 Y coordinate of the ending point
     */
    public line(x1: number, y1: number, x2: number, y2: number): this {
        this.beginPath()
        this.#ctx.moveTo(x1, y1)
        this.#ctx.lineTo(x2, y2)
        this.closePath()
        this.draw()
        return this
    }

    public rect(x: number, y: number, width: number = 100, height: number = 100): this {
        this.#ctx.rect(x, y, width, height)
        this.draw()
        return this
    }

    public circle(radius: number, x: number, y: number): this {
        this.beginPath()
        this.#ctx.arc(x, y, radius, 0, Math.PI * 2, true)
        this.closePath()
        this.draw()
        return this
    }

    public point(x: number, y: number): this {
        if (this.#ctx.lineWidth > 1) {
            this.circle(this.#ctx.lineWidth / 2, x, y)
        } else {
            this.rect(x, y, 1, 1)
        }
        return this
    }

    public image(file: IimgObject, x: number, y: number): this {
        this.#ctx.drawImage(file.img, x, y)
        return this
    }

    public translate(x: number, y: number): this {
        this.#ctx.translate(x, y)
        return this
    }

    public rotate(angle: number): this {
        this.#ctx.rotate(angle)
        return this
    }

    public scale(x: number, y: number = x): this {
        this.#ctx.scale(x, y)
        return this
    }

    public textSize(size: number): this {
        this.#ctx.font = `${size}px sans-serif`
        return this
    }

    public text(text: string, x: number, y: number): this {
        this.#ctx.fillText(text, x, y)
        return this
    }

    public fillStyle(color: string): this {
        this.#ctx.fillStyle = color
        return this
    }

    public strokeStyle(color: string): this {
        this.#ctx.strokeStyle = color
        return this
    }

    public lineWidth(width: number): this {
        this.#ctx.lineWidth = width
        return this
    }

    public getBezierPoints(p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3, number: number = 100): Vec3[] {
        let t = 0
        const vecs = []
        for (let i = 0; i <= number; i++) {
            t = i / number
            const t_pow3 = Math.pow(t, 3)
            const pos =
                p0.clone().mult(Math.pow(1 - t, 3))
                    .add(p1.clone().mult(3 * t * Math.pow(1 - t, 2)))
                    .add(p2.clone().mult(3 * (Math.pow(t, 2) - t_pow3)))
                    .add(p3.clone().mult(t_pow3))
            vecs.push(pos)
        }

        return vecs
    }

    private draw(): void {
        if (this.fillOpen === true) {
            this.#ctx.fill()
        }
        if (this.strokeOpen === true) {
            this.#ctx.stroke()
        }
    }

    public clear(): this {
        this.#ctx.clearRect(0, 0, this.width, this.height)
        return this
    }

    public background(color: string): this {
        if (color) this.#ctx.fillStyle = color
        this.#ctx.fillRect(0, 0, this.width, this.height)
        return this
    }

    private async loadMedia(path: string, file?: IimgObject): Promise<void> {
        this.#preloadLeftCount ++

        const res = await fetch(path, { mode: 'cors' })
        .catch(err => {
            throw new Error('There has been a problem with your fetch operation: ' + err.message)
        })

        if (!res.ok) {
            throw new Error('Network response was not ok.')
        }

        const blob = await res.blob()
        .catch(err => {
            throw new Error('There has been a problem with your response blob(): ' + err.message)
        })

        const objectURL: string = URL.createObjectURL(blob)

        if (file && file.img instanceof HTMLImageElement) {
            await new Promise(r => {
                file.img.src = objectURL
                file.img.onload = () => {
                    const canvas = this._createElement("canvas") as HTMLCanvasElement
                    const ctx = canvas.getContext('2d')
                    canvas.width = file.width
                    canvas.height = file.height
                    if (ctx) {
                        ctx.drawImage(file.img, 0, 0)
                        const pixelData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                        file.pixels = pixelData.data
                    }
                    r()
                }
                file.img.onerror = err => {
                    throw new Error('Image onload error: ' + err)
                }
            })
        }

        this.#preloadLeftCount --
        if (this.#preloadLeftCount === 0 && this.frame === 0) {
            setTimeout(() => {
                this.setup(this.setupParams)
                this.loop(this.loopParams)
            }, 0)
        }
    }

    public loadImage(path: string): any {

        const img = new Image()
        
        const imgObj = new class implements IimgObject {
            img = img
            get width() {
                return img.width
            }
            get height() {
                return img.height
            }
            pixels!: Uint8ClampedArray
            getColor(x: number, y: number) {
                x = Math.round(x)
                y = Math.round(y)
                if (x < 0) x = 0
                else if (x > this.width) x = this.width
                if (y < 0) y = 0
                else if (y > this.height) y = this.height
                const start = (x * y + x) * 4
                const p = this.pixels || []
                const result: any = [p[start], p[start + 1], p[start + 2], p[start + 3]]
                result.r = p[start]
                result.g = p[start + 1]
                result.b = p[start + 2]
                result.a = p[start + 3]
                return result
            }
        }

        this.loadMedia(path, imgObj)
        return imgObj
    }
}