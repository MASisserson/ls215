"use strict";

const ascNumSort = function ascendingNumericalSort(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return 1;
  }
};

const multiplyAllPairs = function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => resultArr.push(num1 * num2) );
  });

  return resultArr.sort(ascNumSort);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
