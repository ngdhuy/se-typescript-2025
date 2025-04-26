"use strict";
let p = {
    id: 1,
    name: 'iPhone 15 Ultimate',
    price: 999.25
};
console.log(p, typeof p);
const printPoint = (point) => {
    if (point.x)
        console.log('x = ', point.x);
    if (point.y)
        console.log('y = ', point.y);
    if (point.z)
        console.log('z = ', point.z);
};
let my_point = {
    y: 200,
    z: 300,
    x: 100
};
printPoint(my_point);
console.log('------------------------');
printPoint({ y: 55, x: 88 });
//# sourceMappingURL=lab13.syntax.interface.js.map