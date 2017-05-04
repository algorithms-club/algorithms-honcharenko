'use strict';

let bubbleSort = require('./methods/bubble-sort/bubble-sort.js');
let coverByTitle = require('./methods/coverByTitle/coverByTitle.js');
let watermelon = require('./methods/watermelon/watermelon.js');
let stones = require('./methods/stones/stones.js');
let beautifulYear = require('./methods/beautifulYear/beautifulYear.js');
let unionFind = require('./methods/unionFind/unionFind.js');
let unionFindWithWeight = require('./methods/unionFindWithWeight/unionFindWithWeight.js');
let list = require('./methods/list/list.js');
let shellSort = require('./methods/shellSort/shellSort.js');
let selectionSort = require('./methods/selectionSort/selectionSort.js');

let algolib = {
    bubbleSort,
    coverByTitle,
    watermelon,
    stones,
    beautifulYear,
    unionFind,
    unionFindWithWeight,
    list,
    shellSort,
    selectionSort
}

module.exports = algolib;