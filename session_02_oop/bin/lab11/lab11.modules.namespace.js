"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLibs = void 0;
var MyLibs;
(function (MyLibs) {
    MyLibs.PI = 3.14;
    MyLibs.triple = (value) => value * 3;
    class Fraction {
        #num = 1;
        #dec = 1;
        constructor(num, dec) {
            if (num !== undefined)
                this.#num = num;
            if (dec !== undefined && dec !== 0)
                this.#dec = dec;
        }
        get num() { return this.#num; }
        get dec() { return this.#dec; }
        set num(value) { if (value !== undefined)
            this.#num = value; }
        set dec(value) { if (value !== undefined)
            this.#dec = value; }
        toString() { return `(${this.#num}/${this.#dec})`; }
    }
    MyLibs.Fraction = Fraction;
})(MyLibs || (exports.MyLibs = MyLibs = {}));
//# sourceMappingURL=lab11.modules.namespace.js.map