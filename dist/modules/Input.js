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
var _canvas, _mousePos, _mouseHistoryCount;
import { Vec3 } from './Vector';
export class Input {
    constructor() {
        _canvas.set(this, void 0);
        _mousePos.set(this, new Vec3());
        _mouseHistoryCount.set(this, 10);
        this.frame = 0;
        this.frameLock = 0;
        this.mousePosHistory = [];
        this.mouseDown = false;
    }
    get mousePos() {
        return __classPrivateFieldGet(this, _mousePos);
    }
    get mouseX() {
        return __classPrivateFieldGet(this, _mousePos).x;
    }
    set mouseX(x) {
        __classPrivateFieldGet(this, _mousePos).x = x;
    }
    get mouseY() {
        return __classPrivateFieldGet(this, _mousePos).y;
    }
    set mouseY(y) {
        __classPrivateFieldGet(this, _mousePos).y = y;
    }
    get pmouseX() {
        const len = this.mousePosHistory.length;
        if (len > 2) {
            return this.mousePosHistory[1].x;
        }
        else if (len === 1) {
            return this.mousePosHistory[0].x;
        }
        return this.mouseX;
    }
    get pmouseY() {
        const len = this.mousePosHistory.length;
        if (len > 2) {
            return this.mousePosHistory[1].y;
        }
        else if (len === 1) {
            return this.mousePosHistory[0].y;
        }
        return this.mouseY;
    }
    get canvasPos() {
        const pos = __classPrivateFieldGet(this, _canvas).getBoundingClientRect();
        return {
            left: pos.left,
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom
        };
    }
    setMouseHistoryCount(count) {
        __classPrivateFieldSet(this, _mouseHistoryCount, count);
    }
    pushMousePosHistory(currentMousePos) {
        this.mousePosHistory.unshift(currentMousePos);
        if (this.mousePosHistory.length > __classPrivateFieldGet(this, _mouseHistoryCount)) {
            this.mousePosHistory.pop();
        }
    }
    mouseEventInit(canvas) {
        __classPrivateFieldSet(this, _canvas, canvas);
        this.onmousemoveInit();
        this.onmousedownInit();
        this.onmouseupInit();
    }
    onmousemoveInit() {
        __classPrivateFieldGet(this, _canvas).addEventListener('mousemove', (ev) => {
            const canvasPos = this.canvasPos;
            let posX = 0, posY = 0;
            if (ev.pageX) {
                posX = ev.pageX;
                posY = ev.pageY;
            }
            else if (ev.clientX) {
                posX = ev.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
                posY = ev.clientY + document.documentElement.scrollTop + document.body.scrollTop;
            }
            this.mouseX = Math.round(posX - canvasPos.left - window.scrollX);
            this.mouseY = Math.round(posY - canvasPos.top - window.scrollY);
        }, false);
    }
    onmousedownInit() {
        document.body.addEventListener('mousedown', (ev) => {
            ev = ev || window.event;
            if (ev.button === 0) {
                this.mouseDown = true;
            }
        }, false);
    }
    onmouseupInit() {
        document.body.addEventListener('mouseup', (ev) => {
            ev = ev || window.event;
            if (ev.button === 0) {
                this.mouseDown = false;
            }
        }, false);
    }
    click(cb) {
        document.onkeydown = e => {
            cb(e.key, e.keyCode);
        };
    }
}
_canvas = new WeakMap(), _mousePos = new WeakMap(), _mouseHistoryCount = new WeakMap();
//# sourceMappingURL=Input.js.map