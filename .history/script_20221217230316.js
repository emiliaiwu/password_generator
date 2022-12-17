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
const strong = document.querySelector(".strong");
const medium = document.querySelector('.medium');
const weak = document.querySelector('.weak');
const strength = document.querySelector('.strength');


// Clear
clear.addEventListener('click', () => {
	resultEl.textContent = 'Your New Password';
	lengthEl.value = '20';
	uppercaseEl.checked = false;
	lowercaseEl.checked = false;
	numbersEl.checked = false;
	symbolsEl.checked = false;
	strong.style.backgroundColor = '#f0f0f0';
	medium.style.backgroundColor = '#F0f0f0';
	weak.style.backgroundColor = '#f0f0f0';
	
})

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


// Add EventListener to Generate Button
generateBtn.addEventListener('click', () => {
	inputLimit();
	const length = +lengthEl.value;
	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = lowercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;

	resultEl.textContent = generatePassword(length, hasUppercase,
		hasLowercase, hasNumbers, hasSymbols);
	
	
});



// TRAVERSY MEDIA
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
		hasUppercase: getRandomUppercase,
		hasLowercase: getRandomLowercase,
		hasNumbers: getRandomNumbers,
		hasSymbols: getRandomSymbols,
	};

	


	const generatePassword = (
		length,
		hasUppercase,
		hasLowercase,
		hasNumbers,
		hasSymbols
	) => {
		let generatedPassword = '';
		const selectedChar =
			hasUppercase +
			hasLowercase +
			hasNumbers +
			hasSymbols;

		if (selectedChar === 0) return 'No selection made';

		// Password Strength
		const passwordStrength = () => {
			if (length > 7 && selectedChar === 4) {
				strong.style.backgroundColor = 'green';
				medium.style.backgroundColor = '#F0f0f0';
				weak.style.backgroundColor = '#f0f0f0';
				console.log(length, selectedChar);
			} else if (length > 5 && (selectedChar > 2)) {
				medium.style.backgroundColor = '#F2C200';
				strong.style.backgroundColor = 'f0f0f0';
				weak.style.backgroundColor = '#f0f0f0';
			} else if (selectedChar < 3) {
				weak.style.backgroundColor = 'red';
				strong.style.backgroundColor = 'f0f0f0';
				medium.style.backgroundColor = '#F0f0f0';
			}
		};

		passwordStrength();
		

		const charArray = [{ hasUppercase }, { hasNumbers },
		{ hasSymbols }, { hasLowercase }].filter((char) =>
			Object.values(char)[0]);
		
		
		
		for (let i = 0; i < length; i += selectedChar){
			charArray.forEach((char) => {
				const functionName = Object.keys(char)[0];
				generatedPassword += randomFunctions[functionName]();	
			})
		}
		
		const password = generatedPassword.slice(0, length);
		return password;
		
	};
};

passwordGenerator1();



// Password Strength




















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
const passwordGenerator3 = () => {
	function generatePassword(
		length,
		hasUppercase,
		hasLowercase,
		hasNumbers,
		hasSymbols
	) {
		// Set up the characters that can be used in the password
		let possibleCharacters = '';
		if (hasLowercase) {
			possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
		}
		if (hasUppercase) {
			possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		if (hasNumbers) {
			possibleCharacters += '0123456789';
		}
		if (hasSymbols) {
			possibleCharacters += '!@#$%^&*()_+-=[]{}|;\':"<>,./?';
		}

		// Generate the password
		let password = '';
		for (let i = 0; i < length; i++) {
			password += possibleCharacters.charAt(
				Math.floor(Math.random() * possibleCharacters.length)
			);
		}

		return password;
	}

}





















