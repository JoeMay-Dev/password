// // Assignment Code
const generateBtn = document.getElementById('generate');
const newPass = document.getElementById('password');

function generatePassword() {
	const lCase = 'abcdefghijklmnopqrstuvwxyz';
	const uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numeric = '0123456789';
	const special = '!#$%&()*+,-./:;<=>?@^_`{|}~';
	const pWord = [];
	const err = 'User input error';
	const length = document.getElementById('length').value;
	// const length = prompt('Select password length between 8-128 characters');
	if (length < 8 || length > 128) {
		alert(
			'Password length must be between 8 and 128 characters - please try again'
		);
		throw err;
	}
	const lc = confirm(
		'Include lowercase characters? select ok for yes or cancel for no'
	);
	const uc = confirm(
		'Include uppercase characters? select ok for yes or cancel for no'
	);
	const num = confirm(
		'Include numeric characters? select ok for yes or cancel for no'
	);
	const spec = confirm(
		'Include special characters? select ok for yes or cancel for no'
	);
	const charCount = lc + uc + num + spec;
	// console.log(charCount)
	if (charCount === 0) {
		alert('At least 1 character type must be selected - please try again');
		throw err;
	}

	for (let i = 0; i < length; ) {
		if (lc) {
			pWord[i] = lCase[Math.floor(Math.random() * lCase.length)];
			i++;
		}
		if (uc) {
			pWord[i] = uCase[Math.floor(Math.random() * uCase.length)];
			i++;
		}
		if (num) {
			pWord[i] = numeric[Math.floor(Math.random() * numeric.length)];
			i++;
		}
		if (spec) {
			pWord[i] = special[Math.floor(Math.random() * special.length)];
			i++;
		}
	}
	function writePassword() {
		const password = pWord.join('');

		newPass.innerHTML = password;
		// alert('Your secure password is: ' + password);
		// newPass.innerHTML(password);
	}

	writePassword();
}

generateBtn.addEventListener('click', generatePassword);
