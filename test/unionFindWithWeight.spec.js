'use strict';

const algolib = require('../index.js');

describe.only('#unionFindWithWeight', function() {

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

	// it('should #count return amount of components', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	let countComp  = uFWW.count();
	// 	countComp.should.be.eql(1);
	// })

	// it('should #count return amount of components', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	uFWW.connect(2,3);
	// 	let countComp  = uFWW.count();
	// 	countComp.should.be.eql(1);
	// })

	// it('should #count return amount of components', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	uFWW.connect(2,3);
	// 	uFWW.connect(0,4);
	// 	uFWW.connect(5,0);
	// 	let countComp  = uFWW.count();
	// 	countComp.should.be.eql(2);
	// })

	// it('should #count return amount of components', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	let countComp  = uFWW.count();
	// 	countComp.should.be.eql(0);
	// })

	// it('should #component(a) return component', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	uFWW.connect(2,3);
	// 	uFWW.connect(0,4);
	// 	uFWW.connect(5,0);
	// 	uFWW.connect(7, 0);
	// 	uFWW.connect(8, 9);
	// 	let component  = uFWW.component(4);
	// 	component.should.be.eql(4);
	// })

	// it('should #component(a) return component', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	uFWW.connect(2,3);
	// 	uFWW.connect(0,4);
	// 	uFWW.connect(5,0);
	// 	uFWW.connect(7, 0);
	// 	uFWW.connect(8, 9);
	// 	let component  = uFWW.component(1);
	// 	component.should.be.eql(3);
	// })

	// it('should #component(a) return component', function() {
	// 	let uFWW = new algolib.unionFindWithWeight();
	// 	uFWW.connect(1,2);
	// 	uFWW.connect(2,3);
	// 	uFWW.connect(0,4);
	// 	uFWW.connect(5,0);
	// 	uFWW.connect(7, 0);
	// 	uFWW.connect(8, 9);
	// 	let component  = uFWW.component(10);
	// 	(typeof component).should.be.equal('undefined');
	// })

})
