class VectorStatic {
    static add(vectA: Vector, vectB: Vector) {
        return new Vector(
            vectA.x + vectB.x,
            vectA.y + vectB.y,
            vectA.z + vectB.z
        )
    }
}

export class Vector extends VectorStatic {
    #x = 0
    #y = 0
    #z = 0

    get x() {
        return this.#x
    }
    set x(x: number) {
        if (typeof x === 'number') this.#x = x
    }
    get y() {
        return this.#y
    }
    set y(y: number) {
        if (typeof y === 'number') this.#y = y
    }
    get z() {
        return this.#z
    }
    set z(z: number) {
        if (typeof z === 'number') this.#z = z
    }

    constructor(x?: number, y?: number, z?: number) {
        super()
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }

    set(x?: number, y?: number, z?: number): this {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
        return this
    }

    copy(): Vector {
        return new Vector(this.x, this.y, this.z)
    }

    add(x?: number | Vector, y?: number, z?: number): this {
        if (x instanceof Vector) {
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

    sub(x?: number | Vector, y?: number, z?: number): this {
        if (x instanceof Vector) {
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

    mult(n: number): this {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn( 'n is undefined or not a finite number' )
            return this
        }
        this.x *= n
        this.y *= n
        this.z *= n
        return this
    }

    div(n: number): this {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn( 'n is undefined or not a finite number' )
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

    dist(x: number | Vector, y: number, z: number): number {
        if (x instanceof Vector) {
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

    mag() {
        return Math.sqrt(
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2)
        )
    }

    magSq() {
        
    }
}