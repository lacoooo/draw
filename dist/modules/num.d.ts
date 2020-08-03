/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */
export declare class Num {
    static equals(a: number, b: number, threshold?: number): boolean;
    static lerp(a: number, b: number, t: number): number;
    static clamp(val: number, min: number, max: number): number;
    static within(p: number, a: number, b: number): boolean;
    static randomRange(a: number, b: number): number;
    static randomRangeInt(a: number, b: number): number;
}
export declare class Geom {
}
