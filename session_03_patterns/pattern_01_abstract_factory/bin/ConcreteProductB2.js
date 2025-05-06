"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteProductB2 = void 0;
class ConcreteProductB2 {
    usefulFunctionB() {
        return 'The result of the product B2.';
    }
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}
exports.ConcreteProductB2 = ConcreteProductB2;
//# sourceMappingURL=ConcreteProductB2.js.map