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
	let length = +lengthEl.value;
	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = lowercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;

	const options = {
		length,
		hasUppercase,
		hasLowercase,
		hasNumbers,
		hasSymbols,
	};

	resultEl.textContent = generatePassword(options);
	
});



const passwordGenerator1 = () => {


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
};



























const passwordGenerator2 = () => {
	// Variables
	const characterCodes = Array.from(Array(26)).map((_, i) => i + 65);
	const uppercase = characterCodes.map(code => String.fromCharCode(code));
	const lowercase = uppercase.map(letter => letter.toLowerCase());
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const symbolStr = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
	const symbols = symbolStr.split('');
}







// PASSWORD GENERATOR
const passwordGenerator1 = () => {
	function generatePassword() {
		// Set up variables for the password
		const passwordLength = 12; // Length of the password
		const useLowercase = true; // Use lowercase letters
		const useUppercase = true; // Use uppercase letters
		const useNumbers = true; // Use numbers
		const useSymbols = true; // Use symbols

		// Set up the characters that can be used in the password
		let possibleCharacters = '';
		if (useLowercase) {
			possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
		}
		if (useUppercase) {
			possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		if (useNumbers) {
			possibleCharacters += '0123456789';
		}
		if (useSymbols) {
			possibleCharacters += '!@#$%^&*()_+-=[]{}|;\':"<>,./?';
		}

		// Generate the password
		let password = '';
		for (let i = 0; i < passwordLength; i++) {
			password += possibleCharacters.charAt(
				Math.floor(Math.random() * possibleCharacters.length)
			);
		}

		return password;
	}

}




















