/**
 * * any types is unknown the type of object
 * * any is new type of object in ES
 */ 

let number : any = 1;
console.log(number, typeof(number))

number = 'hello world!!!'
console.log(number, typeof(number))

let s      : string = number
console.log(s, typeof(s))

number = 111
s                   = number.toString()
console.log(s, typeof(s))

s                   = number
console.log(s, typeof(s))