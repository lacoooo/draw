import { Isetup } from 'Types';
export declare class Canvas {
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;
    frame: number;
    constructor(canvasId?: string);
    protected _createElement(elem?: string): HTMLElement;
    setup(params: Isetup): void;
    loop(cb: Function): void;
}
