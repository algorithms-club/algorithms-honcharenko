'use strict';

const algolib = require('../../index.js');

describe.only('#selectionSort', function() {

	it('should #return sorted array', function() {
		let selectionSort = new algolib.selectionSort();

		let arr = [];
		let i = 50;
		while (i--) {
			let random = parseInt(Math.random() * 100);
			arr.push(random);
		}

		selectionSort.sort(arr);
	})

	// it('should #get element from list', function() {
	// 	let list = new algolib.list();
	// 	list.push(5);
	// 	let res = list.get(2);
	// 	res.should.be.false();
	// })

	// it('should #pop element from list', function() {
	// 	let list = new algolib.list();
	// 	list.push(5);
	// 	list.push(2);
	// 	list.push(3);
	// 	let res = list.pop();
	// 	let res2 = list.pop();
	// 	res.should.be.eql(3);
	// 	res2.should.be.eql(2);
	// })

})