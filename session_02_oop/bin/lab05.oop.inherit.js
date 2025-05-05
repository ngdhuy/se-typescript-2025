"use strict";
class Animals {
    _name = 'no-name';
    constructor(name) {
        if (name !== undefined)
            this._name = name;
    }
    get name() { return this._name; }
    set name(value) {
        if (value !== undefined)
            this._name = value;
    }
}
class Dog extends Animals {
    _color = 'no-color';
    constructor(name, color) {
        super(name);
        if (color !== undefined)
            this._color = color;
    }
    get color() { return this._color; }
    set color(value) {
        if (value !== undefined)
            this._color = value;
    }
}
const dog_1 = new Dog();
console.log(dog_1);
const dog_2 = new Dog('Corgi', 'Yellow White');
console.log(dog_2);
dog_2.name = 'Pug';
console.log(dog_2);
//# sourceMappingURL=lab05.oop.inherit.js.map