"use strict";

const box = document.getElementById('box'),
      btn = document.getElementsByClassName('btn'),
      btnS = document.querySelectorAll('.btn'),
      hh = document.querySelector('div'),
      wrapper = document.querySelector('.wrapper');

box.style.cssText = 'height: 100px; width: 100px; background-color: purple;';

// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.backgroundColor = 'blue';
// }

btnS.forEach(item => {
    item.style.backgroundColor = 'red';
});

const div = document.createElement('div');
div.classList.add('black');

document.body.append(div);
// wrapper.before(div);
// wrapper.after(div);

// div.remove();

wrapper.replaceWith(box);

div.innerHTML = "<h1>Hello world!</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>');