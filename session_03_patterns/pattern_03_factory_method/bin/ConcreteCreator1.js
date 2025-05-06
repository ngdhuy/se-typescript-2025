"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCreator1 = void 0;
const Creator_1 = require("./Creator");
const ConcreteProduct1_1 = require("./ConcreteProduct1");
class ConcreteCreator1 extends Creator_1.Creator {
    factoryMethod() {
        return new ConcreteProduct1_1.ConcreteProduct1();
    }
}
exports.ConcreteCreator1 = ConcreteCreator1;
//# sourceMappingURL=ConcreteCreator1.js.map