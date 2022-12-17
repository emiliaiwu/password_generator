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
const hide = document.querySelector('.hide');


// Variables
const characterCodes = Array.from(Array(26)).map((_, i) => i + 65);
const uppercase = characterCodes.map(code => String.fromCharCode(code));
const lowercase = uppercase.map(letter => letter.toLowerCase());
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolStr = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
const symbols = symbolStr.split('');



hide.addEventListener('click', () => {
	const hidebtn = document.querySelector('.hidebtn');
	hidebtn.classList.toggle('fa-eye');
})



const traversySolution = () => {
	//Generate Randoms Functions
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
		const symbols = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
		return symbols[Math.floor(Math.random() * symbols.length)];
	};

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
}



// 
lengthEl.addEventListener('input')




// Add EventListener to Generate
generateBtn.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = uppercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;
	console.log(hasLowercase, hasNumbers, hasSymbols, hasUppercase, length);
});





