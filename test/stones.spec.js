'use strict';

const algolib = require('../index.js');

describe('#stones', function () {

	it('should return how match you should remove', function () {
		let stonesRemove = algolib.stones(3, 'RRG');

		stonesRemove.should.be.eql(1);
	});

	it('should return how match you should remove', function () {
		let stonesRemove = algolib.stones(5, 'RRRRR');

		stonesRemove.should.be.eql(4);
	});

	it('should return how match you should remove', function () {
		let stonesRemove = algolib.stones(4, 'BRBG');

		stonesRemove.should.be.eql(0);
	});

	it('should return how match you should remove', function () {
		let stonesRemove = algolib.stones(50, 'GRBGGRBRGRBGGBBBBBGGGBBBBRBRGBRRBRGBBBRBBRRGBGGGRB');

		stonesRemove.should.be.eql(18);
	});

})