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
var _canvas, _ctx, _preloadLeftCount;


class Draw extends _Input__WEBPACK_IMPORTED_MODULE_0__["Input"] {
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
        const mousePos = new _Vector__WEBPACK_IMPORTED_MODULE_1__["Vec3"](this.mouseX, this.mouseY);
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
        return vecA.copy().add(vecB);
    }
    static sub(vecA, vecB) {
        return vecA.copy().sub(vecB);
    }
    static mult(vec, number) {
        return vec.copy().mult(number);
    }
    static div(vec, number) {
        return vec.copy().div(number);
    }
    static dist(vecA, vecB) {
        return vecA.copy().dist(vecB);
    }
    static equals(vecA, vecB) {
        return vecA.equals(vecB);
    }
    static normalize(vec) {
        return vec.copy().normalize();
    }
    static negative(vec) {
        return vec.copy().negative();
    }
    static scale(vec, number) {
        return vec.copy().scale(number);
    }
    static dot(vecA, vecB) {
        return vecA.copy().dot(vecB);
    }
    static getAngle(vecA, vecB) {
        return vecA.dot(vecB);
    }
    static toDegree(radian) {
        return 180 * radian / Math.PI;
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
    copy() {
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
            return Vec3.dist(this, x);
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
    getAngle(vec) {
        const dot = this.dot(vec);
        const radian = Math.acos(dot / (this.length * vec.length));
        const angle = Vec3.toDegree(radian);
        return angle;
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