'use strict';

class mySort {

	selectionSort(arr) {
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

		return arr;
	}

	shellSort(arr) {
		var l = arr.length;
    var d = l / 2;
    while (d > 0) {
        for (var i = d; i < l; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= d && arr[j-d] > temp) {
                arr[j] = arr[j-d];
                j = j - d;
            }
    
            arr[j] = temp;
        }

        d = parseInt(d / 2);
        
    }
	  return arr;
	}

	shuffle(arr) {
		let l = arr.length;
		let i1, i2;
		for (let i = 0; i < l; i++) {
			i1 = parseInt((Math.random() * l));
			i2 = parseInt((Math.random() * l));
			[arr[i1], arr[i2]] = [arr[i2], arr[i1]];
		}
		return arr;
	}

	isSorted(arr) {
		let l = arr.length;
		for (let i = 0; i < l - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				return false;
			}
		}
		return true;
	}
}

module.exports = mySort;
