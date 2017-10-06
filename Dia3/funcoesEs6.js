'use strict';

function teste(a, b = 10) {
    console.log(a);
    console.log(b);
}

function multiply(a, b = 1) {
    return a * b;
}

teste(5, 20);