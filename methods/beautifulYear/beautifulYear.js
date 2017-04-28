'use strict';

function beautifulYear(year) {
	year = year + 1 + '';
	let i = 4;

	while(i-- > 1) {
	  var j = i;
	  while (j--) {
	    if (+year[i] === +year[j]) {
	      switch(i) {
	        case 3:
	          year = +year + 1 + '';
	          break;
	        case 2:
	          year = year[0] + year[1] + year[2] + '0';
	          year = +year + 10 + '';
	          break;
	        case 1:
	          year = year[0] + year[1] + '00';
	          year = +year + 100 + '';
	          break;
	      }
	      i = 4;
	    }
	  }
	}



	return +year;
}

module.exports = beautifulYear;