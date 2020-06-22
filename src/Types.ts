import { Canvas } from 'Canvas'

declare global {
    interface Window {
        Draw: (id?:string) => Canvas
    }
}

export interface Isetup {
    canvasId?: string
    width?: number
    height?: number
}