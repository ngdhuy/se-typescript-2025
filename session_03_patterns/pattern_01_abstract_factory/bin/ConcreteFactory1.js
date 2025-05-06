"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory1 = void 0;
const ConcreteProductA1_1 = require("./ConcreteProductA1");
const ConcreteProductB1_1 = require("./ConcreteProductB1");
class ConcreteFactory1 {
    createProductA() {
        return new ConcreteProductA1_1.ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1_1.ConcreteProductB1();
    }
}
exports.ConcreteFactory1 = ConcreteFactory1;
//# sourceMappingURL=ConcreteFactory1.js.map