'use strict';

function ageVerification(birthday) {
    let age = new Date().getFullYear() - new Date(birthday).getFullYear();
    const months = new Date().getMonth() - new Date(birthday).getMonth();
    if (months < 0 || (months === 0 && new Date().getDate() < new Date(birthday).getDate())) {
        age--;
    }
    return age >= 14;
}

console.log(ageVerification('2010-01-03'));