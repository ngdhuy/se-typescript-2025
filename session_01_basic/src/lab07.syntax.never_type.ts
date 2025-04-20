/**
 * * never - is return type of Exception function (return or not return)
 */

const show_error = (message : string) : never => {
    console.error('--- Start show_error')
    throw new Error(message)
    console.error('--- Start show_error')
}
  
const calculate = () => {
    try {
        console.log('-- Start calculation')
        show_error('Something is failed')
        console.log('-- End calculation') // -> never run
    } catch (e) {
        console.error(e)
    }
}
  
calculate()