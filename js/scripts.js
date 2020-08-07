"use strict";

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());

console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 10;
}
let end = new Date();

alert(`цикл отработал за ${end - start} миллисикунд`);