'use strict';

function race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(prom => {
                prom
                    .then(resolve)
                    .catch(reject)
            });
        })
}
    
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'three');
});
const promArr = [promise1, promise2, promise3];

race(promArr)
    .then(console.log)
    .catch(err => console.log('error'));