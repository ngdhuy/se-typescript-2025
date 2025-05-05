/**
 * * objects class
 */

//? define class without constructor
class Person {
    name! : string    //option type => use ! to define optional property of attribute of class
}
  
const person : Person = new Person()
console.log(person)

person.name = 'Henry'
console.log(person)
  
//? readonly 
class School {
    readonly name : string = 'RMIT'
  
    // only use constructor to initial assign value to readonly property
    constructor(name? : string) {
      if(name !== undefined)
        this.name = name
    }
  
    err() {
      console.log('Cannot access readonly property Name')
    }
}
  
const sc_1 : School = new School()
console.log(sc_1)

const sc_2 : School = new School('MIT')
console.log(sc_2)

// sc_2.name = 'RMIT' // error: Cannot assign to 'name' because it is a read-only property
  
//? constructor
class Point2D {
    x : number
    y : number
  
    // normal constructor
    constructor(x: number = 0, y: number = 0) {
      this.x = x
      this.y = y
    }
  
    //! multiple constructor not allowed
}
  
const p_1 : Point2D = new Point2D()
console.log(p_1)

const p_2 : Point2D = new Point2D(3, 4)
console.log(p_2)

const p_3 : Point2D = new Point2D(5)
console.log(p_3)

const p_4 = p_2
console.log(p_4)

console.log('---------------------------------')

class MyAnimal {
    _name : string

    constructor(name: string) {
        this._name = name
    }

    //! Define a getter and setter for the _name property
    get name() {
        return this._name
    }
    set name(name: string) {
        this._name = name.toUpperCase()
    }
}

let my_animal : MyAnimal= new MyAnimal('Dog')
console.log(my_animal)

my_animal.name = 'Cat'
console.log(my_animal)