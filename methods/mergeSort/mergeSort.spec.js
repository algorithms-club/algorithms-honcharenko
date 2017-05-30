'use strict';

const algolib = require('../../index.js');

describe.only('#mergeSort', function() {

	it('should #return sorted array by selectionSort method', function() {
        let mergeSort = new algolib.mergeSort();

        let arr = [];
		let i = 50;
		while (i--) {
			let random = parseInt(Math.random() * 100);
			arr.push(random);
		}

        mergeSort.mergeSort(arr);

        console.log(arr);

	})

})
