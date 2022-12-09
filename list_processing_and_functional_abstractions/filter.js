"use strict";

function myFilter(array, func) {
  let resultArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (func(array[idx], idx, array)) {
      resultArr.push(array[idx]);
    }
  }

  return resultArr;
}

// let isPythagoreanTriple = function (triple) {
//   let aAndB = Math.pow(triple.a, 2) + Math.pow(triple.b, 2);
//   return aAndB === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//   { a: 5, b: 12, c: 13 },
//   { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]


function myFilter(array, func) {
  let resultArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (func(array[idx], idx, array)) {
      resultArr.push(array[idx]);
    }
  }

  return resultArr;
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
