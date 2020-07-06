import { Vector } from './vector'

export class Input {

    #canvas!: HTMLCanvasElement
    #mousePos = new Vector()

    get mouseX() {
        return this.#mousePos.x
    }
    set mouseX(x: number) {
        this.#mousePos.x = x
    }
    get mouseY() {
        return this.#mousePos.y
    }
    set mouseY(y: number) {
        this.#mousePos.y = y
    }
    
    public pmouseX = 0
    public pmouseY = 0

    public mouseHistory: Vector[] = []

    public mouseDown = false

    get canvasPos() {
        const pos = this.#canvas.getBoundingClientRect()
        return {
            left: pos.left,
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom
        }
    }

    private mousePositionUpdate(ev: MouseEvent) {
        const canvasPos = this.canvasPos
        this.mouseX = Math.round(ev.pageX - canvasPos.left - window.scrollX)
        this.mouseY = Math.round(ev.pageY - canvasPos.top - window.scrollY)

        this.pushMouseHistory()
    }

    private pushMouseHistory() {
        this.mouseHistory.unshift(this.#mousePos)
        if (this.mouseHistory.length > 10) {
            this.mouseHistory.pop()
        }
    }

    protected pmousePositionUpdate() {
        this.pmouseX = this.mouseX
        this.pmouseY = this.mouseY
    }

    protected mouseEventInit(canvas: HTMLCanvasElement) {

        this.#canvas = canvas

        this.onmousemoveInit()
        this.onmousedownInit()
        this.onmouseupInit()
    }

    /**
     * onMouseMove event of canvas element
     */
    private onmousemoveInit() {
        this.#canvas.onmousemove = this.mousePositionUpdate.bind(this)
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
}