"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteProductB1 = void 0;
class ConcreteProductB1 {
    usefulFunctionB() {
        return 'The result of the product B1.';
    }
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}
exports.ConcreteProductB1 = ConcreteProductB1;
//# sourceMappingURL=ConcreteProductB1.js.map