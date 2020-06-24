import { Canvas } from './canvas'
import { Num, Geom } from './num'

declare global {
    interface Window {
        Draw: ( params: Isetup ) => Canvas
        Num: typeof Num
        Geom: Geom
    }
}

export interface Isetup {
    canvasId?: string
    width?: number
    height?: number
}