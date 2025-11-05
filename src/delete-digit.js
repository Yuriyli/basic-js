const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const nStr = n.toString();
	let result = 0;
	for (let i = 0; i < nStr.length; i++) {
		const testStr = nStr.slice(0, i) + nStr.slice(i + 1, nStr.length);
		const testNum = Number(testStr);
		if (testNum > result) result = testNum;
	}
	return result;
}

module.exports = {
	deleteDigit,
};
