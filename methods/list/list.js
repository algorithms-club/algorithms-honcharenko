'use strict';

class list {
	constructor() {
		this._list = {};
		this._lastPosition = undefined;
		this._startPositin = undefined;
		this._length = 0;
		this._key = 0;
	}

	push(e) {
		this._list[this._key] = {
			val: e
		}

		if (this._length == 0) {			
			this._startPositin = this._key;
		}

		if (this._length >= 1) {
			this._list[this._key].prevPos = this._lastPosition;
		}

		if (this._lastPosition >= 0) {
			this._list[this._lastPosition].nextPos = this._key
		}

		this._lastPosition = this._key;
		this._length++;
		this._key++;

		console.log('push ', this);
	}

	pop() {
		if (this._length === 0) {
			console.log('POP error');
			return false;
		}
		
		let result = this._list[this._lastPosition].val;

		if (this._list[this._lastPosition].prevPos != undefined) {
			let preLastPosition = this._list[this._lastPosition].prevPos;
			delete this._list[preLastPosition].nextPos;
			delete this._list[this._lastPosition];	
			this._lastPosition = preLastPosition;
		} else {
			delete this._list[this._lastPosition];
		}		
		
		this._length--;

		if (this._length === 0) {
			this._lastPosition = undefined;
			this._startPositin = undefined;
		}
		console.log('POP result: ', result);
		return result;
	}

	get(i) {
		if (this._list[i]) {
			return this._list[i].val;
		} else {
			return false;
		}
	}
}

module.exports = list;
