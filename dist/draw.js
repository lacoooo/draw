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
var _canvas, _ctx;

class Draw extends _input__WEBPACK_IMPORTED_MODULE_0__["Input"] {
    constructor(params) {
        super();
        _canvas.set(this, void 0);
        _ctx.set(this, void 0);
        this.width = 1000;
        this.height = 1000;
        this.frame = 0;
        this.canvasElementInit(params);
        this.canvasSizeInit(params);
        this.mouseEventInit(__classPrivateFieldGet(this, _canvas));
    }
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
        __classPrivateFieldGet(this, _canvas).width = width || this.width;
        __classPrivateFieldGet(this, _canvas).height = height || this.height;
        this.width = __classPrivateFieldGet(this, _canvas).width;
        this.height = __classPrivateFieldGet(this, _canvas).height;
    }
    click(cb) {
        document.onkeydown = e => {
            cb(e.key, e.keyCode);
        };
    }
    _createElement(elem = "div") {
        const d = document.createElement(elem);
        return d;
    }
    setup(cb) {
        if (cb) {
            cb(__classPrivateFieldGet(this, _ctx));
        }
    }
    loop(cb) {
        if (document.hidden === true) {
            requestAnimationFrame(this.loop.bind(this, cb));
            return;
        }
        if (cb)
            cb(__classPrivateFieldGet(this, _ctx));
        else
            throw Error('without callback');
        this.frame++;
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
}
_canvas = new WeakMap(), _ctx = new WeakMap();


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
var _canvas;
class Input {
    constructor() {
        _canvas.set(this, void 0);
        this.mouseDown = false;
        this.mouseX = 0;
        this.pmouseX = 0;
        this.mouseY = 0;
        this.pmouseY = 0;
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
    mousePositionUpdate(ev) {
        const canvasPos = this.canvasPos;
        this.pmouseX = this.mouseX;
        this.pmouseY = this.mouseY;
        this.mouseX = Math.round(ev.pageX - canvasPos.left - window.scrollX);
        this.mouseY = Math.round(ev.pageY - canvasPos.top - window.scrollY);
    }
    mouseEventInit(canvas) {
        __classPrivateFieldSet(this, _canvas, canvas);
        this.onmousemoveInit();
        this.onmousedownInit();
        this.onmouseupInit();
    }
    onmousemoveInit() {
        __classPrivateFieldGet(this, _canvas).onmousemove = this.mousePositionUpdate.bind(this);
    }
    onmousedownInit() {
        document.body.onmousedown = (e) => {
            e = e || window.event;
            if (e.button === 0) {
                this.mouseDown = true;
            }
        };
    }
    onmouseupInit() {
        document.body.onmouseup = (e) => {
            e = e || window.event;
            if (e.button === 0) {
                this.mouseDown = false;
            }
        };
    }
}
_canvas = new WeakMap();


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
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
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