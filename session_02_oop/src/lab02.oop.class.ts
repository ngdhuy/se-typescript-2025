/**
 * * Class vs Interface
 */

//? define interface
interface MyUser  {
    id    : number
    name  : string
}
  
const us : User = {
    id    : 1,
    name  : "Henry"
}
  
console.log(`us = ${us} - type: ${typeof us}`)
console.log(us)
  
//? define class
class Student {
    id  : number
    name: string
  
    constructor(id: number, name: string) {
      this.id   = id
      this.name = name
    }
}
  
const st : Student = new Student(1, "Tom")
console.log(`st = ${st} - type: ${typeof st}`)
console.log(st)
  
//? define class implement from interface
interface Obj {
    id  : number
    name: string
}
  
class Car implements Obj {
    id    : number
    name  : string
    color : string
  
    constructor(id: number, name: string, color: string) {
      this.id     = id
      this.name   = name
      this.color  = color
    }
}
  
class Animal implements Obj {
    id    : number
    name  : string
  
    constructor(id: number, name: string) {
      this.id   = id
      this.name = name
    }
}
  
const car_1   : Car     = new Car(1, 'SUV', 'Red')
const car_2   : Car     = new Car(2, 'Sedan', 'Blue')
const animal  : Animal  = new Animal(3, 'Corgi')
  
console.log(car_1)
console.log(car_2)
console.log(animal)
  
//? define object with interface but use pattern of object class
interface Person {
    pid : number
    name: string
    role?: string
}
  
class SuperMan {
    pid : number
    name: string

    constructor(pid: number, name: string) {
        this.pid  = pid
        this.name = name
    }
}
  
const mrSuperMan : Person = new SuperMan(1007, 'Spider Man')
console.log(mrSuperMan)

class Man implements Person {
    pid : number
    name: string
    role: string
  
    constructor(pid: number, name: string, role: string) {
      this.pid  = pid
      this.name = name
      this.role = role
    }
}   

const mrMan : Person = new Man(1008, 'Iron', 'Hero')
console.log(mrMan)