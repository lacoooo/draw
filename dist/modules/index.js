export class Canvas {
    constructor(canvasId) {
        if (canvasId) {
            const canvas = document.getElementById(canvasId);
            if (canvas !== null)
                this._canvas = canvas;
            else
                this._canvas = this._createElement("canvas");
        }
        this._canvas = this._createElement("canvas");
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
}
//# sourceMappingURL=index.js.map