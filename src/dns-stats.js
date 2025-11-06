const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	result = new Object();
	const domainsSplitted = [];
	const domainsStrings = [];
	for (const d of domains) {
		const dSplitted = d.split(".");
		dSplitted.reverse();
		domainsSplitted.push(dSplitted);
		let str = "";
		for (const word of dSplitted) {
			str += "." + word;
		}
		domainsStrings.push(str);
	}

	for (const ds of domainsSplitted) {
		let str = "";
		for (let i = 0; i < ds.length; i++) {
			str += "." + ds[i];
			if (result.hasOwnProperty(str)) continue;
			let counter = 0;
			for (const dStr of domainsStrings) {
				if (dStr.includes(str)) {
					++counter;
				}
			}
			result[str] = counter;
		}
	}
	
	return result;
}

module.exports = {
	getDNSStats,
};
