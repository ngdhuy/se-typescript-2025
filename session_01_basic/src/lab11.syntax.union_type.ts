/**
 * * Union types is multiple types of object
 * * Union types is a special case of unknown type
 * * Union types is a special case of any type
 * * Union types is a special case of null type
 * * Union types is a special case of undefine type
 */

const printObj = (obj : number | string) : void => {
    if(typeof obj === 'string') 
      console.log(obj.toUpperCase())
    else
     console.log(obj)
}
  
printObj(100) 
printObj('Hello world')

//!printObj(true) //? Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


//? compare Array[string] with String

const getName = (name : string[] | string) : void => {
if(Array.isArray(name))
    console.log(`Name is array string: ${name}`)
else 
    console.log(`Name: ${name}`)
}

getName(['hello', 'World', 'Petter', 'Marry'])
getName('NDHuy')