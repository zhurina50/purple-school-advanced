'use strict';

const wrapper = document.querySelector('.wrapper');
const arr = [...wrapper.children];
arr.map((el, i) => {
    el.setAttribute('data-id', i);
});
const counter = document.querySelector('.counter');
let a = 0;

function count() {
    a += 1;
    counter.innerHTML = `Нажали ${a} раз`;
};

wrapper.addEventListener('click', (event) => {
    arr.map(el => {
        el.innerHTML = 'Нажми меня';
    });
    const att = event.target.getAttribute('data-id');
    arr.forEach((el, i) => {
        if (i = att) {
            wrapper.children[i].innerHTML = 'Нажата';
        }
    });
    count();
})

