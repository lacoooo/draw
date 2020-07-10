const EPSILON = 0.00001

export class Vec3 {

    static up = new Vec3(0, 1)
    static down = new Vec3(0, -1)
    static left = new Vec3(-1, 0)
    static right = new Vec3(1, 0)
    
    public static sub(end: Vec3, start: Vec3): Vec3 {
        return new Vec3(end.x - start.x, end.y - start.y, end.y - start.y)
    }

    public static dot(vecA: Vec3, vecB: Vec3): number {
        return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z
    }

    public static toDegree(radian: number): number {
        return 180 * radian / Math.PI
    }

    public static getAngle(vecA: Vec3, vecB: Vec3): number {
        const dot: number = Vec3.dot( vecA, vecB )
        const radian: number = Math.acos( dot / ( vecA.length * vecB.length ) )
        const angle: number = Vec3.toDegree(radian)
        return angle
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

    public copy(): Vec3 {
        return new Vec3(this.x, this.y, this.z)
    }

    public add(x?: number | Vec3, y?: number, z?: number): this {
        if (x instanceof Vec3) {
            this.x += x.x || 0
            this.y += x.y || 0
            this.z += x.z || 0
            return this
        }
        this.x += x || 0
        this.y += y || 0
        this.z += z || 0
        return this
    }

    public sub(x?: number | Vec3, y?: number, z?: number): this {
        if (x instanceof Vec3) {
            this.x -= x.x || 0
            this.y -= x.y || 0
            this.z -= x.z || 0
            return this
        }
        this.x -= x || 0
        this.y -= y || 0
        this.z -= z || 0
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
            console.warn('n is 0');
            return this;
        }
        this.x /= n
        this.y /= n
        this.z /= n
        return this
    }

    public dist(x: number | Vec3, y: number, z: number): number {
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

    public normalize(): number {
        const len = this.length
        if (len <= EPSILON) {
            this.x = 0
            this.y = 0
            this.z = 0
            return 0
        }
        else if (len - 1 <= EPSILON) {
            return 1.0
        }
        this.x /= len
        this.y /= len
        this.z /= len
        return len
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
        return Vec3.dot(this, vec)
    }
    
}