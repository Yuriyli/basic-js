const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let result = [];

	const maxY = matrix.length - 1;
	const maxX = matrix[0].length - 1;
  
	for (let y = 0; y < matrix.length; y++) {
		const subArray = [];
		for (let x = 0; x < matrix[y].length; x++) {
			subArray.push(scanAround(x, y));
		}
		result.push(subArray);
	}

	return result;

	function scanAround(x, y) {
		let result = 0;
		for (let offsetY = -1; offsetY < 2; offsetY++) {
			for (let offsetX = -1; offsetX < 2; offsetX++) {
				if (offsetY === 0 && offsetX === 0) {
					continue;
				}

				const currentY = y + offsetY;
				if (currentY < 0 || currentY > maxY) {
					continue;
				}

				const currentX = x + offsetX;
				if (currentX < 0 || currentX > maxX) {
					continue;
				}
        
				result += matrix[currentY][currentX];
			}
		}
		return result;
	}
}

module.exports = {
	minesweeper,
};
