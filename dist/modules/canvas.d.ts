import { Icanvas, Isetup } from './types';
export declare class Canvas implements Icanvas {
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;
    frame: number;
    width: number;
    height: number;
    constructor(params?: Isetup);
    protected _createElement(elem?: string): HTMLElement;
    setup(cb: (ctx: CanvasRenderingContext2D) => void): void;
    loop(cb: (ctx: CanvasRenderingContext2D) => void): void;
    strokeWeight(width: number): void;
    private stroke;
    beginPath(): void;
    closePath(): void;
    line(x1: number, y1: number, x2: number, y2: number): void;
}
