"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreator2 = void 0;
const Creator_1 = require("./Creator");
const ConcreteProduct2_1 = require("./ConcreteProduct2");
class ConcreteCreator2 extends Creator_1.Creator {
    factoryMethod() {
        return new ConcreteProduct2_1.ConcreteProduct2();
    }
}
exports.ConcreteCreator2 = ConcreteCreator2;
//# sourceMappingURL=ConcreteCreator2.js.map