var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _canvas, _ctx, _preloadLeftCount;
import { Input } from './Input';
import { Vec3 } from './Vector';
export class Draw extends Input {
    constructor(params) {
        super();
        _canvas.set(this, void 0);
        _ctx.set(this, void 0);
        this.frame = 0;
        _preloadLeftCount.set(this, 0);
        this.canvasElementInit(params);
        this.canvasSizeInit(params);
        this.mouseEventInit(__classPrivateFieldGet(this, _canvas));
    }
    get width() { return __classPrivateFieldGet(this, _canvas).width; }
    set width(w) { __classPrivateFieldGet(this, _canvas).width = w; }
    get height() { return __classPrivateFieldGet(this, _canvas).height; }
    set height(h) { __classPrivateFieldGet(this, _canvas).height = h; }
    canvasElementInit(params) {
        const { canvasId } = params || {};
        if (canvasId) {
            const canvas = document.getElementById(canvasId);
            if (canvas !== null)
                __classPrivateFieldSet(this, _canvas, canvas);
            else
                __classPrivateFieldSet(this, _canvas, this._createElement("canvas"));
        }
        else {
            __classPrivateFieldSet(this, _canvas, this._createElement("canvas"));
            document.body.appendChild(__classPrivateFieldGet(this, _canvas));
        }
        __classPrivateFieldSet(this, _ctx, __classPrivateFieldGet(this, _canvas).getContext('2d'));
    }
    canvasSizeInit(params) {
        const { width, height } = params || {};
        this.width = width || 1000;
        this.height = height || 1000;
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
    preload(cb) {
        cb();
    }
    setup(cb) {
        if (!this.setupParams) {
            this.setupParams = cb;
        }
        if (__classPrivateFieldGet(this, _preloadLeftCount) > 0)
            return;
        if (cb)
            cb(__classPrivateFieldGet(this, _ctx));
    }
    loop(cb) {
        if (!this.loopParams) {
            this.loopParams = cb;
        }
        if (__classPrivateFieldGet(this, _preloadLeftCount) > 0)
            return;
        if (document.hidden === true) {
            requestAnimationFrame(this.loop.bind(this, cb));
            return;
        }
        this.frame++;
        const mousePos = new Vec3(this.mouseX, this.mouseY);
        this.pushMousePosHistory(mousePos);
        if (cb)
            cb(__classPrivateFieldGet(this, _ctx));
        else
            throw Error('without callback');
        requestAnimationFrame(this.loop.bind(this, cb));
    }
    strokeWeight(width) {
        __classPrivateFieldGet(this, _ctx).lineWidth = width;
    }
    stroke() {
        __classPrivateFieldGet(this, _ctx).stroke();
    }
    beginPath() {
        __classPrivateFieldGet(this, _ctx).beginPath();
    }
    closePath() {
        __classPrivateFieldGet(this, _ctx).closePath();
    }
    line(x1, y1, x2, y2) {
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).moveTo(x1, y1);
        __classPrivateFieldGet(this, _ctx).lineTo(x2, y2);
        this.closePath();
        this.stroke();
    }
    fontSize(size) {
        __classPrivateFieldGet(this, _ctx).font = `${size}px sans-serif`;
    }
    clear() {
        __classPrivateFieldGet(this, _ctx).clearRect(0, 0, this.width, this.height);
    }
    background(color) {
        if (color)
            __classPrivateFieldGet(this, _ctx).fillStyle = color;
        __classPrivateFieldGet(this, _ctx).fillRect(0, 0, this.width, this.height);
    }
    async loadMedia(path) {
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) + 1);
        const res = await fetch(path, { mode: 'cors' })
            .then(res => {
            if (res.ok) {
                return res.blob();
            }
            throw new Error('Network response was not ok.');
        })
            .then(myBlob => {
            var objectURL = URL.createObjectURL(myBlob);
            return objectURL;
        })
            .catch(err => {
            throw new Error('There has been a problem with your fetch operation: ' + err.message);
        });
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) - 1);
        if (__classPrivateFieldGet(this, _preloadLeftCount) === 0) {
            setTimeout(() => {
                this.setup(this.setupParams);
                this.loop(this.loopParams);
            }, 0);
        }
        return res;
    }
    async loadImage(path) {
        return new Promise(async (r) => {
            const img = new Image();
            img.src = await this.loadMedia(path);
            img.onload = () => {
                r(img);
            };
        });
    }
    sleep(time) {
        return new Promise(r => {
            setTimeout(() => {
                r();
            }, time);
        });
    }
}
_canvas = new WeakMap(), _ctx = new WeakMap(), _preloadLeftCount = new WeakMap();
//# sourceMappingURL=Canvas.js.map