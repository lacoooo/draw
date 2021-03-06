import { Num, Geom } from './Num';
import { Draw } from './Canvas';
import { Vec3 } from './Vector';
import { Line } from './Geometry';
declare global {
    interface Window {
        Draw: typeof Draw;
        Num: typeof Num;
        Geom: typeof Geom;
        Vec3: typeof Vec3;
        Line: typeof Line;
    }
}
export declare type Iinit = {
    canvasId?: string;
    width?: number;
    height?: number;
};
export declare type Ipreload = () => void;
export declare type Isetup = (ctx: CanvasRenderingContext2D) => void;
export declare type Iloop = (ctx: CanvasRenderingContext2D) => void;
export declare type Ikeyboard = (key: KeyboardEvent['key'], keyCode: KeyboardEvent['keyCode']) => void;
export interface Idraw {
    frame: number;
    width: number;
    height: number;
    setup(cb: Isetup): void;
    loop(cb: Iloop): void;
    keyboard(cb: Ikeyboard): void;
    strokeWeight(width: number): void;
    line(x1: number, y1: number, x2: number, y2: number): void;
}
export interface Iparams {
    preload?: Ipreload;
    init?: Iinit;
    setup?: Isetup;
    loop?: Iloop;
    keyboard?: Ikeyboard;
}
export interface IimgObject {
    img: HTMLImageElement;
    width: number;
    height: number;
    pixels: Uint8ClampedArray;
    getColor(x: number, y: number): number[];
}
