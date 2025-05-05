"use strict";
const us = {
    id: 1,
    name: "Henry"
};
console.log(`us = ${us} - type: ${typeof us}`);
console.log(us);
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const st = new Student(1, "Tom");
console.log(`st = ${st} - type: ${typeof st}`);
console.log(st);
class Car {
    id;
    name;
    color;
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}
class Animal {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const car_1 = new Car(1, 'SUV', 'Red');
const car_2 = new Car(2, 'Sedan', 'Blue');
const animal = new Animal(3, 'Corgi');
console.log(car_1);
console.log(car_2);
console.log(animal);
class SuperMan {
    pid;
    name;
    constructor(pid, name) {
        this.pid = pid;
        this.name = name;
    }
}
const mrSuperMan = new SuperMan(1007, 'Spider Man');
console.log(mrSuperMan);
class Man {
    pid;
    name;
    role;
    constructor(pid, name, role) {
        this.pid = pid;
        this.name = name;
        this.role = role;
    }
}
const mrMan = new Man(1008, 'Iron', 'Hero');
console.log(mrMan);
//# sourceMappingURL=lab02.oop.class.js.map