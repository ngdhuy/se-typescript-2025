/**
 * * Overriding methods
 */

// define abstract class
abstract class Card{
    private   _name : string = 'no-name'        // default public attribute
    protected _value: number = 0
  
    public constructor(name? : string, value? : number) {
      if(name !== undefined)
        this._name = name
      if(value !== undefined)
        this._value = value
    }
  
    public get name() { return this._name }
    public set name(value : string) {
      if(value !== undefined)
        this._name = value
    }
  
    public get value() { return this._value }
    public set value(value: number) {
      if(value !== undefined)
        this._value = value
    }
  
    // define method
    public Show() : void {
      console.log(this)
    }  
  
    // define abstract method
    public abstract Cal() : number
}

// define child-class VIPCard and NormaCard
class NormalCard extends Card {
    public override Cal(): number {
      return this._value * 2
    }
}

const normal_card : Card = new NormalCard()
normal_card.value = 100
normal_card.Show()
console.log(normal_card.Cal())

class VIPCard extends Card {
    private _level : number = 1
  
    constructor(name? : string, value? : number, level? : number) {
      super(name, value)
  
      if(level !== undefined)
        this._level = level
    }
  
    public get level() { return this._level }
    public set level(value: number) {
      if(value !== undefined)
        this._level = value
    }

    public override Show() : void {
        console.log(this, " - ", this.Cal())
    }

    public override Cal(): number {
      return this.value * this._level
    }
}


const vip_card : Card = new VIPCard('Diamond', 100, 5)
vip_card.Show()