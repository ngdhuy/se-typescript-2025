/**
 * * composing type
 */

//? unions type

type Flag   = true | false
type Option = 1 | 2 | 3

let first_flag  : Flag = true
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`)

first_flag = false
console.log(`Flag: ${first_flag} - type: ${typeof first_flag}`)

// first_flag = 'hello'       -> error

let first_opt   : Option = 2
console.log(`Option: ${first_opt} - type: ${typeof first_opt}`)

const getLength = (obj: string | string[]) => obj.length

console.log('Length of string "Hello world" is ',getLength('Hello world'))
console.log('length of string array is ', getLength(['hello world', 'Petter', 'Mary and Tom']))

//? Generics
type NumArray = Array<number>
const arr_num : NumArray = [1, 2, 3]
console.log(arr_num, typeof(arr_num))

//? structural type system
interface MyPoint {
  x : number
  y : number
}

const logMyPoint = (p : MyPoint) => console.log('internal function', p)

const point = {x: 100, y: 200}
console.log(point)
logMyPoint(point)


class SuperPoint implements MyPoint {
  x   : number
  y   : number
  
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const newPoint = new SuperPoint(45, 88)
logMyPoint(newPoint)