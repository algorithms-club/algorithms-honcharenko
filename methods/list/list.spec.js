'use strict';

const algolib = require('../../index.js');

describe.only('#list', function() {

	it('should #get element from list', function() {
		let list = new algolib.list();
		list.push(5);
		list.push(9);
		list.push(8);
		list.push(6);
		list.pop();
		list.pop();
		list.pop();
		list.pop();
		list.pop();
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
