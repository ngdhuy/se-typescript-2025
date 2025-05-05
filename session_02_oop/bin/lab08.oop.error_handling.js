"use strict";
class MsgErr extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, MsgErr.prototype);
    }
    print = () => `=> Error: ${this.message}`;
}
const msgErr = new MsgErr('Cannot create Instant');
console.error(msgErr.print());
//# sourceMappingURL=lab08.oop.error_handling.js.map