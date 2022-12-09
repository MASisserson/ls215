"use strict";

const substrings = function getSubstringsFromArrayOfChars(___, idx, arr) {
  return arr.slice(0, idx + 1).join('');
};

const leadingSubstrings = function leadingSubstrings(str) {
  return str.split('').map(substrings);
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
