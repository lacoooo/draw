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
var _canvas, _ctx, _restore, _loopOnce, _preloadLeftCount;
import { Input } from './Input';
import { Vec3 } from './Vector';
export class Draw extends Input {
    constructor(params = { init: {} }) {
        super();
        _canvas.set(this, void 0);
        _ctx.set(this, void 0);
        this.strokeOpen = false;
        this.fillOpen = false;
        _restore.set(this, {
            strokeOpen: false,
            fillOpen: false
        });
        this.frame = 0;
        _loopOnce.set(this, false);
        _preloadLeftCount.set(this, 0);
        this.canvasElementInit(params.init);
        this.canvasSizeInit(params.init);
        this.mouseEventInit(__classPrivateFieldGet(this, _canvas));
        const { preload, setup, loop, keyboard } = params;
        setTimeout(() => {
            if (preload) {
                this.preload(preload);
            }
            if (setup) {
                this.setup(setup);
            }
            if (loop) {
                this.loop(loop);
            }
            if (keyboard) {
                this.keyboard(keyboard);
            }
        }, 0);
    }
    get width() { return __classPrivateFieldGet(this, _canvas).width; }
    set width(w) { __classPrivateFieldGet(this, _canvas).width = w; }
    get height() { return __classPrivateFieldGet(this, _canvas).height; }
    set height(h) { __classPrivateFieldGet(this, _canvas).height = h; }
    get center() { return new Vec3(this.width / 2, this.height / 2); }
    canvasElementInit(init) {
        const { canvasId } = init || {};
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
    canvasSizeInit(init) {
        const { width, height } = init || {};
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
    preload(cb) {
        if (cb)
            cb();
    }
    setup(cb) {
        if (!this.setupParams) {
            this.setupParams = cb;
        }
        if (__classPrivateFieldGet(this, _preloadLeftCount) > 0 && this.frame === 0)
            return;
        if (cb)
            cb(__classPrivateFieldGet(this, _ctx));
    }
    loop(cb) {
        if (!this.loopParams) {
            this.loopParams = cb;
        }
        if (__classPrivateFieldGet(this, _preloadLeftCount) > 0 && this.frame === 0)
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
        if (__classPrivateFieldGet(this, _loopOnce) === true)
            return;
        requestAnimationFrame(this.loop.bind(this, cb));
    }
    loopOnce() {
        __classPrivateFieldSet(this, _loopOnce, true);
    }
    strokeWeight(width) {
        __classPrivateFieldGet(this, _ctx).lineWidth = width;
        return this;
    }
    beginPath() {
        __classPrivateFieldGet(this, _ctx).beginPath();
        return this;
    }
    closePath() {
        __classPrivateFieldGet(this, _ctx).closePath();
        return this;
    }
    save() {
        __classPrivateFieldGet(this, _ctx).save();
        __classPrivateFieldSet(this, _restore, {
            strokeOpen: this.strokeOpen,
            fillOpen: this.fillOpen
        });
        return this;
    }
    restore() {
        __classPrivateFieldGet(this, _ctx).restore();
        this.strokeOpen = __classPrivateFieldGet(this, _restore).strokeOpen;
        this.fillOpen = __classPrivateFieldGet(this, _restore).fillOpen;
        return this;
    }
    line(x1, y1, x2, y2) {
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).moveTo(x1, y1);
        __classPrivateFieldGet(this, _ctx).lineTo(x2, y2);
        this.closePath();
        this.draw();
        return this;
    }
    dashline(x1, y1, x2, y2, segments = [5, 5]) {
        this.save();
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).setLineDash(segments);
        __classPrivateFieldGet(this, _ctx).moveTo(x1, y1);
        __classPrivateFieldGet(this, _ctx).lineTo(x2, y2);
        this.draw();
        this.restore();
        return this;
    }
    rect(x, y, width = 100, height = 100) {
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).rect(x, y, width, height);
        this.closePath();
        this.draw();
        return this;
    }
    circle(radius, x, y) {
        this.save();
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).arc(x, y, radius, 0, Math.PI * 2, true);
        this.closePath();
        this.draw();
        this.restore();
        return this;
    }
    point(x, y) {
        x = Math.round(x);
        y = Math.round(y);
        this.save();
        this.strokeOpen = false;
        this.fillOpen = true;
        this.fillStyle(__classPrivateFieldGet(this, _ctx).strokeStyle);
        if (__classPrivateFieldGet(this, _ctx).lineWidth > 1) {
            this.circle(__classPrivateFieldGet(this, _ctx).lineWidth / 2, x, y);
        }
        else {
            this.rect(x, y, 1, 1);
        }
        this.restore();
        return this;
    }
    image(file, x, y) {
        __classPrivateFieldGet(this, _ctx).drawImage(file.img, x, y);
        return this;
    }
    translate(x, y) {
        __classPrivateFieldGet(this, _ctx).translate(x, y);
        return this;
    }
    rotate(angle) {
        __classPrivateFieldGet(this, _ctx).rotate(angle);
        return this;
    }
    scale(x, y = x) {
        __classPrivateFieldGet(this, _ctx).scale(x, y);
        return this;
    }
    textSize(size) {
        __classPrivateFieldGet(this, _ctx).font = `${size}px sans-serif`;
        return this;
    }
    text(text, x, y) {
        __classPrivateFieldGet(this, _ctx).fillText(text, x, y);
        return this;
    }
    fillStyle(color) {
        __classPrivateFieldGet(this, _ctx).fillStyle = color;
        return this;
    }
    strokeStyle(color) {
        __classPrivateFieldGet(this, _ctx).strokeStyle = color;
        return this;
    }
    lineWidth(width) {
        __classPrivateFieldGet(this, _ctx).lineWidth = width;
        return this;
    }
    getBezierPoints(p0, p1, p2, p3, number = 100) {
        let t = 0;
        const vecs = [];
        for (let i = 0; i <= number; i++) {
            t = i / number;
            const t_pow3 = Math.pow(t, 3);
            const pos = p0.clone().mult(Math.pow(1 - t, 3))
                .add(p1.clone().mult(3 * t * Math.pow(1 - t, 2)))
                .add(p2.clone().mult(3 * (Math.pow(t, 2) - t_pow3)))
                .add(p3.clone().mult(t_pow3));
            vecs.push(pos);
        }
        return vecs;
    }
    draw() {
        if (this.fillOpen === true) {
            __classPrivateFieldGet(this, _ctx).fill();
        }
        if (this.strokeOpen === true) {
            __classPrivateFieldGet(this, _ctx).stroke();
        }
    }
    clear() {
        __classPrivateFieldGet(this, _ctx).clearRect(0, 0, this.width, this.height);
        return this;
    }
    background(color) {
        if (color)
            __classPrivateFieldGet(this, _ctx).fillStyle = color;
        __classPrivateFieldGet(this, _ctx).fillRect(0, 0, this.width, this.height);
        return this;
    }
    async loadMedia(path, file) {
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) + 1);
        const res = await fetch(path, { mode: 'cors' })
            .catch(err => {
            throw new Error('There has been a problem with your fetch operation: ' + err.message);
        });
        if (!res.ok) {
            throw new Error('Network response was not ok.');
        }
        const blob = await res.blob()
            .catch(err => {
            throw new Error('There has been a problem with your response blob(): ' + err.message);
        });
        const objectURL = URL.createObjectURL(blob);
        if (file && file.img instanceof HTMLImageElement) {
            await new Promise(r => {
                file.img.src = objectURL;
                file.img.onload = () => {
                    const canvas = this._createElement("canvas");
                    const ctx = canvas.getContext('2d');
                    canvas.width = file.width;
                    canvas.height = file.height;
                    if (ctx) {
                        ctx.drawImage(file.img, 0, 0);
                        const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        file.pixels = pixelData.data;
                    }
                    r();
                };
                file.img.onerror = err => {
                    throw new Error('Image onload error: ' + err);
                };
            });
        }
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) - 1);
        if (__classPrivateFieldGet(this, _preloadLeftCount) === 0 && this.frame === 0) {
            setTimeout(() => {
                this.setup(this.setupParams);
                this.loop(this.loopParams);
            }, 0);
        }
    }
    loadImage(path) {
        const img = new Image();
        const imgObj = new class {
            constructor() {
                this.img = img;
            }
            get width() {
                return img.width;
            }
            get height() {
                return img.height;
            }
            getColor(x, y) {
                x = Math.round(x);
                y = Math.round(y);
                if (x < 0)
                    x = 0;
                else if (x > this.width)
                    x = this.width;
                if (y < 0)
                    y = 0;
                else if (y > this.height)
                    y = this.height;
                const start = (x * y + x) * 4;
                const p = this.pixels || [];
                const result = [p[start], p[start + 1], p[start + 2], p[start + 3]];
                result.r = p[start];
                result.g = p[start + 1];
                result.b = p[start + 2];
                result.a = p[start + 3];
                return result;
            }
        };
        this.loadMedia(path, imgObj);
        return imgObj;
    }
    saveFrame() {
        const canvasData = __classPrivateFieldGet(this, _canvas).toDataURL("image/png");
        const aTag = document.createElement("a");
        aTag.download = String(+new Date() + Math.round(Math.random() * 1000));
        aTag.href = canvasData;
        document.body.appendChild(aTag);
        aTag.keyboard();
        aTag.remove();
    }
}
_canvas = new WeakMap(), _ctx = new WeakMap(), _restore = new WeakMap(), _loopOnce = new WeakMap(), _preloadLeftCount = new WeakMap();
//# sourceMappingURL=Canvas.js.map