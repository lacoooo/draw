import { Vec3 } from './Vector';
export declare class Line {
    #private;
    static parallel(lineA: Line, lineB: Line): boolean;
    static getIntersectionRay2D(lineA: Line, lineB: Line): Vec3 | null;
    get a(): Vec3;
    set a(vec: Vec3);
    get b(): Vec3;
    set b(vec: Vec3);
    get slope(): number;
    get interception(): number;
    get length(): number;
    constructor(vecA: Vec3, vecB: Vec3);
    includePoint(point: Vec3): boolean;
}
