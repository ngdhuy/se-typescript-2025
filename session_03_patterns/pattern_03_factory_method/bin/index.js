"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteCreator1_1 = require("./ConcreteCreator1");
const ConcreteCreator2_1 = require("./ConcreteCreator2");
function clientCode(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1_1.ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2_1.ConcreteCreator2());
//# sourceMappingURL=index.js.map