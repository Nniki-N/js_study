"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.add('fsbsb'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// } else {
//     console.log('yellow');
// }

// btns[0].addEventListener('click', (e) => {
//     // if (!btns[1].classList.contains('blue')) {
//     //     btns[1].classList.add('blue');
//     // } else {
//     //     btns[1].classList.remove('blue');
//     // }
//     btns[1].classList.toggle('blue');
// });

wrapper.addEventListener('click', (e) => {
    // console.dir(e.target);
    if (e.target && event.target.tagName == 'BUTTON') {
        console.log('hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);