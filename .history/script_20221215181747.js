'use strict';

// Select Elements
const clear = document.querySelector('.clear');
const resultEl = document.querySelector('.result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy');


// Variables
let allUppercase = '';



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



// Get the characters
const getUppercase = () => {
	for (let i = 65; i < 91; i++) {
		allUppercase = allUppercase.concat(String.fromCharCode(i));
	}

	return all
}
getUppercase();




console.log(allUppercase);

// Give Functions a Key
const randomFunctions = {
	uppercase: getRandomUppercase,
	lowercase: getRandomLowercase,
	numbers: getRandomNumbers,
	symbols: getRandomSymbols,
};


// Add EventListener to Generate
generateBtn.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = uppercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;
	console.log(hasLowercase, hasNumbers, hasSymbols, hasUppercase, length);
});




