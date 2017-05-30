'use strict';

class mergeSort {

    mergeSort(arr) {
        let arrLength = arr.length;

        if (arrLength >= 2) {
            let arrLeft = arr.slice(0, Math.floor(arrLength / 2));
            let arrRight = arr.slice(Math.floor(arrLength / 2));
            arr = mergeSort.merge(mergeSort.mergeSort(arrLeft), mergeSort.mergeSort(arrRight))
        }

        return arr;
    }

    merge(left, right) {

        var result = [];

        while(left.length || right.length) {

            if(left.length && right.length) {

                if(left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }

            } else if (left.length) {
                result = result.concat(left);
                break;
            } else {
                result = result.concat(right);
                break;
            }
        }

        return result;
    }
}

module.exports = mergeSort;
