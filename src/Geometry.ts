import { Vec3 } from './Vector'

const EPSILON = 0.001

export class Line {

    public static parallel(lineA: Line, lineB: Line): boolean {
        if (Math.abs(lineA.slope - lineB.slope) < EPSILON) {
            return true
        }
        return false
    }

    public static getIntersection(lineA: Line, lineB: Line): Vec3 | null {
        if (Math.abs(lineA.slope - lineB.slope) < EPSILON) {
            console.warn('No Intersection.')
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
        return (this.b.y - this.a.y) / (this.b.x - this.a.x)
    }
    get interception(): number {
        return this.a.y - this.a.x * this.slope
    }

    constructor(vecA: Vec3, vecB: Vec3) {
        this.#line = [vecA.clone(), vecB.clone()]
    }

    includePoint(point: Vec3): boolean {
        if (point.x < Math.min(this.a.x, this.b.x)) return false
        else if (point.x > Math.max(this.a.x, this.b.x)) return false
        else if (point.y < Math.min(this.a.y, this.b.y)) return false
        else if (point.y > Math.max(this.a.y, this.b.y)) return false

        if (!Line.parallel(this, new Line(this.a, point))) return false

        return true
    }
}