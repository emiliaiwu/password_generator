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
// const length = lengthEl.value;
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
	const symbols = '~!@#$%^&*()_-+={}[]|\;:<>.,/?';
	return symbols[math.floor(math.random() * symbols.length)];
};

console.log()

