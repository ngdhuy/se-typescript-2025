"use strict";
class Card {
    _name = 'no-name';
    _value = 0;
    constructor(name, value) {
        if (name !== undefined)
            this._name = name;
        if (value !== undefined)
            this._value = value;
    }
    get name() { return this._name; }
    set name(value) {
        if (value !== undefined)
            this._name = value;
    }
    get value() { return this._value; }
    set value(value) {
        if (value !== undefined)
            this._value = value;
    }
    Show() {
        console.log(this);
    }
}
class NormalCard extends Card {
    Cal() {
        return this._value * 2;
    }
}
const normal_card = new NormalCard();
normal_card.value = 100;
normal_card.Show();
console.log(normal_card.Cal());
class VIPCard extends Card {
    _level = 1;
    constructor(name, value, level) {
        super(name, value);
        if (level !== undefined)
            this._level = level;
    }
    get level() { return this._level; }
    set level(value) {
        if (value !== undefined)
            this._level = value;
    }
    Show() {
        console.log(this, " - ", this.Cal());
    }
    Cal() {
        return this.value * this._level;
    }
}
const vip_card = new VIPCard('Diamond', 100, 5);
vip_card.Show();
//# sourceMappingURL=lab07.oop.overridding.js.map