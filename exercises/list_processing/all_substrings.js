"use strict";

const mapSubstrings = function getSubstringsFromArrayOfChars(___, idx, arr) {
  return arr.slice(0, idx + 1).join('');
};

const leadingSubstrings = function leadingSubstrings(str) {
  return str.split('').map(mapSubstrings);
};

const substrings = function substrings(str) {
  let substringArray = [];
  for (let idx = 0; idx < str.length; idx++) {
    substringArray = substringArray.concat(leadingSubstrings(str.slice(idx)));
  }

  return substringArray;
};

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
