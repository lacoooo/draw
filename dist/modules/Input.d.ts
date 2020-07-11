import { Vec3 } from './Vector';
export declare class Input {
    #private;
    frame: number;
    frameLock: number;
    get mousePos(): Vec3;
    get mouseX(): number;
    set mouseX(x: number);
    get mouseY(): number;
    set mouseY(y: number);
    get pmouseX(): number;
    get pmouseY(): number;
    mousePosHistory: Vec3[];
    mouseDown: boolean;
    get canvasPos(): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    setMouseHistoryCount(count: number): void;
    protected pushMousePosHistory(currentMousePos: Vec3): void;
    protected mouseEventInit(canvas: HTMLCanvasElement): void;
    private onmousemoveInit;
    private onmousedownInit;
    private onmouseupInit;
    click(cb: (key: KeyboardEvent['key'], keyCode: KeyboardEvent['keyCode']) => void): void;
}
