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
var _vect;
const EPSILON = 0.00001;
export class Vec3 {
    constructor(x, y, z) {
        _vect.set(this, void 0);
        __classPrivateFieldSet(this, _vect, new Float32Array([x || 0, y || 0, z || 0]));
    }
    static add(vecA, vecB) {
        return new Vec3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.y + vecB.y);
    }
    static sub(vecA, vecB) {
        return new Vec3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.y - vecB.y);
    }
    static mult() {
        return new Vec3();
    }
    static div() {
        return new Vec3();
    }
    static dist(vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) +
            Math.pow(vecA.y - vecB.y, 2) +
            Math.pow(vecA.z - vecB.z, 2));
    }
    static dot(vecA, vecB) {
        return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z;
    }
    static toDegree(radian) {
        return 180 * radian / Math.PI;
    }
    static getAngle(vecA, vecB) {
        const dot = Vec3.dot(vecA, vecB);
        const radian = Math.acos(dot / (vecA.length * vecB.length));
        const angle = Vec3.toDegree(radian);
        return angle;
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
    add(x, y, z) {
        if (x instanceof Vec3) {
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
        if (x instanceof Vec3) {
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
        if (x instanceof Vec3) {
            return Vec3.dist(this, x);
        }
        return Math.sqrt(Math.pow(x - this.x, 2) +
            Math.pow(y - this.y, 2) +
            Math.pow(z - this.z, 2));
    }
    get length() {
        return Math.sqrt(this.squaredLength);
    }
    get squaredLength() {
        return (Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2));
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
            return 0;
        }
        else if (len - 1 <= EPSILON) {
            return 1.0;
        }
        this.x /= len;
        this.y /= len;
        this.z /= len;
        return len;
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
        return Vec3.dot(this, vec);
    }
    getAngle(vec) {
        return Vec3.getAngle(this, vec);
    }
}
_vect = new WeakMap();
Vec3.up = new Vec3(0, 1);
Vec3.down = new Vec3(0, -1);
Vec3.left = new Vec3(-1, 0);
Vec3.right = new Vec3(1, 0);
//# sourceMappingURL=Vector.js.map