"use strict";
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
let circle = { diameter: 30 };
console.log('ball = ', ball, 'sphere = ', sphere, 'circle = ', circle);
ball = sphere;
sphere = circle;
circle = ball;
console.log('ball = ', ball, 'sphere = ', sphere, 'circle = ', circle);
let tube = { diameter: 40, length: 100 };
console.log('tube = ', tube);
console.log('ball = ', ball, 'tube = ', tube);
ball = tube;
console.log('ball = ', ball, 'tube = ', tube);
circle = ball;
console.log('ball = ', ball, 'circle = ', circle);
console.log('------------------------');
let createBall = (diameter) => ({ diameter, value: 100 });
let createSphere = (diameter, useInches) => {
    return { diameter: useInches ? diameter * 0.39 : diameter };
};
console.log('createBall = ', createBall(10));
console.log('createSphere = ', createSphere(20, true));
createSphere = createBall;
console.log('createBall = ', createBall(10));
console.log('createSphere = ', createSphere(20, true));
//# sourceMappingURL=lab14.syntax.structural_type.js.map