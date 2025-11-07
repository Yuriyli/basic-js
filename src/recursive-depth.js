const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let result = 0;

		if (!Array.isArray(arr)) {
			return result;
		}

		result = 1;
		for (const a of arr) {
			const aResult = this.calculateDepth(a) + 1;
			if (aResult > result) {
				result = aResult;
			}
		}

		return result;
	}
}

module.exports = {
	depthCalculator: new DepthCalculator(),
};
