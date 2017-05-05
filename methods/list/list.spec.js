'use strict';

const algolib = require('../../index.js');

describe('#list', function() {

	it('should #get element from list', function() {
		let list = new algolib.list();
		list.push(5);
		let res = list.get(2);
		res.should.be.false();
	})

	it('shouldnt #pop element from list', function() {
		let list = new algolib.list();
		list.push(5);
		list.push(2);
		list.push(3);
		list.pop();
		list.pop();
		list.pop();
		let res = list.pop();
		res.should.be.false();
	})

})
