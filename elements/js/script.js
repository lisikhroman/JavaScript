'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    oneBox = document.querySelector('div'),
    wrapper = document.querySelector('.wrapper');

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green'
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });

const div = document.createElement('div');
// const text = document.createTextNode('');

div.classList.add('black');

// wrapper.append(div);

// wrapper.append(div);
wrapper.prepend(div);

// hearts[1].before(div);
//
// circles[0].remove();
//
// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello</h1>";
// div.textContent = "HEllo";

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');



