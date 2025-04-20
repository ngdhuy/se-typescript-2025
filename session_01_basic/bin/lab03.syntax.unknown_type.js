"use strict";
let not_sure = 3;
console.log(not_sure, typeof (not_sure));
not_sure = 'Hello world!!!';
console.log(not_sure, typeof (not_sure));
not_sure = true;
console.log(not_sure, typeof (not_sure));
let maybe = true;
if (maybe === true) {
    const value_boolean = maybe;
    console.log(value_boolean, typeof (value_boolean));
}
maybe = 'Hello world!!!';
if (typeof (maybe) === 'string') {
    const value_string = maybe;
    console.log(value_string, typeof (value_string));
}
//# sourceMappingURL=lab03.syntax.unknown_type.js.map