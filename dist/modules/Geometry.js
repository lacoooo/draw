var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _line;
import { Vec3 } from './Vector';
const EPSILON = 0.0001;
export class Line {
    constructor(vecA, vecB) {
        _line.set(this, void 0);
        __classPrivateFieldSet(this, _line, [vecA.clone(), vecB.clone()]);
    }
    static parallel(lineA, lineB) {
        if (Math.abs(lineA.slope - lineB.slope) < EPSILON) {
            return true;
        }
        return false;
    }
    static getIntersectionRay2D(lineA, lineB) {
        if (Line.parallel(lineA, lineB)) {
            return null;
        }
        const x = (lineB.interception - lineA.interception) / (lineA.slope - lineB.slope);
        const y = (lineA.slope * lineB.interception - lineA.interception * lineB.slope) / (lineA.slope - lineB.slope);
        return new Vec3(x, y);
    }
    get a() {
        return __classPrivateFieldGet(this, _line)[0];
    }
    set a(vec) {
        __classPrivateFieldGet(this, _line)[0] = vec.clone();
    }
    get b() {
        return __classPrivateFieldGet(this, _line)[1];
    }
    set b(vec) {
        __classPrivateFieldGet(this, _line)[1] = vec.clone();
    }
    get slope() {
        let t = this.b.x - this.a.x;
        if (t === 0) {
            t = EPSILON;
        }
        return (this.b.y - this.a.y) / t;
    }
    get interception() {
        return this.a.y - this.a.x * this.slope;
    }
    get length() {
        return Vec3.diff(this.a, this.b).length;
    }
    includePoint(point) {
        const diff = Vec3.diff(point, this.a).length + Vec3.diff(point, this.b).length - this.length;
        if (Math.abs(diff) < EPSILON) {
            return true;
        }
        return false;
    }
}
_line = new WeakMap();
//# sourceMappingURL=Geometry.js.map