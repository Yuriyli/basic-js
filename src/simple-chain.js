const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	links: [],

	getLength() {
		this.links.length;
	},
	addLink(value) {
		if (value === undefined) {
			this.links.push("");
			return this;
		}
		this.links.push(value);
		return this;
	},
	removeLink(position) {
		if (position < 0 || position > this.links.length - 1) {
			this.links = [];
			throw new Error("You can't remove incorrect link!");
		} else {
			this.links.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.links.reverse();
		return this;
	},
	finishChain() {
		const resultArray = [];
		for (const link of this.links) {
			resultArray.push("( " + link + " )");
		}
		this.links = [];
		return resultArray.join("~~");
	},
};

module.exports = {
	chainMaker,
};
