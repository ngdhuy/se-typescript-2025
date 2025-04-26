/**
 * * Structural Type
 */

interface Ball {
    diameter : number
}

interface Sphere {
    diameter   : number
}

interface Circle {
    diameter   : number
}

let ball : Ball = { diameter: 10 }
let sphere : Sphere = { diameter: 20 }
let circle : Circle = { diameter: 30 }

console.log('ball = ',ball, 'sphere = ',sphere, 'circle = ', circle)

ball = sphere
sphere = circle
circle = ball
console.log('ball = ',ball, 'sphere = ',sphere, 'circle = ', circle)

interface Tube {
    diameter : number
    length   : number
}

let tube : Tube = { diameter: 40, length: 100 }
console.log('tube = ', tube)

// tube = ball => Error: Type 'Ball' is not assignable to type 'Tube' because of lenght attribute is not exist in  Ball.
console.log('ball = ',ball, 'tube = ', tube)
ball = tube
console.log('ball = ',ball, 'tube = ', tube)

circle = ball
console.log('ball = ',ball, 'circle = ', circle)

//? Summary: Objects, which have multiple properties, can to assignable to the Objects which have less properties.

console.log('------------------------')

//? function is a object in JavaScript and it is compare similar object

let createBall = (diameter: number) => ({diameter})
let createSphere = (diameter: number, useInches: boolean) => {
    return { diameter: useInches ? diameter * 0.39 : diameter}
}

console.log('createBall = ', createBall(10))
console.log('createSphere = ', createSphere(20, true))

createSphere = createBall
// createBall = createSphere => Error: Type '(diameter: number, useInches: boolean) => { diameter: number; }' is not assignable to type '(diameter: number) => { diameter: number; }'.
console.log('createBall = ', createBall(10))
console.log('createSphere = ', createSphere(20, true))

//? Summary: Functions, which have less parameters, can to assignable to the Functions which have more parameters.