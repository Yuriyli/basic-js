const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (typeof sampleActivity !== "string") {
		return false;
	}
	const numberSample = Number(sampleActivity);
	if (typeof numberSample !== "number" || Number.isNaN(numberSample)) {
		return false;
	}
	if (numberSample <= 0 || numberSample > MODERN_ACTIVITY) {
		return false;
	}
	return Math.ceil(
		-1 * (HALF_LIFE_PERIOD / Math.LN2) * Math.log(numberSample / MODERN_ACTIVITY)
	);
}

module.exports = {
	dateSample,
};
