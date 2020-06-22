import { Isetup } from 'Types'

export class Canvas {

    protected _canvas: HTMLCanvasElement
    protected _ctx: CanvasRenderingContext2D
    public frame = 0
    public width = 1000
    public height = 1000

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

        
        const {width, height} = params || {}
        this._canvas.width = width || this.width
        this._canvas.height = height || this.height
        this.width = this._canvas.width
        this.height = this._canvas.height
    }

    /**
    * Helper function to create a DOM element
    * @param elem element tag name
    */
    protected _createElement(elem = "div"): HTMLElement {
        const d = document.createElement(elem)
        return d
    }

    public setup(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (cb) {
            cb(this._ctx)
        }
    }

    public loop(cb: (ctx: CanvasRenderingContext2D) => void) {
        this.frame ++
        if (cb) cb(this._ctx)
        requestAnimationFrame(this.loop.bind(this, cb))
    }
}