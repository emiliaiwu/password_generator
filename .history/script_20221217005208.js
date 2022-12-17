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


hide.addEventListener('click', () => {
	const hidebtn = document.querySelector('.hidebtn');
	hidebtn.classList.toggle('fa-eye');
});

const inputLimit = () => {
	inputLimit.add

	let min = +lengthEl.min;
	let max = +lengthEl.max;
	let length = +lengthEl.value;

	if (length <= max && length >= min) {
		length = +lengthEl.value;
		inputLength.style.backgroundColor = '#f0f0f0';
	} else {
		inputLength.style.backgroundColor = 'red';
		lengthEl.value = '1 - 25';
	}
}


// Add EventListener to Generate
generateBtn.addEventListener('click', () => {
	inputLimit();

	let length = +lengthEl.value;
	const hasUppercase = uppercaseEl.checked;
	const hasLowercase = lowercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;
	console.log(hasLowercase, hasNumbers, hasSymbols, hasUppercase, length);


	const passwordOptions = [
		{ length },
		{ hasUppercase },
		{ hasLowercase },
		{ hasNumbers },
		{ hasSymbols },
	];

	console.log(passwordOptions[0]);

	const options = {
		length,
		hasLowercase,
		hasNumbers,
		hasSymbols
	};

	console.log(options.hasLowercase, options.hasSymbols, options.hasNumbers, options.length);
	
});


// Generate Passsword

function generatePassword(options) {

	let password = '';

	for (let i = 0; i < options.length; i++) {
		let numbers = Math.floor(Math.random() * 10);
		let lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
		let uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
		let symbols = '~!@#$%^&*()_-+={}[]|;:<>.,/?';
		symbols = symbols[Math.floor(Math.random() * symbols.length)];
		
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


	const passwordOptions = [
		{length},
		{ hasUppercase },
		{ hasLowercase },
		{ hasNumbers },
		{hasSymbols}
	]

}




























const passwordChat = () => {
	// This function generates a random password
	// of length n using lowercase letters and numbers.
	function generatePassword(n) {
		// Initialize a string to store the password
		let password = "";

		// Use a for loop to generate n random characters
		for (let i = 0; i < n; i++) {
			// Generate a random number between 0 and 9
			let num = Math.floor(Math.random() * 10);
			// Generate a random lowercase letter
			let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

			// Append the number or letter to the password string
			password += Math.random() < 0.5 ? num : letter;
		}

		// Return the generated password
		return password;
	}

	// Generate a password of length 8
	let myPassword = generatePassword(8);

	// Print the password to the console
	console.log(myPassword);

	// This function generates a random password
	// of length n using lowercase letters and numbers.
	function generatePassword(n) {
		// Initialize a string to store the password
		let password = "";

		// Use a for loop to generate n random characters
		for (let i = 0; i < n; i++) {
			// Generate a random number between 0 and 9
			let num = Math.floor(Math.random() * 10);
			// Generate a random lowercase letter
			let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

			// Append the number or letter to the password string
			password += Math.random() < 0.5 ? num : letter;
		}

		// Return the generated password
		return password;
	}

	// This function checks if a password is valid
	// according to the specified rules
	function isValidPassword(password, rules) {
		// Initialize a variable to track whether the password is valid
		let isValid = true;

		// Check if the password is the correct length
		if (password.length !== rules.length) {
			isValid = false;
		}

		// Check if the password contains at least one number
		if (rules.numbers && !/\d/.test(password)) {
			isValid = false;
		}

		// Check if the password contains at least one special character
		if (rules.special && !/[!@#$%^&*]/.test(password)) {
			isValid = false;
		}

		// Return whether the password is valid
		return isValid;
	}

	// Define the password rules
	const passwordRules = {
		length: 8, // password must be 8 characters long
		numbers: true, // password must contain at least one number
		special: false, // password must not contain special characters
	};

	// Generate a password of length 8
	let password = generatePassword(passwordRules.length);

	// Print the generated password to the console
	console.log(password);

	// Check if the password is valid
	if (isValidPassword(password, passwordRules)) {
		console.log("The password is valid!");
	} else {
		console.log("The password is not valid!");
	}
}







const passwordChat2 = () => {

	// This function generates a random password
	// of length n using uppercase and lowercase letters,
	// numbers, and special characters.
	function generatePassword(n) {
		// Initialize a string to store the password
		let password = "";

		// Use a for loop to generate n random characters
		for (let i = 0; i < n; i++) {
			// Generate a random number between 0 and 9
			let num = Math.floor(Math.random() * 10);
			// Generate a random lowercase letter
			let lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
			// Generate a random uppercase letter
			let upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
			// Generate a random special character
			let special = String.fromCharCode(Math.floor(Math.random() * 14) + 33);

			// Choose one of the generated characters at random
			let char = Math.random() < 0.33
				? num
				: Math.random() < 0.5
					? lower
					: Math.random() < 0.75
						? upper
						: special;

			// Append the chosen character to the password string
			password += char;
		}

		// Return the generated password
		return password;
	}

	// Generate a password of length 8
	let password = generatePassword(8);

	// Print the password to the console
	console.log(password);

}




const passwordChat3 = () => {

	// This function generates a random password
	// of the specified length using the specified character types.
	function generatePassword(options) {
		// Initialize a string to store the password
		let password = "";

		// Use a for loop to generate a password of the specified length
		for (let i = 0; i < options.length; i++) {
			// Initialize an empty string to store the character options
			let charOptions = "";

			// Add numbers to the character options if specified
			if (options.numbers) charOptions += "0123456789";
			// Add special characters to the character options if specified
			if (options.special) charOptions += "!@#$%^&*";
			// Add uppercase letters to the character options if specified
			if (options.uppercase) charOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			// Add lowercase letters to the character options if specified
			if (options.lowercase) charOptions += "abcdefghijklmnopqrstuvwxyz";

			// Choose a random character from the available options
			let char = charOptions[Math.floor(Math.random() * charOptions.length)];

			// Append the chosen character to the password string
			password += char;
		}

		// Return the generated password
		return password;
	}

	// Define the password options
	const passwordOptions = {
		length: 8, // password must be 8 characters long
		numbers: true, // password must contain numbers
		special: true, // password must contain special characters
		uppercase: true, // password must contain uppercase letters
		lowercase: false, // password must not contain lowercase letters
	};

	// Generate a password using the specified options
	let password = generatePassword(passwordOptions);

	// Print the generated password to the console
	console.log(password);

}



































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
};



