const EPSILON = 0.00001

export class Vec3 {

    public static up = new Vec3(0, 1)
    public static down = new Vec3(0, -1)
    public static left = new Vec3(-1, 0)
    public static right = new Vec3(1, 0)

    public static add(vecA: Vec3, vecB: Vec3): Vec3 {
        return vecA.clone().add(vecB)
    }

    public static diff(vecA: Vec3, vecB: Vec3): Vec3 {
        return vecA.clone().sub(vecB)
    }

    public static mult(vec: Vec3, number: number): Vec3 {
        return vec.clone().mult(number)
    }

    public static div(vec: Vec3, number: number): Vec3 {
        return vec.clone().div(number)
    }

    public static dist(vecA: Vec3, vecB: Vec3): number {
        return vecA.clone().dist(vecB)
    }

    public static equals(vecA: Vec3, vecB: Vec3): boolean {
        return vecA.equals(vecB)
    }

    public static normalize(vec: Vec3): Vec3 {
        return vec.clone().normalize()
    }

    public static negative(vec: Vec3): Vec3 {
        return vec.clone().negative()
    }

    public static scale(vec: Vec3, number: number): Vec3 {
        return vec.clone().scale(number)
    }

    public static dot(vecA: Vec3, vecB: Vec3): number {
        return vecA.dot(vecB)
    }

    public static cross(vecA: Vec3, vecB: Vec3): Vec3 {
        return vecA.cross(vecB)
    }

    public static lerp(vecA: Vec3, vecB: Vec3, t: number): Vec3 {
        const x = vecA.x * (1 - t) + vecB.x * t
        const y = vecA.y * (1 - t) + vecB.y * t
        const z = vecA.z * (1 - t) + vecB.z * t
        return new Vec3(x, y, z)
    }

    /**
     * Get the angle between two vectors
     * @param vecA 
     * @param vecB 
     */
    public static getAngle(vecA: Vec3, vecB: Vec3 = Vec3.right): number {
        return vecA.getAngle(vecB)
    }

    public static getRadian(vecA: Vec3, vecB: Vec3 = Vec3.right): number {
        return vecA.getRadian(vecB)
    }
    
    public static radian2Degree(radian: number): number {
        return radian * 180 / Math.PI
    }

    public static getOrientationRadian(to: Vec3, from: Vec3 = new Vec3()): number {
        return to.getOrientationRadian(from)
    }

    public static getOrientationAngle(to: Vec3, from: Vec3 = new Vec3()): number {
        return to.getOrientationAngle(from)
    }

    public static degree2Radian(degree: number): number {
        return degree * Math.PI / 180
    }

    public static getRandomVec(width: number = 100, height: number = width, deep: number = width): Vec3 {
        return new Vec3(Math.random() * width, Math.random() * height, Math.random() * deep)
    }

    #vect: Float32Array

    get x() {
        return this.#vect[0]
    }
    set x(x: number) {
        if (typeof x === 'number') this.#vect[0] = x
    }
    get y() {
        return this.#vect[1]
    }
    set y(y: number) {
        if (typeof y === 'number') this.#vect[1] = y
    }
    get z() {
        return this.#vect[2]
    }
    set z(z: number) {
        if (typeof z === 'number') this.#vect[2] = z
    }

    constructor(x?: number, y?: number, z?: number) {
        this.#vect = new Float32Array([x || 0, y || 0, z || 0])
    }

    get length(): number {
        return Math.sqrt(this.squaredLength)
    }

    get squaredLength(): number {
        return (
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2)
        )
    }

    public set(x?: number, y?: number, z?: number): this {
        this.x = typeof x === 'number' ? x : this.x
        this.y = typeof y === 'number' ? y : this.y
        this.z = typeof z === 'number' ? z : this.z
        return this
    }

    public reset() {
        this.x = 0
        this.y = 0
        this.z = 0
        return this
    }

    public clone(): Vec3 {
        return new Vec3(this.x, this.y, this.z)
    }

    public add(x: number | Vec3, y: number = 0, z: number = 0): this {
        if (x instanceof Vec3) {
            this.x += x.x
            this.y += x.y
            this.z += x.z
            return this
        }
        this.x += x
        this.y += y
        this.z += z
        return this
    }

    public sub(x: number | Vec3, y: number = 0, z: number = 0): this {
        if (x instanceof Vec3) {
            this.x -= x.x
            this.y -= x.y
            this.z -= x.z
            return this
        }
        this.x -= x
        this.y -= y
        this.z -= z
        return this
    }

    public mult(n: number): this {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn('n is undefined or not a finite number')
            return this
        }
        this.x *= n
        this.y *= n
        this.z *= n
        return this
    }

    public div(n: number): this {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn('n is undefined or not a finite number')
            return this
        }
        if (n === 0) {
            console.warn('n is 0')
            return this
        }
        this.x /= n
        this.y /= n
        this.z /= n
        return this
    }

    public dist(x: number | Vec3, y: number = 0, z: number = 0): number {
        if (x instanceof Vec3) {
            return Math.sqrt(
                Math.pow(x.x - this.x, 2) +
                Math.pow(x.y - this.y, 2) +
                Math.pow(x.z - this.z, 2)
            )
        }
        return Math.sqrt(
            Math.pow(x - this.x, 2) +
            Math.pow(y - this.y, 2) +
            Math.pow(z - this.z, 2)
        )
    }

    public equals(vec: Vec3): boolean {
        if (Math.abs(this.x - vec.x) > EPSILON) {
            return false
        }
        else if (Math.abs(this.y - vec.y) > EPSILON) {
            return false
        }
        else if (Math.abs(this.z - vec.z) > EPSILON) {
            return false
        }
        return true
    }

    public normalize(): this {
        const len = this.length
        if (len <= EPSILON) {
            this.x = 0
            this.y = 0
            this.z = 0
            return this
        }
        else if (len - 1 <= EPSILON) {
            return this
        }
        this.x /= len
        this.y /= len
        this.z /= len
        return this
    }

    public negative(): this {
        this.x = -this.x
        this.y = -this.y
        this.z = -this.z
        return this
    }

    public scale(scalar: number): this {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar
        return this
    }

    public dot(vec: Vec3): number {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z
    }

    public cross(vec: Vec3): Vec3 {
        const x = this.y * vec.z - this.z * vec.y
        const y = this.z * vec.x - this.x * vec.z
        const z = this.x * vec.y - this.y * vec.x
        return new Vec3(x, y, z)
    }

    public getAngle(vec: Vec3 = Vec3.right): number {
        const dot: number = this.dot(vec)
        const radian: number = Math.acos(dot / (this.length * vec.length))
        const angle: number = Vec3.radian2Degree(radian)
        return angle
    }

    public getRadian(vec: Vec3 = Vec3.right): number {
        const dot: number = this.dot(vec)
        const radian: number = Math.acos(dot / (this.length * vec.length))
        return radian
    }

    public getOrientationRadian(from: Vec3 = new Vec3()): number {
        const diff: Vec3 = this.clone().sub(from)
        const radian: number = Math.atan2(diff.y, diff.x)
        return radian
    }

    public getOrientationAngle(from: Vec3 = new Vec3()): number {
        const diff: Vec3 = this.clone().sub(from)
        const radian: number = Math.atan2(diff.y, diff.x)
        return Vec3.radian2Degree(radian)
    }

}