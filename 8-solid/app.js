'use strict';

class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        return this.amount
    }
}
class FixBilling extends Billing {
    
}
class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        return super.calculateTotal() * this.hours;
    }
}
class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }
    calculateTotal() {
        return super.calculateTotal() * this.items;
    }
}
console.log(new FixBilling(2).calculateTotal());
console.log(new HourBilling(1, 20).calculateTotal());
