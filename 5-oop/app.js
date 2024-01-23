const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Character.prototype.say = function () {
    console.log(`${this.name}, его язык - ${this.language}.`);
}

const pers = new Character('человек', 'Вася', 'факты');
console.log(pers);
pers.say();

const Orc = function (race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.race = 'orc';
    this.weapon = weapon;
};
Orc.prototype = Object.create(Character.prototype);

const orc2 = new Orc(1, 'Орк Игорь', 'орать', 'камень');
console.log(orc2);
orc2.say();
Orc.prototype.hit = function () {
    console.log('шмякнуло');
}
orc2.hit();

const Elf = function (race, name, language, spell) {
    Character.call(this, race, name, language);
    this.race = 'elf';
    this.spell = spell;
};
Elf.prototype = Object.create(Character.prototype);

const elf2 = new Elf(2, 'Эльф Григорий', 'плакать', 'трахтибидох');
console.log(elf2);
elf2.say();
Elf.prototype.createSpell = function () {
    console.log('трахтибидохнуло');
}
elf2.createSpell();
