'use strict';
// localStorage.setItem('number', 5);
// // localStorage.removeItem('number');
//
// localStorage.clear()
// console.log(localStorage.getItem('number'))


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

checkbox.checked = !!localStorage.getItem('isChecked');

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')) {
        localStorage.setItem('isChecked', false);
    } else {
        localStorage.setItem('isChecked', true);
    }
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});
