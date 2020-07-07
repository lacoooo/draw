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

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.ts");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/vector.ts");
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


class Draw extends _input__WEBPACK_IMPORTED_MODULE_0__["Input"] {
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
        const mousePos = new _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](this.mouseX, this.mouseY);
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
    clear() {
        __classPrivateFieldGet(this, _ctx).clearRect(0, 0, this.width, this.height);
    }
    async loadMedia(path) {
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) + 1);
        const res = await this.sleep(2000);
        __classPrivateFieldSet(this, _preloadLeftCount, +__classPrivateFieldGet(this, _preloadLeftCount) - 1);
        if (__classPrivateFieldGet(this, _preloadLeftCount) === 0) {
            this.setup(this.setupParams);
            this.loop(this.loopParams);
        }
    }
    loadImage(path) {
        return this.loadMedia(path);
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./num */ "./src/num.ts");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ "./src/vector.ts");



window.Draw = _canvas__WEBPACK_IMPORTED_MODULE_0__["Draw"];
window.Num = _num__WEBPACK_IMPORTED_MODULE_1__["Num"];
window.Geom = _num__WEBPACK_IMPORTED_MODULE_1__["Geom"];
window.Vector = _vector__WEBPACK_IMPORTED_MODULE_2__["Vector"];


/***/ }),

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.ts");
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
        _mousePos.set(this, new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]());
        _mouseHistoryCount.set(this, 10);
        this.frame = 0;
        this.frameLock = 0;
        this.mousePosHistory = [];
        this.mouseDown = false;
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

/***/ "./src/num.ts":
/*!********************!*\
  !*** ./src/num.ts ***!
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

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
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
var _x, _y, _z;
class VectorStatic {
    static add(vectA, vectB) {
        return new Vector(vectA.x + vectB.x, vectA.y + vectB.y, vectA.z + vectB.z);
    }
}
class Vector extends VectorStatic {
    constructor(x, y, z) {
        super();
        _x.set(this, 0);
        _y.set(this, 0);
        _z.set(this, 0);
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    get x() {
        return __classPrivateFieldGet(this, _x);
    }
    set x(x) {
        if (typeof x === 'number')
            __classPrivateFieldSet(this, _x, x);
    }
    get y() {
        return __classPrivateFieldGet(this, _y);
    }
    set y(y) {
        if (typeof y === 'number')
            __classPrivateFieldSet(this, _y, y);
    }
    get z() {
        return __classPrivateFieldGet(this, _z);
    }
    set z(z) {
        if (typeof z === 'number')
            __classPrivateFieldSet(this, _z, z);
    }
    set(x, y, z) {
        this.x = typeof x === 'number' ? x : this.x;
        this.y = typeof y === 'number' ? y : this.y;
        this.z = typeof z === 'number' ? z : this.z;
        return this;
    }
    copy() {
        return new Vector(this.x, this.y, this.z);
    }
    add(x, y, z) {
        if (x instanceof Vector) {
            this.x += x.x || 0;
            this.y += x.y || 0;
            this.z += x.z || 0;
            return this;
        }
        this.x += x || 0;
        this.y += y || 0;
        this.z += z || 0;
        return this;
    }
    sub(x, y, z) {
        if (x instanceof Vector) {
            this.x -= x.x || 0;
            this.y -= x.y || 0;
            this.z -= x.z || 0;
            return this;
        }
        this.x -= x || 0;
        this.y -= y || 0;
        this.z -= z || 0;
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
    dist(x, y, z) {
        if (x instanceof Vector) {
            return Math.sqrt(Math.pow(x.x - this.x, 2) +
                Math.pow(x.y - this.y, 2) +
                Math.pow(x.z - this.z, 2));
        }
        return Math.sqrt(Math.pow(x - this.x, 2) +
            Math.pow(y - this.y, 2) +
            Math.pow(z - this.z, 2));
    }
    mag() {
        return Math.sqrt(Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2));
    }
    magSq() {
    }
}
_x = new WeakMap(), _y = new WeakMap(), _z = new WeakMap();


/***/ })

/******/ });
});
//# sourceMappingURL=draw.js.map