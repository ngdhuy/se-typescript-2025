"use strict";
const printCoord = (point) => {
    console.log(`X = ${point.x}`);
    console.log(`Y = ${point.y}`);
    if (point.z !== undefined)
        console.log(`Z = ${point.z}`);
};
printCoord({ x: 10, y: 20, z: 30 });
console.log('---------------------------');
printCoord({ y: 40, x: 100 });
//# sourceMappingURL=lab12.syntax.alias_type.js.map