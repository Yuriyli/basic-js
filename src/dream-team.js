const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	const filteredMembers = members.filter((m) => {
		if (typeof m === "string") return true;
		return false;
	});
	const result = [];
	for (const m of filteredMembers) {
		if (m === "") continue;
		result.push(m.trim()[0].toUpperCase());
	}
	result.sort();
	return result.join("");
}

module.exports = {
	createDreamTeam,
};
