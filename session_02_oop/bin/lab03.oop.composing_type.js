"use strict";
let first_flag = true;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);
first_flag = false;
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`);
let first_opt = 2;
console.log(`Option: ${first_opt} - type: ${typeof first_opt}`);
const getLength = (obj) => obj.length;
console.log('Length of string "Hello world" is ', getLength('Hello world'));
console.log('length of string array is ', getLength(['hello world', 'Petter', 'Mary and Tom']));
const arr_num = [1, 2, 3];
console.log(arr_num, typeof (arr_num));
const logMyPoint = (p) => console.log('internal function', p);
const point = { x: 100, y: 200 };
console.log(point);
logMyPoint(point);
class SuperPoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new SuperPoint(45, 88);
logMyPoint(newPoint);
//# sourceMappingURL=lab03.oop.composing_type.js.map