'use strict';

//я точно не вкурила, зачем мне тут геттер, что он тут должен делать, хочется пояснений -(
// и как я гетом могу поменять пробег, если он ничего не меняет. Я могу там в переменную положить
//приватное значение и в сеттере использовать, но занафига?

class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = 0;
    }

    set changeMileage(km) {
        this.#mileage += km;
    }

    get mileage() {
        console.log(this.#mileage);
    }

    info() {
        console.log(`${this.#brand}, ${this.#model}, ${this.#mileage}`);
    }
};

const car = new Car('какой-то кар', 'фенси кар');
car.changeMileage = 6;
car.mileage;
car.info();