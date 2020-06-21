export class Canvas {
    constructor(canvasId) {
        this.frame = 0;
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
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
    setup(params) {
        const { width, height } = params || {};
        this._canvas.width = width || 1000;
        this._canvas.height = height || 1000;
    }
    loop(cb) {
        this.frame++;
        if (cb)
            cb();
        requestAnimationFrame(this.loop.bind(this, cb));
    }
}
//# sourceMappingURL=Canvas.js.map