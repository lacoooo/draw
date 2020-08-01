export declare class Vec3 {
    #private;
    static zero: Vec3;
    static up: Vec3;
    static down: Vec3;
    static left: Vec3;
    static right: Vec3;
    static add(vecA: Vec3, vecB: Vec3): Vec3;
    static diff(vecA: Vec3, vecB: Vec3): Vec3;
    static mult(vec: Vec3, number: number): Vec3;
    static div(vec: Vec3, number: number): Vec3;
    static dist(vecA: Vec3, vecB: Vec3): number;
    static equals(vecA: Vec3, vecB: Vec3): boolean;
    static normalize(vec: Vec3): Vec3;
    static negative(vec: Vec3): Vec3;
    static scale(vec: Vec3, number: number): Vec3;
    static dot(vecA: Vec3, vecB: Vec3): number;
    static cross(vecA: Vec3, vecB: Vec3): Vec3;
    static lerp(vecA: Vec3, vecB: Vec3, t: number): Vec3;
    static getAngle(vecA: Vec3, vecB?: Vec3): number;
    static getRadian(vecA: Vec3, vecB?: Vec3): number;
    static radian2Degree(radian: number): number;
    static getOrientationRadian(to: Vec3, from?: Vec3): number;
    static getOrientationAngle(to: Vec3, from?: Vec3): number;
    static degree2Radian(degree: number): number;
    static getRandomVec(width?: number, height?: number, deep?: number): Vec3;
    static getRandomGaussianVec(mean?: number, sd?: number): Vec3;
    static rotateZ(vec: Vec3, deg: number): Vec3;
    static rotateX(vec: Vec3, deg: number): Vec3;
    static rotateY(vec: Vec3, deg: number): Vec3;
    static cartesian(n: number): Vec3;
    static astroid(n: number): Vec3;
    static kampyle(n: number): Vec3;
    static rect_hyperbola(n: number): Vec3;
    static superformula(n: number): Vec3;
    static swirl(vec: Vec3, weight?: number): Vec3;
    static sinusoidal(vec: Vec3, amount?: number): Vec3;
    static polar(vec: Vec3, weight?: number): Vec3;
    static power(vec: Vec3, weight?: number): Vec3;
    static cosine(vec: Vec3, weight?: number): Vec3;
    static vexp(vec: Vec3, weight?: number): Vec3;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
    constructor(x?: number, y?: number, z?: number);
    get length(): number;
    get squaredLength(): number;
    set(x?: number, y?: number, z?: number): this;
    reset(): this;
    clone(): Vec3;
    add(x: number | Vec3, y?: number, z?: number): this;
    sub(x: number | Vec3, y?: number, z?: number): this;
    mult(n: number): this;
    div(n: number): this;
    dist(x: number | Vec3, y?: number, z?: number): number;
    equals(vec: Vec3): boolean;
    normalize(): this;
    negative(): this;
    scale(scalar: number): this;
    dot(vec: Vec3): number;
    cross(vec: Vec3): Vec3;
    getAngle(vec?: Vec3): number;
    getRadian(vec?: Vec3): number;
    getOrientationRadian(from?: Vec3): number;
    getOrientationAngle(from?: Vec3): number;
    rotateZ(deg: number): this;
    rotateX(deg: number): this;
    rotateY(deg: number): this;
}
