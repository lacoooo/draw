import { Idraw, Isetup } from './types'
import { Input } from './input'
import { Vector } from './vector'

export class Draw extends Input implements Idraw {

    #canvas!: HTMLCanvasElement
    #ctx!: CanvasRenderingContext2D

    setupParams!: (ctx: CanvasRenderingContext2D) => void
    loopParams!: (ctx: CanvasRenderingContext2D) => void

    get width() { return this.#canvas.width }
    set width(w: number) { this.#canvas.width = w }

    get height() { return this.#canvas.height }
    set height(h: number) { this.#canvas.height = h }

    public frame = 0

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
        cb()
    }

    /**
     * Setup only call once
     * @param cb Function to be called at initialization time
     */
    public setup(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (!this.setupParams) {
            this.setupParams = cb
        }
        
        if (this.#preloadLeftCount > 0) return
        
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
        
        if (this.#preloadLeftCount > 0) return

        if (document.hidden === true) {
            requestAnimationFrame(this.loop.bind(this, cb))
            return
        }
        this.frame++
        const mousePos = new Vector(this.mouseX, this.mouseY)
        this.pushMousePosHistory(mousePos)
        if (cb) cb(this.#ctx)
        else throw Error('without callback')
        requestAnimationFrame(this.loop.bind(this, cb))
    }

    /**
     * 
     * @param width stroke width
     */
    public strokeWeight(width: number) {
        this.#ctx.lineWidth = width
    }

    /**
     * Trace the path
     */
    private stroke() {
        this.#ctx.stroke()
    }

    private beginPath() {
        this.#ctx.beginPath()
    }

    private closePath() {
        this.#ctx.closePath()
    }

    /**
     * Draw lines
     * @param x1 X coordinate of the starting point
     * @param y1 Y coordinate of the starting point
     * @param x2 X coordinate of the ending point
     * @param y2 Y coordinate of the ending point
     */
    public line(x1: number, y1: number, x2: number, y2: number) {
        this.beginPath()
        this.#ctx.moveTo(x1, y1)
        this.#ctx.lineTo(x2, y2)
        this.closePath()
        this.stroke()
    }

    public clear() {
        this.#ctx.clearRect(0, 0, this.width, this.height)
    }
    
    async loadMedia(path: string) {
        this.#preloadLeftCount ++
        const res = await this.sleep(2000)
        this.#preloadLeftCount --
        if (this.#preloadLeftCount === 0) {
            this.setup(this.setupParams)
            this.loop(this.loopParams)
        }
    }

    loadImage(path: string) {
        return this.loadMedia(path)
    }

    sleep(time: number) {
        return new Promise(r => {
            setTimeout(() => {
                r()
            }, time);
        })
    }
}