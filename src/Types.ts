import { Canvas } from './canvas'
import { Num } from './num'

declare global {
    interface Window {
        Draw: (id?:string) => typeof Canvas
        Num: typeof Num
    }
}

export interface Isetup {
    canvasId?: string
    width?: number
    height?: number
}