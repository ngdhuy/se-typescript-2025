/**
 * * Null vs Undefine type to TS
 */

let a : undefined = undefined
let b : null      = null

console.log(a, typeof(a))
console.log(b, typeof(b))

//? null and undefine only assign for unknown type
let c : unknown   = a
console.log(c, typeof(c))

c = b
console.log(c, typeof(c))

//! cannot assign null or undefine value for number or string
// let d : number = null        // -> error
// let e : string = undefined   // -> error