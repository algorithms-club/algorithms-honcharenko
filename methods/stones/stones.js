'use strict';

function stones(count, colors) {
	let l = colors.length;
	let res = 0;
	while(l--) {
		if(colors[l] === colors[l+1]) {
			res++
		}
	}

	return res;
}

module.exports = stones;