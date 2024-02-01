'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        return fetch('https://pokeapi.co/api/v2/ability/7/')
    })
    .then(response => response.json())
    .then(data => {
        data.effect_entries.forEach(el => {
            if (el.language.name == 'en') {
                console.log(el.effect);
            }
        })
    })
    .catch(error => console.log(`Ошибка ${error}`))