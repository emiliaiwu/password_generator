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
const inputLength = document.querySelector('input[type=number]');


// Variables
// const characterCodes = Array.from(Array(26)).map((_, i) => i + 65);
// const uppercase = characterCodes.map(code => String.fromCharCode(code));
// const lowercase = uppercase.map(letter => letter.toLowerCase());
// const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const symbolStr = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
// const symbols = symbolStr.split('');


// Variables


// HIDE THE PASSWORD
hide.addEventListener('click', () => {
	const hidebtn = document.querySelector('.hidebtn');
	hidebtn.classList.toggle('fa-eye');
});



// MIN AND MAX FUNCTIONALITY
const inputLimit = () => {
	inputLength.addEventListener('focus', (e) => {
		inputLength.style.backgroundColor = '#f0f0f0';
	})

	let min = +lengthEl.min;
	let max = +lengthEl.max;
	let length = +lengthEl.value;

	if (length <= max && length >= min) {
		length = +lengthEl.value;
		inputLength.style.backgroundColor = '#f0f0f0';
	} else {
		inputLength.style.backgroundColor = 'red';
		lengthEl.value = ' ';
	}
};


// Add EventListener to Generate
generateBtn.addEventListener('click', () => {
	inputLimit();

	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = lowercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;

	const passwordOptions = {
		length,
		hasUppercase,
		hasLowercase,
		hasNumbers,
		hasSymbols,
	};

	resultEl.textContent = generatePassword(passwordOptions);
	
});


// Generate Passsword

function generatePassword(options) {
	let password = '';

	for (let i = 0; i < options.length; i++) {
		
		let numbers = Math.floor(Math.random() * 10);
	
		let lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

		let uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

		let symbolStr = '~!@#$%^&*()_-+={}[]|;:<>.,/?';

		let symbols = symbolStr[Math.floor(Math.random() * symbolStr.length)];

		// hasUppercase ? uppercase : '';
		// hasLowercase ? lowercase : '';
		// hasNumbers ? numbers : '';
		// hasSymbols ? symbols : '';
	
		options.hasUppercase ? uppercase : '';
		options.hasLowercase ? lowercase : '';
		options.hasNumbers ? numbers : '';
		options.hasSymbols ? symbols : '';
		
		// Choose one of the generated characters at random
		let char = Math.random() < 0.33
			? numbers
			: Math.random() < 0.5
				? lowercase
				: Math.random() < 0.75
					? uppercase
					: symbols;

		// Append the chosen character to the password string
		password += char;

	}	
	// return password;
} 

generatePassword(options);

// let password = generatePassword(passwordOptions);


















// Selected Options
// const selectedOptions = [
// 	...(hasUppercase ? uppercase : []),
// 	...(hasLowercase ? lowercase : []),
// 	...(hasNumbers ? numbers : []),
// 	...(hasSymbols ? symbols : []),
// ];






















// const traversySolution = () => {
// 	//Generate Randoms Functions
// 	const getRandomUppercase = () => {
// 		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// 	};

// 	const getRandomLowercase = () => {
// 		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// 	};

// 	const getRandomNumbers = () => {
// 		return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// 	};

// 	const getRandomSymbols = () => {
// 		const symbols = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
// 		return symbols[Math.floor(Math.random() * symbols.length)];
// 	};

// 	// Give Functions a Key
// 	const randomFunctions = {
// 		uppercase: getRandomUppercase,
// 		lowercase: getRandomLowercase,
// 		numbers: getRandomNumbers,
// 		symbols: getRandomSymbols,
// 	};

// 	// Add EventListener to Generate
// 	generateBtn.addEventListener('click', () => {
// 		const length = +lengthEl.value;
// 		const hasUppercase = uppercaseEl.checked;
// 		const hasLowercase = uppercaseEl.checked;
// 		const hasNumbers = numbersEl.checked;
// 		const hasSymbols = symbolsEl.checked;
// 		console.log(hasLowercase, hasNumbers, hasSymbols, hasUppercase, length);
// 	});
// };



