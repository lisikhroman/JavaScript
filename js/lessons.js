'use strict';

const text = 'привет';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
}

showFirstMessage(text);
console.log(num);