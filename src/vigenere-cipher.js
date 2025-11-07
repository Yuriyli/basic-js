const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	#direct;
	constructor(direct = true) {
		this.#direct = direct;
	}
	encrypt(msg, key) {

		if (typeof msg !== "string" || typeof key !== "string") {
			throw new Error("Incorrect arguments!");
		}

		let result = "";
		let keyArr = [];
		let keyIndex = -1;

		for (let i = 0; i < key.length; i++) {
			keyArr.push(key.toUpperCase().codePointAt(i) - 65);
		}
		for (const char of msg.toUpperCase()) {
			if (/[A-Z]/.test(char)) {
				result += shiftChar(char);
			} else {
				result += char;
			}
		}

		if (!this.#direct) {
			result = Array.from(result).reverse().join("");
		}

		return result;

		function shiftChar(char) {
			let result = char.codePointAt(0);
			result = result + getCurrentKey();
			if (result > 90) {
				result = result - 26;
			}
			return String.fromCharCode(result);
		}

		function getCurrentKey() {
			++keyIndex;
			if (keyIndex >= key.length) {
				keyIndex = 0;
			}
			return keyArr[keyIndex];
		}
	}

	decrypt(msg, key) {

		if (typeof msg !== "string" || typeof key !== "string") {
			throw new Error("Incorrect arguments!");
		}

		let result = "";
		let keyArr = [];
		let keyIndex = -1;

		for (let i = 0; i < key.length; i++) {
			keyArr.push(key.toUpperCase().codePointAt(i) - 65);
		}
		for (const char of msg.toUpperCase()) {
			if (/[A-Z]/.test(char)) {
				result += shiftChar(char);
			} else {
				result += char;
			}
		}
		if (!this.#direct) {
			result = Array.from(result).reverse().join("");
		}
		return result;

		function shiftChar(char) {
			let result = char.codePointAt(0);
			result = result - getCurrentKey();
			if (result < 65) {
				result = result + 26;
			}
			return String.fromCharCode(result);
		}

		function getCurrentKey() {
			++keyIndex;
			if (keyIndex >= key.length) {
				keyIndex = 0;
			}
			return keyArr[keyIndex];
		}
	}
}

module.exports = {
	directMachine: new VigenereCipheringMachine(),
	reverseMachine: new VigenereCipheringMachine(false),
	VigenereCipheringMachine,
};
