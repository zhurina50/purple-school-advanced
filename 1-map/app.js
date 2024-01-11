'use strict';

function deleteRepeat(arr) {
    const setId = new Set();
    const res = [];
    arr.map(el => {
        if (!setId.has(el.id)) {
            setId.add(el.id);
            res.push(el);
        }
    });
    return res;
};

const array = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Катя' },
    { id: 4, name: 'Макс' },
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' }
];

console.log(deleteRepeat(array));