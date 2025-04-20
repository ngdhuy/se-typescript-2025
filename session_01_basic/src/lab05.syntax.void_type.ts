/** 
 * * void - look like void in C/c++
 */

let val   : void  = undefined
console.log(val, typeof(val))

//val = null      // -> Error, because val is undefine

function sayHello() : void {
  console.log('Hello world!!!')
}

sayHello()

const sayHi     = () : void => {
  console.log('Hi everybody!')
}

let result = sayHi()