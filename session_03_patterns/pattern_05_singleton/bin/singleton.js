"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static #instance;
    constructor() {
        console.log('Singleton instance created');
    }
    static get instance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }
    someBusinessLogic() {
        console.log('Executing some business logic');
    }
}
exports.default = Singleton;
//# sourceMappingURL=singleton.js.map