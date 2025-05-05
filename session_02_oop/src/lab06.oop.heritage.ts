/**
 * * class heritage
 */

interface Shape {
    _name : string              // define properties
    draw(size : number): void   // define method-prototype
}
  
// define the class implement interface
class Circle implements Shape {
    _name : string = 'no-name'             // re-define properties
  
    constructor(name? : string) {
      if(name !== undefined)
        this._name = name
    }
  
    draw(size: number) {
      console.log(`Circle is drawing with the name ${this._name} and size ${size}`)
    }
}
  
let cir : Circle = new Circle('The Ring')
cir.draw(100)

let cir_2 : Shape = new Circle('The Ring 2')
cir_2.draw(200)

cir = cir_2
cir.draw(300)