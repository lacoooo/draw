var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
import { Canvas } from './canvas';
import { Num, Geom } from './num';
window.Draw = Canvas;
window.Num = Num;
window.Geom = Geom;
class Person {
    constructor(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    greet() {
        console.log(`Hello, my name is ${__classPrivateFieldGet(this, _name)}!`);
    }
}
_name = new WeakMap();
let semlinker = new Person("Semlinker");
//# sourceMappingURL=index.js.map