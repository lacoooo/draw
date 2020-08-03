import { Vec3 } from './Vector'

export class Input {

    #canvas!: HTMLCanvasElement
    #mousePos = new Vec3()

    #mouseHistoryCount = 10
    public frame = 0
    public frameLock = 0

    get mousePos() {
        return this.#mousePos
    }

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

    get pmouseX() {
        const len = this.mousePosHistory.length
        if (len > 2) {
            return this.mousePosHistory[1].x
        }
        else if (len === 1) {
            return this.mousePosHistory[0].x
        }
        return this.mouseX
    }

    get pmouseY() {
        const len = this.mousePosHistory.length
        if (len > 2) {
            return this.mousePosHistory[1].y
        }
        else if (len === 1) {
            return this.mousePosHistory[0].y
        }
        return this.mouseY
    }

    public mousePosHistory: Vec3[] = []

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

    public setMouseHistoryCount(count: number): void {
        this.#mouseHistoryCount = count
    }

    protected pushMousePosHistory(currentMousePos: Vec3): void {
        this.mousePosHistory.unshift(currentMousePos)
        if (this.mousePosHistory.length > this.#mouseHistoryCount) {
            this.mousePosHistory.pop()
        }
    }

    protected mouseEventInit(canvas: HTMLCanvasElement): void {

        this.#canvas = canvas

        this.onmousemoveInit()
        this.onmousedownInit()
        this.onmouseupInit()
    }

    /**
     * onMouseMove event of canvas element
     */
    private onmousemoveInit(): void {
        this.#canvas.addEventListener(
            'mousemove',
            (ev: MouseEvent) => {
                const canvasPos = this.canvasPos
                let posX = 0, posY = 0
                if (ev.pageX) {
                    posX = ev.pageX
                    posY = ev.pageY
                } else if (ev.clientX) {
                    posX = ev.clientX + document.documentElement.scrollLeft + document.body.scrollLeft
                    posY = ev.clientY + document.documentElement.scrollTop + document.body.scrollTop
                }
                this.mouseX = Math.round(posX - canvasPos.left - window.scrollX)
                this.mouseY = Math.round(posY - canvasPos.top - window.scrollY)
            },
            false
        )
    }

    /**
     * onmousedown event of document
     */
    private onmousedownInit(): void {
        document.body.addEventListener(
            'mousedown',
            (ev: MouseEvent) => {
                ev = ev || window.event
                if (ev.button === 0) {
                    this.mouseDown = true
                }
            },
            false
        )
    }

    /**
     * onmouseup event of document
     */
    private onmouseupInit(): void {
        document.body.addEventListener(
            'mouseup',
            (ev: MouseEvent) => {
                ev = ev || window.event
                if (ev.button === 0) {
                    this.mouseDown = false
                }
            },
            false
        )
    }

    /**
     * Register mouse down events
     * @param cb Function triggered on mouse down
     */
    public click(cb:(ev: MouseEvent) => void) {
        this.#canvas.addEventListener(
            'mousedown',
            (ev: MouseEvent) => {
                cb(ev)
            },
            false
        )
    }

    /**
     * Register keyboard events
     * @param cb Function triggered on keyboard
     */
    public keyboard(cb: (key: KeyboardEvent['key'], keyCode: KeyboardEvent['keyCode']) => void) {
        document.onkeydown = e => {
            cb(e.key, e.keyCode)
        }
    }
}