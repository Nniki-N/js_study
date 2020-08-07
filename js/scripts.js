"use strict";

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.offsetWidth;
const height = box.offsetHeight;
const scrollW = box.scrollWidth;
const scrollH = box.scrollHeight;

console.log(width, height);
console.log(scrollW, scrollH);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);