import { Num, Geom } from './num'
import { Draw } from './canvas'

declare global {
    interface Window {
        Draw: typeof Draw
        Num: typeof Num
        Geom: typeof Geom
    }
}

export interface Idraw {
    frame: number
    width: number
    height: number
    setup(cb: (ctx: CanvasRenderingContext2D) => void): void
    loop(cb: (ctx: CanvasRenderingContext2D) => void): void
    click(cb: (key: KeyboardEvent['key'], keyCode: KeyboardEvent['keyCode']) => void): void
    strokeWeight(width: number): void
    line(x1: number, y1: number, x2: number, y2: number): void
}

export interface Isetup {
    canvasId?: string
    width?: number
    height?: number
}