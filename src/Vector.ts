export class Vector {
    x = 0
    y = 0
    z = 0
    constructor(x?: number, y?: number, z?: number) {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }

    set(x?: number, y?: number, z?: number) {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
        return this
    }

    copy() {
        return new Vector(this.x, this.y, this.z)
    }

    add(x?: number | Vector, y?: number, z?: number) {
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

    sub(x?: number | Vector, y?: number, z?: number) {
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

    mult(n: number) {
        if (!(typeof n === 'number' && isFinite(n))) {
            console.warn( 'n is undefined or not a finite number' )
            return this
        }
        this.x *= n
        this.y *= n
        this.z *= n
        return this
    }

    div(n: number) {
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
}