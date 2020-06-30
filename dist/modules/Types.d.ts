import { Num, Geom } from './num';
import { Canvas } from './canvas';
declare global {
    interface Window {
        Draw: typeof Canvas;
        Num: typeof Num;
        Geom: typeof Geom;
    }
}
export interface Icanvas {
    frame: number;
    width: number;
    height: number;
    setup?(cb: (ctx: CanvasRenderingContext2D) => void): void;
    loop(cb: (ctx: CanvasRenderingContext2D) => void): void;
    strokeWeight(width: number): void;
    beginPath(): void;
    closePath(): void;
    line(x1: number, y1: number, x2: number, y2: number): void;
}
export interface Isetup {
    canvasId?: string;
    width?: number;
    height?: number;
}
