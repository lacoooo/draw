import { Idraw, Isetup } from './types'

export class Draw implements Idraw {

    #canvas!: HTMLCanvasElement
    #ctx!: CanvasRenderingContext2D

    public frame = 0
    public width = 1000
    public height = 1000
    public mouseX = 0
    public pmouseX = 0
    public mouseY = 0
    public pmouseY = 0
    public mouseDown = false

    constructor(params?: Isetup) {

        this.canvasElementInit(params)

        this.canvasSizeInit(params)

        this.mouseEventInit()
    }

    protected canvasElementInit(params?: Isetup) {
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
        this.#canvas.width = width || this.width
        this.#canvas.height = height || this.height
        this.width = this.#canvas.width
        this.height = this.#canvas.height
    }

    get canvasPos() {
        const pos = this.#canvas.getBoundingClientRect()
        return {
            left: pos.left,
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom
        }
    }

    private mousePosition(ev: any) {
        const canvasPos = this.canvasPos
        this.pmouseX = this.mouseX
        this.pmouseY = this.mouseY
        this.mouseX = Math.round(ev.pageX - canvasPos.left)
        this.mouseY = Math.round(ev.pageY - canvasPos.top)
    }

    private mouseEventInit() {

        this.onmousemoveInit()
        this.onmousedownInit()
        this.onmouseupInit()
    }

    /**
     * onMouseMove event of canvas element
     */
    private onmousemoveInit() {
        this.#canvas.onmousemove = this.mousePosition.bind(this)
    }

    /**
     * onmousedown event of document
     */
    private onmousedownInit() {
        document.body.onmousedown = (e) => {
            e = e || window.event
            if (e.button === 0) {
                this.mouseDown = true
            }
        }
    }
    
    /**
     * onmouseup event of document
     */
    private onmouseupInit() {
        document.body.onmouseup = (e) => {
            e = e || window.event
            if (e.button === 0) {
                this.mouseDown = false
            }
        }
    }

    /**
     * Register mouse down events
     * @param cb Function triggered on mouse down
     */
    public click(cb: (key: KeyboardEvent['key'], keyCode: KeyboardEvent['keyCode']) => void) {
        document.onkeydown = e => {
            cb(e.key, e.keyCode)
        }
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
     * Setup only call once
     * @param cb Function to be called at initialization time
     */
    public setup(cb: (ctx: CanvasRenderingContext2D) => void) {
        if (cb) {
            cb(this.#ctx)
        }
    }

    /**
     * Loop each frame
     * @param cb function for each frame call
     */
    public loop(cb: (ctx: CanvasRenderingContext2D) => void) {
        this.frame ++
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
}