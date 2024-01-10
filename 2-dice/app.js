'use strict';

function random(dise) {
    if ((dise == 4) || (dise == 6) || (dise == 8) || (dise == 10) || (dise == 12) || (dise == 16) || (dise == 20)) {
        console.log(Math.ceil(Math.random() * dise));
    } else {
        console.log('я неправильный кубик');
    }
};

random(15);
