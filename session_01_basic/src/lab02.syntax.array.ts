/**
 * * array and collection in TS
 */

//? array
let arr         : number[]      = [1, 2, 3, 4, 5]
console.log('array            = ', arr, typeof(arr))

let arrList     : Array<number> = [9, 8, 7, 6, 5]
console.log('array list       = ', arrList, typeof(arrList))

let arrString   : Array<string> = ['Peter', "Marry", "Tom", 'Jerry']
console.log('array of string  = ', arrString, typeof(arrString))

//? Tuple
let student   : [number, string]
student = [1, 'Petter']
console.log("Student information: ", student)
console.log('ID = ', student[0])
console.log('Name = ', student[1])
console.log('First character of student name is ', student[1][0])
console.log('Sub-string of student name is ', student[1].substring(1))

//? Enum
enum Color {Red, Green, Blue}

let c_1 : Color = Color.Red
let c_2 : Color = Color.Blue

console.log(`Color 1 = ${c_1} and Color 2 = ${c_2}`)

enum Size {
  small   = 30, 
  medium  = 50, 
  large    = 100
}

let product   : Size = Size.medium
console.log('Size of product is ', product)

let name_of_size = Size[50]
console.log('Name of size 50 is ', name_of_size)