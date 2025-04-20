/**
 * * Type alias
 */

//? define the temp type of code - look like Struct in C/c++
type Point = {
    x   : number
    y   : number
    z?  : number
  }
  
  const printCoord = (point : Point) : void => {
    console.log(`X = ${point.x}`)
    console.log(`Y = ${point.y}`)
    if(point.z !== undefined)
      console.log(`Z = ${point.z}`)
  }
  
  printCoord({x: 10, y: 20, z:30})
  console.log('---------------------------')
  printCoord({y: 40, x: 100})