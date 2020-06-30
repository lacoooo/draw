export class Canvas {
    constructor(params) {
        this.frame = 0;
        this.width = 1000;
        this.height = 1000;
        const { canvasId } = params || {};
        if (canvasId) {
            const canvas = document.getElementById(canvasId);
            if (canvas !== null)
                this._canvas = canvas;
            else
                this._canvas = this._createElement("canvas");
        }
        else {
            this._canvas = this._createElement("canvas");
            document.body.appendChild(this._canvas);
        }
        this._ctx = this._canvas.getContext('2d');
        const { width, height } = params || {};
        this._canvas.width = width || this.width;
        this._canvas.height = height || this.height;
        this.width = this._canvas.width;
        this.height = this._canvas.height;
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
    setup(cb) {
        if (cb) {
            cb(this._ctx);
        }
    }
    loop(cb) {
        this.frame++;
        if (cb)
            cb(this._ctx);
        requestAnimationFrame(this.loop.bind(this, cb));
    }
    strokeWeight(width) {
        this._ctx.lineWidth = width;
    }
    stroke() {
        this._ctx.stroke();
    }
    beginPath() {
        this._ctx.beginPath();
    }
    closePath() {
        this._ctx.closePath();
    }
    line(x1, y1, x2, y2) {
        this.beginPath();
        this._ctx.moveTo(x1, y1);
        this._ctx.lineTo(x2, y2);
        this.closePath();
        this.stroke();
    }
}
//# sourceMappingURL=canvas.js.map