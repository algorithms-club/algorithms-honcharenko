'use strict';

const algolib = require('../../index.js');

describe('#unionFindWithWeight', function() {

	it('should create proper datastructure', function() {
		let uFWW = new algolib.unionFindWithWeight();
		uFWW.connect.should.be.instanceOf(Function);
		uFWW.isConnected.should.be.instanceOf(Function);
		uFWW.count.should.be.instanceOf(Function);
		uFWW.component.should.be.instanceOf(Function);
	});

	it('should #isConnected return false if not connected', function() {
		let uFWW = new algolib.unionFindWithWeight();
		let isElementConnected = uFWW.isConnected(3,4);
		isElementConnected.should.be.false();
	})

	it('should #isConnected return true if elements are connected', function() {
		let uFWW = new algolib.unionFindWithWeight();
		uFWW.connect(1,4);
		let isElementConnected  = uFWW.isConnected(1,4);
		isElementConnected.should.be.true();
	})

	it('should #count return count of elements (4)', function() {
		let uFWW = new algolib.unionFindWithWeight();
		uFWW.connect(1,4);
		uFWW.connect(2,3);
		let count  = uFWW.count();
		count.should.be.eql(4);
	})

	it('should #count return count of elements (4)', function() {
		let uFWW = new algolib.unionFindWithWeight();
		uFWW.connect(0,2);
		uFWW.connect(1,2);
		uFWW.connect(3,2);
		uFWW.connect(5,6);
		uFWW.connect(7,6);
		uFWW.connect(8,6);
		uFWW.connect(2,6);
		let comp2 = uFWW.component(2);
		comp2.should.be.eql(6);
	})

})