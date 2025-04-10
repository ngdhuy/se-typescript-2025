"use strict";
let arr = [1, 2, 3, 4, 5];
console.log('array            = ', arr, typeof (arr));
let arrList = [9, 8, 7, 6, 5];
console.log('array list       = ', arrList, typeof (arrList));
let arrString = ['Peter', "Marry", "Tom", 'Jerry'];
console.log('array of string  = ', arrString, typeof (arrString));
let student;
student = [1, 'Petter'];
console.log("Student information: ", student);
console.log('ID = ', student[0]);
console.log('Name = ', student[1]);
console.log('First character of student name is ', student[1][0]);
console.log('Sub-string of student name is ', student[1].substring(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c_1 = Color.Red;
let c_2 = Color.Blue;
console.log(`Color 1 = ${c_1} and Color 2 = ${c_2}`);
var Size;
(function (Size) {
    Size[Size["small"] = 30] = "small";
    Size[Size["medium"] = 50] = "medium";
    Size[Size["large"] = 100] = "large";
})(Size || (Size = {}));
let product = Size.medium;
console.log('Size of product is ', product);
let name_of_size = Size[50];
console.log('Name of size 50 is ', name_of_size);
//# sourceMappingURL=lab02.syntax.array.js.map