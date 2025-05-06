"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = void 0;
const ConcreteProductA2_1 = require("./ConcreteProductA2");
const ConcreteProductB2_1 = require("./ConcreteProductB2");
class ConcreteFactory2 {
    createProductA() {
        return new ConcreteProductA2_1.ConcreteProductA2();
    }
    createProductB() {
        return new ConcreteProductB2_1.ConcreteProductB2();
    }
}
exports.ConcreteFactory2 = ConcreteFactory2;
//# sourceMappingURL=ConcreteFactory2.js.map