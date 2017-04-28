'use strict';

function watermelon(weigth) {
	if (weigth % 2 === 0 && weigth > 2) {
		return 'YES'
	} else {
		return 'NO'
	}
}

module.exports = watermelon;