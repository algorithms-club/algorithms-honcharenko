'use strict';

class selectionSort {

	constructor() {
		
	}

	sort(arr) {
		let l = arr.length;
		let i, j;

		for (i = 0; i < l - 1; i++) {
			let min = i;

			for (j = i + 1; j < l; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}

			if (i != min) {
				let temp = arr[i];
				arr[i] = arr[min];
				arr[min] = temp;
			}
		}

		console.log('arr: ', arr);
		return arr;
	}
}

module.exports = selectionSort;
