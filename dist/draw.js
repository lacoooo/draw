/*!
 * MIT @License
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["draw"] = factory();
	else
		root["draw"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/Input.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/Vector.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _canvas, _ctx, _loppOnce, _preloadLeftCount;


class Draw extends _Input__WEBPACK_IMPORTED_MODULE_0__["Input"] {
    constructor(params = { init: {} }) {
        super();
        _canvas.set(this, void 0);
        _ctx.set(this, void 0);
        this.strokeOpen = false;
        this.fillOpen = false;
        this.frame = 0;
        _loppOnce.set(this, false);
        _preloadLeftCount.set(this, 0);
        this.canvasElementInit(params.init);
        this.canvasSizeInit(params.init);
        this.mouseEventInit(__classPrivateFieldGet(this, _canvas));
        const { preload, setup, loop, click } = params;
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
            if (click) {
                this.click(click);
            }
        }, 0);
    }
    get width() { return __classPrivateFieldGet(this, _canvas).width; }
    set width(w) { __classPrivateFieldGet(this, _canvas).width = w; }
    get height() { return __classPrivateFieldGet(this, _canvas).height; }
    set height(h) { __classPrivateFieldGet(this, _canvas).height = h; }
    get center() { return new _Vector__WEBPACK_IMPORTED_MODULE_1__["Vec3"](this.width / 2, this.height / 2); }
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
        this.width = width || 1000;
        this.height = height || 1000;
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
        const mousePos = new _Vector__WEBPACK_IMPORTED_MODULE_1__["Vec3"](this.mouseX, this.mouseY);
        this.pushMousePosHistory(mousePos);
        if (cb)
            cb(__classPrivateFieldGet(this, _ctx));
        else
            throw Error('without callback');
        if (__classPrivateFieldGet(this, _loppOnce) === true)
            return;
        requestAnimationFrame(this.loop.bind(this, cb));
    }
    loppOnce() {
        __classPrivateFieldSet(this, _loppOnce, true);
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
        return this;
    }
    restore() {
        __classPrivateFieldGet(this, _ctx).restore();
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
        __classPrivateFieldGet(this, _ctx).rect(x, y, width, height);
        this.draw();
        return this;
    }
    circle(radius, x, y) {
        this.beginPath();
        __classPrivateFieldGet(this, _ctx).arc(x, y, radius, 0, Math.PI * 2, true);
        this.closePath();
        this.draw();
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
        aTag.click();
        aTag.remove();
    }
}
_canvas = new WeakMap(), _ctx = new WeakMap(), _loppOnce = new WeakMap(), _preloadLeftCount = new WeakMap();


/***/ }),

/***/ "./src/Input.ts":
/*!**********************!*\
  !*** ./src/Input.ts ***!
  \**********************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _canvas, _mousePos, _mouseHistoryCount;

class Input {
    constructor() {
        _canvas.set(this, void 0);
        _mousePos.set(this, new _Vector__WEBPACK_IMPORTED_MODULE_0__["Vec3"]());
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


/***/ }),

/***/ "./src/Num.ts":
/*!********************!*\
  !*** ./src/Num.ts ***!
  \********************/
/*! exports provided: Num, Geom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num", function() { return Num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geom", function() { return Geom; });
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */
class Num {
    static equals(a, b, threshold = 0.00001) {
        return Math.abs(a - b) < threshold;
    }
    static lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }
    static clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }
    static within(p, a, b) {
        return p >= Math.min(a, b) && p <= Math.max(a, b);
    }
    static randomRange(a, b = 0) {
        const r = (a > b) ? (a - b) : (b - a);
        return a + Math.random() * r;
    }
}
class Geom {
}


/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/*! exports provided: Vec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _vect;
const EPSILON = 0.00001;
class Vec3 {
    constructor(x, y, z) {
        _vect.set(this, void 0);
        __classPrivateFieldSet(this, _vect, new Float32Array([x || 0, y || 0, z || 0]));
    }
    static add(vecA, vecB) {
        return vecA.clone().add(vecB);
    }
    static diff(vecA, vecB) {
        return vecA.clone().sub(vecB);
    }
    static mult(vec, number) {
        return vec.clone().mult(number);
    }
    static div(vec, number) {
        return vec.clone().div(number);
    }
    static dist(vecA, vecB) {
        return vecA.clone().dist(vecB);
    }
    static equals(vecA, vecB) {
        return vecA.equals(vecB);
    }
    static normalize(vec) {
        return vec.clone().normalize();
    }
    static negative(vec) {
        return vec.clone().negative();
    }
    static scale(vec, number) {
        return vec.clone().scale(number);
    }
    static dot(vecA, vecB) {
        return vecA.dot(vecB);
    }
    static cross(vecA, vecB) {
        return vecA.cross(vecB);
    }
    static lerp(vecA, vecB, t) {
        const x = vecA.x * (1 - t) + vecB.x * t;
        const y = vecA.y * (1 - t) + vecB.y * t;
        const z = vecA.z * (1 - t) + vecB.z * t;
        return new Vec3(x, y, z);
    }
    static getAngle(vecA, vecB = Vec3.right) {
        return vecA.getAngle(vecB);
    }
    static getRadian(vecA, vecB = Vec3.right) {
        return vecA.getRadian(vecB);
    }
    static radian2Degree(radian) {
        return radian * 180 / Math.PI;
    }
    static getOrientationRadian(to, from = new Vec3()) {
        return to.getOrientationRadian(from);
    }
    static getOrientationAngle(to, from = new Vec3()) {
        return to.getOrientationAngle(from);
    }
    static degree2Radian(degree) {
        return degree * Math.PI / 180;
    }
    static getRandomVec(width = 100, height = width, deep = width) {
        return new Vec3(Math.random() * width, Math.random() * height, Math.random() * deep);
    }
    static getRandomGaussianVec(mean = 100, sd = 50) {
        const getNum = () => {
            let y1, x1, x2, w;
            do {
                x1 = Math.random() * 2 - 1;
                x2 = Math.random() * 2 - 1;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1);
            w = Math.sqrt(-2 * Math.log(w) / w);
            y1 = x1 * w;
            const m = mean || 0;
            const s = sd || 1;
            return y1 * s + m;
        };
        return new Vec3(getNum(), getNum());
    }
    static rotateZ(vec, deg) {
        return vec.clone().rotateZ(deg);
    }
    static rotateX(vec, deg) {
        return vec.clone().rotateX(deg);
    }
    static rotateY(vec, deg) {
        return vec.clone().rotateY(deg);
    }
    static cartesian(n) {
        return new Vec3(Math.cos(n), Math.sin(n));
    }
    static astroid(n) {
        const sinn = Math.sin(n);
        const cosn = Math.cos(n);
        const xt = Math.pow(sinn, 3);
        const yt = Math.pow(cosn, 3);
        return new Vec3(xt, yt);
    }
    static kampyle(n) {
        const sec = 1 / Math.sin(n);
        const xt = sec;
        const yt = Math.tan(n) * sec;
        return new Vec3(xt, yt);
    }
    static rect_hyperbola(n) {
        const xt = 1 / Math.sin(n);
        const yt = Math.tan(n);
        return new Vec3(xt, yt);
    }
    static superformula(n) {
        const superformula_a = 1;
        const superformula_b = 1;
        const superformula_m = 6;
        const superformula_n1 = 1;
        const superformula_n2 = 7;
        const superformula_n3 = 8;
        const f1 = Math.pow(Math.abs(Math.cos(superformula_m * n / 4) / superformula_a), superformula_n2);
        const f2 = Math.pow(Math.abs(Math.sin(superformula_m * n / 4) / superformula_b), superformula_n3);
        const fr = Math.pow(f1 + f2, -1 / superformula_n1);
        const xt = Math.cos(n) * fr;
        const yt = Math.sin(n) * fr;
        return new Vec3(xt, yt);
    }
    static swirl(vec, weight = 1) {
        const r2 = Math.pow(vec.x, 2) + Math.pow(vec.y, 2);
        const sinr = Math.sin(r2);
        const cosr = Math.cos(r2);
        const newX = 0.8 * (sinr * vec.x - cosr * vec.y);
        const newY = 0.8 * (cosr * vec.y + sinr * vec.y);
        return new Vec3(weight * newX, weight * newY);
    }
    static sinusoidal(vec, amount = 1) {
        return new Vec3(amount * Math.sin(vec.x), amount * Math.sin(vec.y));
    }
    static polar(vec, weight = 1) {
        const r = vec.length;
        const theta = Math.atan2(vec.x, vec.y);
        const x = theta / Math.PI;
        const y = r - 2.0;
        return new Vec3(weight * x, weight * y);
    }
    static hyperbolic(vec, amount = 1) {
        const r = vec.length + Math.pow(10, -10);
        const theta = Math.atan2(vec.x, vec.y);
        const x = amount * Math.sin(theta) / r;
        const y = amount * Math.cos(theta) * r;
        return new Vec3(x, y);
    }
    static power(vec, weight = 1) {
        const theta = Math.atan2(vec.y, vec.x);
        const sinr = Math.sin(theta);
        const cosr = Math.cos(theta);
        const pow = weight * Math.pow(vec.length, sinr);
        return new Vec3(pow * cosr, pow * sinr);
    }
    static cosine(vec, weight = 1) {
        const pix = vec.x * Math.PI;
        const x = weight * 0.8 * Math.cos(pix) * Math.cosh(vec.y);
        const y = -weight * 0.8 * Math.sin(pix) * Math.sinh(vec.y);
        return new Vec3(x, y);
    }
    static vexp(vec, weight = 1) {
        const r = weight * Math.exp(vec.x);
        return new Vec3(r * Math.cos(vec.y), r * Math.sin(vec.y));
    }
    get x() {
        return __classPrivateFieldGet(this, _vect)[0];
    }
    set x(x) {
        if (typeof x === 'number')
            __classPrivateFieldGet(this, _vect)[0] = x;
    }
    get y() {
        return __classPrivateFieldGet(this, _vect)[1];
    }
    set y(y) {
        if (typeof y === 'number')
            __classPrivateFieldGet(this, _vect)[1] = y;
    }
    get z() {
        return __classPrivateFieldGet(this, _vect)[2];
    }
    set z(z) {
        if (typeof z === 'number')
            __classPrivateFieldGet(this, _vect)[2] = z;
    }
    get length() {
        return Math.sqrt(this.squaredLength);
    }
    get squaredLength() {
        return (Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2));
    }
    set(x, y, z) {
        this.x = typeof x === 'number' ? x : this.x;
        this.y = typeof y === 'number' ? y : this.y;
        this.z = typeof z === 'number' ? z : this.z;
        return this;
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        return this;
    }
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }
    add(x, y = 0, z = 0) {
        if (x instanceof Vec3) {
            this.x += x.x;
            this.y += x.y;
            this.z += x.z;
            return this;
        }
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }
    sub(x, y = 0, z = 0) {
        if (x instanceof Vec3) {
            this.x -= x.x;
            this.y -= x.y;
            this.z -= x.z;
            return this;
        }
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }
    mult(n) {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn('n is undefined or not a finite number');
            return this;
        }
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    }
    div(n) {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn('n is undefined or not a finite number');
            return this;
        }
        if (n === 0) {
            console.warn('n is 0');
            return this;
        }
        this.x /= n;
        this.y /= n;
        this.z /= n;
        return this;
    }
    dist(x, y = 0, z = 0) {
        if (x instanceof Vec3) {
            return Math.sqrt(Math.pow(x.x - this.x, 2) +
                Math.pow(x.y - this.y, 2) +
                Math.pow(x.z - this.z, 2));
        }
        return Math.sqrt(Math.pow(x - this.x, 2) +
            Math.pow(y - this.y, 2) +
            Math.pow(z - this.z, 2));
    }
    equals(vec) {
        if (Math.abs(this.x - vec.x) > EPSILON) {
            return false;
        }
        else if (Math.abs(this.y - vec.y) > EPSILON) {
            return false;
        }
        else if (Math.abs(this.z - vec.z) > EPSILON) {
            return false;
        }
        return true;
    }
    normalize() {
        const len = this.length;
        if (len <= EPSILON) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            return this;
        }
        else if (len - 1 <= EPSILON) {
            return this;
        }
        this.x /= len;
        this.y /= len;
        this.z /= len;
        return this;
    }
    negative() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    dot(vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }
    cross(vec) {
        const x = this.y * vec.z - this.z * vec.y;
        const y = this.z * vec.x - this.x * vec.z;
        const z = this.x * vec.y - this.y * vec.x;
        return new Vec3(x, y, z);
    }
    getAngle(vec = Vec3.right) {
        const dot = this.dot(vec);
        const radian = Math.acos(dot / (this.length * vec.length));
        const angle = Vec3.radian2Degree(radian);
        return angle;
    }
    getRadian(vec = Vec3.right) {
        const dot = this.dot(vec);
        const radian = Math.acos(dot / (this.length * vec.length));
        return radian;
    }
    getOrientationRadian(from = new Vec3()) {
        const diff = this.clone().sub(from);
        const radian = Math.atan2(diff.y, diff.x);
        return radian;
    }
    getOrientationAngle(from = new Vec3()) {
        const diff = this.clone().sub(from);
        const radian = Math.atan2(diff.y, diff.x);
        return Vec3.radian2Degree(radian);
    }
    rotateZ(deg) {
        const atopi = Vec3.degree2Radian(deg);
        this.x = this.x * Math.cos(atopi) - this.y * Math.sin(atopi);
        this.y = this.y * Math.cos(atopi) + this.x * Math.sin(atopi);
        return this;
    }
    rotateX(deg) {
        const atopi = Vec3.degree2Radian(deg);
        this.z = this.z * Math.cos(atopi) - this.y * Math.sin(atopi);
        this.y = this.y * Math.cos(atopi) + this.z * Math.sin(atopi);
        return this;
    }
    rotateY(deg) {
        const atopi = Vec3.degree2Radian(deg);
        this.x = this.x * Math.cos(atopi) - this.z * Math.sin(atopi);
        this.z = this.z * Math.cos(atopi) + this.x * Math.sin(atopi);
        return this;
    }
}
_vect = new WeakMap();
Vec3.up = new Vec3(0, 1);
Vec3.down = new Vec3(0, -1);
Vec3.left = new Vec3(-1, 0);
Vec3.right = new Vec3(1, 0);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Num */ "./src/Num.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ "./src/Vector.ts");



window.Draw = _Canvas__WEBPACK_IMPORTED_MODULE_0__["Draw"];
window.Num = _Num__WEBPACK_IMPORTED_MODULE_1__["Num"];
window.Geom = _Num__WEBPACK_IMPORTED_MODULE_1__["Geom"];
window.Vec3 = _Vector__WEBPACK_IMPORTED_MODULE_2__["Vec3"];


/***/ })

/******/ });
});
//# sourceMappingURL=draw.js.map