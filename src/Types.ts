import { Num, Geom } from './Num'
import { Draw } from './Canvas'
import { Vec3 } from './Vector'

declare global {
    interface Window {
        Draw: typeof Draw
        Num: typeof Num
        Geom: typeof Geom
        Vec3: typeof Vec3
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