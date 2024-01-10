'use strict';

const month = document.getElementById("month");
const day = document.getElementById("day");
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const monthText = document.getElementById("month-text");
const dayText = document.getElementById("day-text");
const hrText = document.getElementById("hr-text");
const minText = document.getElementById("min-text");
const secText = document.getElementById("sec-text");

function countTime (){
    const gap = new Date(new Date('2025-01-01') - new Date);
    
    let monthTimer = `${gap.getUTCMonth()}`;
    month.innerText = monthTimer;
    switch (monthTimer) {
        case "1":
            monthText.innerText = 'месяц';
            break;
        case "2":
        case "3":
        case "4":
            monthText.innerText = 'месяца';
            break;
        default:
            monthText.innerText = 'месяцев';
    }

    let dayTimer = `${gap.getUTCDate()}`;
    day.innerText = dayTimer;
    if (dayTimer >= 11 && dayTimer <= 20) {
        dayText.innerText = 'дней';
    } else {
        switch (dayTimer % 10) {
            case 1:
                dayText.innerText = 'день';
                break;
            case 2:
            case 3:
            case 4:
                dayText.innerText = 'дня';
                break;
            default:
                dayText.innerText = 'дней';
        }
    }

    let hourTimer = `${gap.getUTCHours()}`;
    hr.innerText = hourTimer;
    if (hourTimer >= 11 && hourTimer <= 20) {
        hrText.innerText = 'часов';
    } else {
        switch (hourTimer % 10) {
            case 1:
                hrText.innerText = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hrText.innerText = 'часа';
                break;
            default:
                hrText.innerText = 'часов';
        }
    }

    let minTimer = `${gap.getUTCMinutes()}`;
    min.innerText = minTimer;
    if (minTimer >= 11 && minTimer <= 20) {
        minText.innerText = 'минут';
    } else {
        switch (minTimer % 10) {
            case 1:
                minText.innerText = 'минута';
                break;
            case 2:
            case 3: 
            case 4:
                minText.innerText = 'минуты';
                break;
            default:
                minText.innerText = 'минут';
        }
    }

    const secTimer = `${gap.getUTCSeconds()}`;
    sec.innerText = secTimer;
    if (secTimer >= 11 && secTimer <= 20) {
        secText.innerText = 'секунд';
    } else {
        switch (secTimer % 10) {
            case 1:
                secText.innerText = 'секунда';
                break;
            case 2:
            case 3:
            case 4:
                secText.innerText = 'секунды';
                break;
            default:
                secText.innerText = 'секунд';
        }
    }
};

setInterval((countTime), 1000);