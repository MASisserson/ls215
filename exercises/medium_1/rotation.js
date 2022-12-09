"use strict";

/*

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  > If the input is not an array, return undefined.
  > If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

input:  array
return: array

Rules:
1. Return undefined if input not array.
2. Return empty array if input is empty array.
3. Return a new array, don't modify the original array.
4. Should work with number, string, and simple object elements.
5. I'll assume a shallow copy is what we want.

Algorithm:
0. Check for empty array or not array.
1. Copy the input array.
2. Take the first element off the arrCopy and add it to the end.
3. Return the array copy.

*/

const rotateArray = function rotateArrayElements(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  let arrCopy = arr.slice();
  arrCopy.push(arrCopy.shift());
  return arrCopy;
};

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
