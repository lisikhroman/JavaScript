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

const optionsCopy = {};

for (let optionsKey in options) {
    if (options[optionsKey] !== 'object') {
        optionsCopy[optionsKey] = options[optionsKey];
    } else {
        for (let i in options[optionsKey]) {
            optionsCopy[optionsKey] = options[optionsKey][i];
        }
    }

}

optionsCopy.name = 'cfvgbyhunjmkdsf';

console.log(options);
console.log(optionsCopy);
