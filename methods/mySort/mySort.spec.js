'use strict';

const algolib = require('../../index.js');

describe('#mySort', function() {

	it('should #return sorted array by selectionSort method', function() {
		let mySort = new algolib.mySort();

		let arr = [];
		let i = 50;
		while (i--) {
			let random = parseInt(Math.random() * 100);
			arr.push(random);
		}

		mySort.selectionSort(arr);
		let selectionSortResult = mySort.isSorted(arr);
		selectionSortResult.should.be.true();
	})

	it('should #return sorted array by shellSort method', function() {
		let mySort = new algolib.mySort();

		let arr = [];
		let i = 50;
		while (i--) {
			let random = parseInt(Math.random() * 100);
			arr.push(random);
		}

		mySort.shellSort(arr);
		let shellSortResult = mySort.isSorted(arr);
		shellSortResult.should.be.true();
	})

})
