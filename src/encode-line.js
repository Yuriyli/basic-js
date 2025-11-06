const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
	const splittedStr = str.split("");

	let previousChar = null;
	let counter = 0;
	let result = "";
	for (const char of splittedStr) {
		if (previousChar === char) {
			++counter;
		} else {
			if (previousChar) {
				addToResult();
			}
			previousChar = char;
			counter = 1;
		}
	}
	if (previousChar) {
		addToResult();
	}

	return result;

	function addToResult() {
		if (counter === 1) {
			result += previousChar;
		} else {
			result += counter + previousChar;
		}
	}
}

module.exports = {
	encodeLine,
};
