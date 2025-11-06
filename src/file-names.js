const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	const result = [];
	for (const fn of names) {
		if (!result.includes(fn)) {
			result.push(fn);
			continue;
		}

		let newFN = "";
		let indx = 1;
		do {
			newFN = fn + `(${indx})`;
			++indx;
		} while (result.includes(newFN));

		result.push(newFN);
	}
	return result;
}

module.exports = {
	renameFiles,
};
