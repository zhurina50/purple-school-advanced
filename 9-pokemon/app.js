'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function () {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/ability/7/');
    request.send();

    request.addEventListener('load', function () {
        const ability = JSON.parse(this.responseText);
        ability.effect_entries.forEach(el => {
            if (el.language.name == 'en') {
                console.log(el.effect);
            }
        });
    });
});