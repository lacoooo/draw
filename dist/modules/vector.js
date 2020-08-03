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
        const vec = new Vec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        vec.normalize();
        vec.set(vec.x * width, vec.y * height, vec.z * deep);
        return vec;
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
        const r = weight * Math.exp((vec.x + vec.y) / 2);
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
        if (len > EPSILON) {
            this.x /= len;
            this.y /= len;
            this.z /= len;
        }
        return this;
    }
    negative() {
        return this.scale(-1);
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
Vec3.zero = new Vec3();
Vec3.up = new Vec3(0, 1);
Vec3.down = new Vec3(0, -1);
Vec3.left = new Vec3(-1, 0);
Vec3.right = new Vec3(1, 0);
//# sourceMappingURL=Vector.js.map