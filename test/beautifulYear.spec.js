'use strict';

const algolib = require('../index.js');

describe('#beautifulYear', function () {

	it('should return year bigger then inner and have all different digits', function () {
		let beautifulYear = algolib.beautifulYear(1987);

		beautifulYear.should.be.eql(2013);
	});

	it('should return year bigger then inner and have all different digits', function () {
		let beautifulYear = algolib.beautifulYear(2013);

		beautifulYear.should.be.eql(2014);
	});

	it('should return year bigger then inner and have all different digits', function () {
		let beautifulYear = algolib.beautifulYear(1000);

		beautifulYear.should.be.eql(1023);
	});

	it('should return year bigger then inner and have all different digits', function () {
		let beautifulYear = algolib.beautifulYear(5555);

		beautifulYear.should.be.eql(5601);
	});

})