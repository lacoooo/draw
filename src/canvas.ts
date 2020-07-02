import { Idraw, Isetup } from './types'

export class Draw implements Idraw {

    protected _canvas: HTMLCanvasElement
    protected _ctx: CanvasRenderingContext2D
    public frame = 0
    public width = 1000
    public height = 1000
    public mouseX = 0
    public mouseY = 0

    constructor(params?: Isetup) {
        const { canvasId } = params || {}
        if (canvasId) {
            const canvas = document.getElementById(canvasId) as HTMLCanvasElement
            if (canvas !== null) this._canvas = canvas
            else this._canvas = this._createElement("canvas") as HTMLCanvasElement
        }
        else {
            this._canvas = this._createElement("canvas") as HTMLCanvasElement
            document.body.appendChild(this._canvas)
        }
        this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D

        const { width, height } = params || {}
        this._canvas.width = width || this.width
        this._canvas.height = height || this.height
        this.width = this._canvas.width
        this.height = this._canvas.height

        this.onmousemoveInit()
    }

    get canvasPos() {
        const pos = this._canvas.getBoundingClientRect()
        return {
            left: pos.left,
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom
        }
    }

    private mousePosition(ev: any) {
        console.log(this.mouseX, this.mouseY)
        const canvasPos = this.canvasPos
        this.mouseX = Math.round(ev.pageX - canvasPos.left)
        this.mouseY = Math.round(ev.pageY - canvasPos.top)
    }

    private onmousemoveInit() {
        this._canvas.onmousemove = this.mousePosition.bind(this)
    }

    /**
    * Helper function to create a DOM element
    * @param elem element tag name
    */
    protected _createElement(elem = "div"): HTMLElement {
        const d = document.createElement(elem)
        return d
    }

    /**
     * setup only call once
     * @param cb Function to be called at initialization time
     */
    public setup(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (cb) {
            cb(this._ctx)
        }
    }

    /**
     * loop each frame
     * @param cb function for each frame call
     */
    public loop(cb: (ctx: CanvasRenderingContext2D) => void) {
        this.frame ++
        if (cb) cb(this._ctx)
        else throw Error('withOut callback')
        requestAnimationFrame(this.loop.bind(this, cb))
    }

    /**
     * 
     * @param width stroke width
     */
    public strokeWeight(width: number) {
        this._ctx.lineWidth = width
    }

    /**
     * Trace the path
     */
    private stroke() {
        this._ctx.stroke()
    }

    private beginPath() {
        this._ctx.beginPath()
    }

    private closePath() {
        this._ctx.closePath()
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
        this._ctx.moveTo(x1, y1)
        this._ctx.lineTo(x2, y2)
        this.closePath()
        this.stroke()
    }
}