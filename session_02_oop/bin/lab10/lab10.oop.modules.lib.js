"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = exports.double = exports.PI = void 0;
exports.default = sayHello;
function sayHello() {
    console.log('Hello world');
}
exports.PI = 3.14;
const double = (value) => value * 2;
exports.double = double;
class Shape {
    #color = 'no-color';
    constructor(color) {
        if (color !== undefined)
            this.#color = color;
    }
    get color() { return this.#color; }
    set color(value) {
        if (value !== undefined)
            this.#color = value;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=lab10.oop.modules.lib.js.map