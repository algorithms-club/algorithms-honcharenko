'use strict';

const algolib = require('../index.js');

describe('#watermelon', function () {

	it('should return true if guys could divide watermelon', function () {
		let divide = algolib.watermelon(8);

		divide.should.be.eql('YES');
	});

	it('should return true if guys could divide watermelon', function () {
		let divide = algolib.watermelon(5);

		divide.should.be.eql('NO');
	});

	it('should return true if guys could divide watermelon', function () {
		let divide = algolib.watermelon(1);

		divide.should.be.eql('NO');
	});

	it('should return true if guys could divide watermelon', function () {
		let divide = algolib.watermelon(2);

		divide.should.be.eql('NO');
	});

})