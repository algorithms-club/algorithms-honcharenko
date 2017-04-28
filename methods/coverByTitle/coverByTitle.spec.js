'use strict';

const algolib = require('../../index.js');

describe('#coverByTitle', function () {

	it('should count amount of tiles to cower area', function () {
		let titlesAmount = algolib.coverByTitle(5, 3, 2);

		titlesAmount.should.be.eql(6);
	});

	it('should count amount of tiles to cower area', function () {
		let titlesAmount = algolib.coverByTitle(0.5, 1.3, 0.2);

		titlesAmount.should.be.eql(21);
	})

})