'use strict';

// Select Elements
const clear = document.querySelector('.clear');
const resultEl = document.querySelector('.result');
const lengthEl = document.getElementById('.length');
const uppercaseEl = document.getElementById('.uppercase');
const lowercaseEl = document.getElementById('.lowercase');
const numbersEl = document.getElementById('.numbers');
const symbolsEl = document.getElementById('.symbols');
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');


// Values
const length = lengthEl.value;
const password = 0;





// Generate Random

const getRandomUppercase = () => {
    return String.fromCharCode(math.floor(math.random() * 26) + 65);
};

const getRandomLowercase = () => {
	return String.fromCharCode(math.floor(math.random() * 26) + 97);
};

const getRandomNumbers = () => {
	return String.fromCharCode(math.floor(math.random() * 10) + 48);
};

const getRandomSymbols = () => {
    // get the symbols from ASCII

    const allSymbols = '';

    for (i = 33; i < 127; i++) {
        if ((i = 33 && i < 48) &&
            (i = 58 && i < 65) &&
            (i = 91 && i < 97) &&
            (i = 123 && i < 97)) {
            
            allSymbols = string.fromCharCode(i); 
        } 
    }
    console.log(allSymbols);
};

getRandomSymbols