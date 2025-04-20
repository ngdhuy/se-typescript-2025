/**
 * * Optional properties
 */

const Calculate = (a : number, b? : number) : void => {
    console.log('A: ', a)
    if(b !== undefined)
      console.log('B:', b)
  }
  
  Calculate(10, 20)
  console.log('------------------------')
  Calculate(10)