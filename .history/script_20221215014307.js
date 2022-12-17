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




// Give Functions a Key
const randomFunctions = {
	uppercase: getRandomUppercase,
	lo

}



// Generate Randoms Functions
const getRandomUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomLowercase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomNumbers = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbols = () => {
	const symbols = '~!@#$%^&*()_-+={}[]|\;:<>.,/?';
	return symbols[Math.floor(Math.random() * symbols.length)];
};



