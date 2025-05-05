/**
 * * define namespace for package of modules
 */

export namespace MyLibs {
    export const PI : number = 3.14
    export const triple      = (value : number) : number => value * 3
  
    export class Fraction {
      #num : number = 1
      #dec : number = 1
  
      public constructor(num? : number, dec? : number) {
        if(num !== undefined)
          this.#num = num
        if(dec !== undefined && dec !== 0)
          this.#dec = dec
      }
  
      public get num() { return this.#num }
      public get dec() { return this.#dec }
  
      public set num(value : number) { if (value !== undefined) this.#num = value }
      public set dec(value : number) { if (value !== undefined) this.#dec = value }
  
      public toString() : string { return `(${this.#num}/${this.#dec})` }
    }
  }