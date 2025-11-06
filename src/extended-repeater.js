const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
	let additionFull = "";
	if (options.hasOwnProperty("addition")) {
		let additionSeparator = options.additionSeparator;
		if (!additionSeparator) {
			additionSeparator = "|";
		}
		const additionArr = [];
		let additionRepeatTimes = options.additionRepeatTimes;
		if (!additionRepeatTimes) {
			additionRepeatTimes = 1;
		}
		for (let i = 0; i < additionRepeatTimes; i++) {
			additionArr.push(String(options.addition));
		}

		additionFull = additionArr.join(additionSeparator);
	}

	const strWithAdditionArr = [];

	let repeatTimes = options.repeatTimes;
	if (!repeatTimes) {
		repeatTimes = 1;
	}
	for (let i = 0; i < repeatTimes; i++) {
		strWithAdditionArr.push(str + additionFull);
	}

	let separator = options.separator;
	if (!separator) {
		separator = "+";
	}

	return strWithAdditionArr.join(separator);
}

module.exports = {
	repeater,
};
