'use strict';

class Character {
    race;
    name;
    language;
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    say() {
        console.log(`Персонаж ${this.name}, его язык - ${this.language}.`);
    }
}

class Orc extends Character {
    constructor(name, language, weapon) {
        super('орк', name, language);
        this.weapon = weapon;
    }
    say() {
        console.log(`Орк ${this.name} может ${this.language}.`);
    }
    hit() {
        console.log('шмякнуло');
    }
}
const orc = new Orc('Игорь', 'орать', 'камень');
console.log(orc.say());
console.log(orc.hit());

class Elf extends Character {
    constructor(name, language, spell) {
        super('эльф', name, language);
        this.spell = spell;
    }
    say() {
        console.log(`Эльф ${this.name} может ${this.language}.`);
    }
    createSpell(){
        console.log('трахтибидохнуло');
    }

}
const elf = new Elf('Григорий', 'плакать', 'трахтибидох');
console.log(elf.say());
console.log(elf.createSpell());