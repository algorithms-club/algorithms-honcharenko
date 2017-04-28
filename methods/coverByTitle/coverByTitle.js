'use strict';

function coverByTitle(heigth, width, titleHeigth) {
	let rowTitleAmount = Math.ceil(heigth / titleHeigth);
	let columnTitleAmount = Math.ceil(width / titleHeigth);

	return rowTitleAmount * columnTitleAmount;
}

module.exports = coverByTitle;