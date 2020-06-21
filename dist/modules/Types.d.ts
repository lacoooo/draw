import { Canvas } from 'Canvas';
declare global {
    interface Window {
        Draw: Canvas;
    }
}
export interface Isetup {
    width?: number;
    height?: number;
}
