'use strict';

const Caracter = function(race, name, language){
    this.race = race;
    this.name = name;
    this.language = language;
}

Caracter.prototype.say = function () {
    console.log(`${this.name}, его язык - ${this.language}.`);
}

const pers = new Caracter('человек', 'Вася', 'факты');
console.log(pers);
pers.say();



const Orc = function (race, name, language, weapon) {
    Caracter.call(this);
    this.race = 'orc';
    this.name = name;
    this.language = language;
    this.weapon = weapon;
};
Orc.prototype = Object.create(Caracter.prototype);

const orc2 = new Orc(1,'Орк Игорь', 'орать', 'камень');
console.log(orc2);
orc2.say();
Orc.prototype.hit = function () {
    console.log('шмякнуло');
}
orc2.hit();



const Elf = function (race, name, language, spell) {
    Caracter.call(this);
    this.race = 'elf';
    this.name = name;
    this.language = language;
    this.spell = spell;
};

Elf.prototype = Object.create(Caracter.prototype);

const elf2 = new Elf(2, 'Эльф Григорий', 'плакать', 'трахтибидох');
console.log(elf2);
elf2.say();
Elf.prototype.createSpell = function () {
    console.log('трахтибидохнуло');
}
elf2.createSpell();