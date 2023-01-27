'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'red',
        bg: 'black'
    }
}
//
// console.log(options.name);
//
// // delete options.name;
//
// console.log(options);

for (let optionsKey in options) {
    if (typeof(options[optionsKey]) === 'object') {
        for (let i in options[optionsKey]) {
            console.log(`Свойство ${i} имеет значение ${options[optionsKey][i]}`);
        }
    } else {
        console.log(`Свойство ${optionsKey} имеет значение ${options[optionsKey]}`);
    }
}