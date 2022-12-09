"use strict";

function myReduce(arr, callback, initial) {
  let accumulator = initial;
  for (let idx = 0; idx < arr.length; idx++) {
    accumulator = callback(accumulator, arr[idx], idx, arr);
  }

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
