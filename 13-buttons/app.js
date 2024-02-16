'use strict';

const wrapper = document.querySelector('.wrapper');
const arr = [...wrapper.children];
arr.map((el, i) => {
    el.setAttribute('data-id', i);
});
const counter = document.querySelector('.counter');
let a = 0;

wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        arr.map(el => {
            el.innerHTML = 'Нажми меня';
        });

        event.target.innerHTML = 'Нажата';
        a += 1;
        counter.innerHTML = `Нажали ${a} раз`;
    }
});
