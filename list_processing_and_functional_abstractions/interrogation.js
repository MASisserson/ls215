"use strict";

function myOwnEvery(arr, callback) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (!callback(arr[idx], idx, arr)) return false;
  }

  return true;
}

// let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
