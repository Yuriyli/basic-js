const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	const result = [];

	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	let flagNextDeleted = false;
	let flagNextDoubled = false;
	let flagPrevDeleted = false;
	let flagPrevDoubled = false;

	for (let i = 0; i < arr.length; ) {
		const element = arr[i];

		if (typeof element === "number") {
			result.push(element);
			flagNextDeleted = false;
			flagNextDoubled = false;
			flagPrevDeleted = false;
			flagPrevDoubled = false;
			++i;
			continue;
		}

		switch (element) {
			case "--discard-next":
				if (i === arr.length - 1) {
					++i;
					break;
				}

				flagNextDeleted = true;
				flagNextDoubled = false;
				flagPrevDeleted = false;
				flagPrevDoubled = false;
				i += 2;
				break;

			case "--discard-prev":
				if (i === 0) {
					++i;
					break;
				}

				if (!flagNextDeleted) {
					result.splice(-1, 1);
				}
				flagNextDeleted = false;
				flagNextDoubled = false;
				flagPrevDeleted = true;
				flagPrevDoubled = false;

				++i;
				break;

			case "--double-next":
				if (i === arr.length - 1) {
					++i;
					break;
				}

				result.push(arr[i + 1]);
				result.push(arr[i + 1]);

				flagNextDeleted = false;
				flagNextDoubled = true;
				flagPrevDeleted = false;
				flagPrevDoubled = false;

				i += 2;
				break;

			case "--double-prev":
				if (i === 0) {
					++i;
					break;
				}
				if (!flagNextDeleted) {
					result.push(result[result.length - 1]);
				}
				flagNextDeleted = false;
				flagNextDoubled = false;
				flagPrevDeleted = false;
				flagPrevDoubled = true;

				++i;
				break;
		}
	}

	return result;
}

module.exports = {
	transform,
};
