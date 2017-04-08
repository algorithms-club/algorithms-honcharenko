'use strict';

const algolib = require('../index.js');

describe.only('#unionFind', function() {
	it('should create proper datastructure', function() {
		let uf = new algolib.UnionFind();
		uf.connect.should.be.instanceOf(Function);
		uf.isConnected.should.be.instanceOf(Function);
		uf.count.should.be.instanceOf(Function);
		uf.component.should.be.instanceOf(Function);
	});

	it('should #isConnected return false if not connected', function() {
		let uf = new algolib.UnionFind();
		let isElementConnected = uf.isConnected(3,4);
		isElementConnected.should.be.false();
	})

	it('should #isConnected return true if elements are connected', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,4);
		let isElementConnected  = uf.isConnected(1,4);
		isElementConnected.should.be.true();
	})

	it('should #count return amount of components', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		let countComp  = uf.count();
		countComp.should.be.eql(1);
	})

	it('should #count return amount of components', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		uf.connect(2,3);
		let countComp  = uf.count();
		countComp.should.be.eql(1);
	})

	it('should #count return amount of components', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		uf.connect(2,3);
		uf.connect(0,4);
		uf.connect(5,0);
		let countComp  = uf.count();
		countComp.should.be.eql(2);
	})

	it('should #count return amount of components', function() {
		let uf = new algolib.UnionFind();
		let countComp  = uf.count();
		countComp.should.be.eql(0);
	})

	it('should #component(a) return component', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		uf.connect(2,3);
		uf.connect(0,4);
		uf.connect(5,0);
		uf.connect(7, 0);
		uf.connect(8, 9);
		let component  = uf.component(4);
		component.should.be.eql(4);
	})

	it('should #component(a) return component', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		uf.connect(2,3);
		uf.connect(0,4);
		uf.connect(5,0);
		uf.connect(7, 0);
		uf.connect(8, 9);
		let component  = uf.component(1);
		component.should.be.eql(3);
	})

	it('should #component(a) return component', function() {
		let uf = new algolib.UnionFind();
		uf.connect(1,2);
		uf.connect(2,3);
		uf.connect(0,4);
		uf.connect(5,0);
		uf.connect(7, 0);
		uf.connect(8, 9);
		let component  = uf.component(10);
		(typeof component).should.be.equal('undefined');
	})
})
