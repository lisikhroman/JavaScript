'use strict';

const box = document.getElementById('box'),
    btns = document.querySelectorAll('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    oneBox = document.querySelector('div'),
    wrapper = document.querySelector('.btn-block');

// box.style.cssText = 'background-color: blue; width: 500px';

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

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'dgyhusjamx'));
// console.log(btns[1].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

wrapper.addEventListener('click', (event) => {
    if (event.target &&  event.target.classList.contains('blue')) {
        console.log('fcgvbhnj');
    }
})
