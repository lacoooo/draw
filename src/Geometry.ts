import { Vec3 } from './Vector'

const EPSILON = 0.0001

export class Line {

    public static parallel(lineA: Line, lineB: Line): boolean {
        if (Math.abs(lineA.slope - lineB.slope) < EPSILON) {
            return true
        }
        return false
    }

    public static getIntersectionRay2D(lineA: Line, lineB: Line): Vec3 | null {
        if (Line.parallel(lineA, lineB)) {
            return null
        }
        const x = (lineB.interception - lineA.interception) / (lineA.slope - lineB.slope)
        const y = (lineA.slope * lineB.interception - lineA.interception * lineB.slope) / (lineA.slope - lineB.slope)
        return new Vec3(x, y)
    }

    #line: [Vec3, Vec3]
    get a(): Vec3 {
        return this.#line[0]
    }
    set a(vec: Vec3) {
        this.#line[0] = vec.clone()
    }
    get b(): Vec3 {
        return this.#line[1]
    }
    set b(vec: Vec3) {
        this.#line[1] = vec.clone()
    }
    get slope(): number {
        let t = this.b.x - this.a.x
        if (t === 0) {
            t = EPSILON
        }
        return (this.b.y - this.a.y) / t
    }
    get interception(): number {
        return this.a.y - this.a.x * this.slope
    }

    get length(): number {
        return Vec3.diff(this.a, this.b).length
    }

    constructor(vecA: Vec3, vecB: Vec3) {
        this.#line = [vecA.clone(), vecB.clone()]
    }

    includePoint(point: Vec3): boolean {
        const diff = Vec3.diff(point, this.a).length + Vec3.diff(point, this.b).length - this.length
        if (Math.abs(diff) < EPSILON) {
            return true
        }
        return false
    }
}