/**
 * * define main function using namespace modules
 */

/// <reference path="./lab11/lab11.modules.namespace.ts" />
import { MyLibs } from "./lab11/lab11.modules.namespace"

const fraction : MyLibs.Fraction = new MyLibs.Fraction(1, 2)
console.log(fraction.toString())
console.log(`PI = ${MyLibs.PI}`)
console.log(`Triple of 4 = ${MyLibs.triple(4)}`)