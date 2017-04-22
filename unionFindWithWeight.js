'use strict';

class unionFindWithWeight {
	constructor() {
		this._elements = [];
		this._weigthOfComponents = {};
	}

	getMainRootElement(a) {
		if (isNaN(this._elements[a])) {
			return -1;
		} else if (this._elements[a] === a) {
			return this._elements[a];
		} else {
			return this.getMainRootElement(this._elements[a]);
		}
	}

	connect(a, b) {
		if (this.isConnected(a, b)) {
			return;
		}

		if (isNaN(this._elements[a]) && isNaN(this._elements[b])) {
			/* if both components hasn't root */
			this._elements[a] = this._elements[b] = b;
			this._weigthOfComponents[b] = 2;
		}	else if (isNaN(this._elements[b])) {
			/* if component a hasn't root */
			let rootB = this.getMainRootElement(b);
			this._elements[a] = rootB;
			this._weigthOfComponents[rootB] = this._weigthOfComponents[rootB] ? this._weigthOfComponents[rootB] + 1 : 2;
		} else if (isNaN(this._elements[a])) {
			/* if component b hasn't root */
			let rootA = this.getMainRootElement(a);
			this._elements[b] = rootA;
			this._weigthOfComponents[rootA] = this._weigthOfComponents[rootA] ? this._weigthOfComponents[rootA] + 1 : 2;
		} else {
			/* if both component has root */
			let rootA = this.getMainRootElement(a);
			let rootB = this.getMainRootElement(b);
			if (this._weigthOfComponents[a] > this._weigthOfComponents[b]) {
				this._elements[b] = rootA;
				this._weigthOfComponents[rootA] += this._weigthOfComponents[rootB];
			} else {
				this._elements[a] = rootB;
				this._weigthOfComponents[rootB] += this._weigthOfComponents[rootA];
			}
		}
	}

	isConnected(a, b) {
		if( isNaN(this._elements[a]) || isNaN(this._elements[b]) ) {
			return false;
		}
		let rootA = this.getMainRootElement(a);
		let rootB = this.getMainRootElement(b);
		return rootA === rootB;
	}

	count() {
		let count = 0;
		for (let key in this._weigthOfComponents) {
			count += this._weigthOfComponents[key];
		}
		return count;
	}

	component(a) {

		return this._elements[a];

	}
}

module.exports = unionFindWithWeight;
