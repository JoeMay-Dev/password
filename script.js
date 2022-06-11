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
	const lc = document.getElementById('lower').checked;
	const uc = document.getElementById('upper').checked;
	const num = document.getElementById('number').checked;
	const spec = document.getElementById('special').checked;
	const charCount = lc + uc + num + spec;

	if (length < 8 || length > 128) {
		alert(
			'Password length must be between 8 and 128 characters - please try again'
		);
		throw err;
	}

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
		const password = pWord
			.join('')
			.split('')
			.sort(function () {
				return 0.5 - Math.random();
			})
			.join('');

		newPass.innerHTML = password;
	}

	writePassword();
}

generateBtn.addEventListener('click', generatePassword);
