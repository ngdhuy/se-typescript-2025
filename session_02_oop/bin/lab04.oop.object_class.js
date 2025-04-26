"use strict";
class Person {
    name;
}
const person = new Person();
console.log(person);
person.name = 'Henry';
console.log(person);
class School {
    name = 'RMIT';
    constructor(name) {
        if (name !== undefined)
            this.name = name;
    }
    err() {
        console.log('Cannot access readonly property Name');
    }
}
const sc_1 = new School();
console.log(sc_1);
const sc_2 = new School('MIT');
console.log(sc_2);
class Point2D {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
const p_1 = new Point2D();
console.log(p_1);
const p_2 = new Point2D(3, 4);
console.log(p_2);
const p_3 = new Point2D(5);
console.log(p_3);
const p_4 = p_2;
console.log(p_4);
console.log('---------------------------------');
class MyAnimal {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name.toUpperCase();
    }
}
let my_animal = new MyAnimal('Dog');
console.log(my_animal);
my_animal.name = 'Cat';
console.log(my_animal);
//# sourceMappingURL=lab04.oop.object_class.js.map