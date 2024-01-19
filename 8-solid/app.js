'use strict';
// я очень не уверена в своем решении, оно слишком простое. И зачем тут вообще класс биллинг? ради одной строчки в конструкторе?
//зачем нам в биллинг метод calculateTotal, если он ничего не делает?

class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        return this.amount
    }
}
class FixBilling extends Billing {
    calculateTotal() {
        return this.amount
    }
}
class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        return this.amount * this.hours;
    }
}
class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }
    calculateTotal() {
        return this.amount * this.items;
    }
}

console.log(new HourBilling(1, 20).calculateTotal());