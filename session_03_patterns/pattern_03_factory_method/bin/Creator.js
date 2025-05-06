"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
exports.Creator = Creator;
//# sourceMappingURL=Creator.js.map