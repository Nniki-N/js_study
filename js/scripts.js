"use strict";

function showFirstMassage (text) {
    console.log(text);
}
showFirstMassage('Hi');

function calc (a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret () {
    let num = 50;

    return num;
}
const anotheNum = ret();
console.log(anotheNum);

const logger = function () {
    console.log('hello');
};
logger();

const calic = (a, b) => a + b;
