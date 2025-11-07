const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	let result = "";
	console.log("input: " + date);
	if (!date) {
		return "Unable to determine the time of year!";
	}
	if (!date instanceof Date) {
		throw new Error("Invalid date!");
	}
	if (Object.keys(date)[0] !== undefined) {
		throw new Error("Invalid date!");
	}
	if (typeof date !== "object") {
		throw new Error("Invalid date!");
	}
	const month = date.getMonth();
	console.log("month: " + month);

	if (month >= 2 && month <= 4) {
		result = "spring";
	} else if (month >= 5 && month <= 7) {
		result = "summer";
	} else if (month >= 8 && month <= 10) {
		result = "autumn";
	} else {
		result = "winter";
	}
	console.log("result: " + result);
	return result;
}

module.exports = {
	getSeason,
};
