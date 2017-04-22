'use strict';

class list {
	constructor() {
		this._list = {};
		this._currentPosition = 0;
	}

	push(e) {
		this._list[this._currentPosition] = {
			val: e
		}
		if (this._currentPosition != 0) {
			this._list[this._currentPosition - 1].nextPos = this._currentPosition;
		}

		this._currentPosition++;
	}

	pop() {
		if (this._currentPosition != 0) {
			let result = this._list[this._currentPosition - 1].val;
			delete this._list[this._currentPosition - 1];
			if (this._currentPosition - 2 != -1) {
				delete this._list[this._currentPosition - 2].nextPos;
			}
			this._currentPosition--;
			return result;
		} else {
			return false;
		}
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
