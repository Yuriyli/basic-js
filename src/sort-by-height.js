const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let result = arr.filter((v) => (v === -1 ? false : true));
	result.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element !== -1) continue;

		result.splice(i, 0, -1);
	}
	return result;
}

module.exports = {
	sortByHeight,
};
