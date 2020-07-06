export class Input {

    #canvas!: HTMLCanvasElement
    public mouseDown = false
    public mouseX = 0
    public pmouseX = 0
    public mouseY = 0
    public pmouseY = 0

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
        this.pmouseX = this.mouseX
        this.pmouseY = this.mouseY
        this.mouseX = Math.round(ev.pageX - canvasPos.left - window.scrollX)
        this.mouseY = Math.round(ev.pageY - canvasPos.top - window.scrollY)
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
}