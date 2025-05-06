"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
function clientCode() {
    const s1 = singleton_1.default.instance;
    const s2 = singleton_1.default.instance;
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();
//# sourceMappingURL=index.js.map