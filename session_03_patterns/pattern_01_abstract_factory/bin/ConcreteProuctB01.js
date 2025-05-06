"use strict";
class ConcreteProductB1 {
    usefulFunctionB() {
        return 'The result of the product B1.';
    }
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}
//# sourceMappingURL=ConcreteProuctB01.js.map