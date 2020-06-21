import { Isetup } from 'Types'

export class Canvas {

    protected _canvas: HTMLCanvasElement
    protected _ctx: CanvasRenderingContext2D
    public frame = 0

    constructor(canvasId?: string) {
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
    }

    /**
    * Helper function to create a DOM element
    * @param elem element tag name
    */
    protected _createElement(elem = "div"): HTMLElement {
        const d = document.createElement(elem)
        return d
    }

    public setup(params: Isetup) {
        const {width, height} = params || {}
        this._canvas.width = width || 1000
        this._canvas.height = height || 1000
    }

    public loop(cb: Function) {
        this.frame ++
        if (cb) cb()
        requestAnimationFrame(this.loop.bind(this, cb))
    }
}