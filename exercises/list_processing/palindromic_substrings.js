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

const isPalindrome = function isPalindromeCheck(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
};

const palindromes = function palindromes(str) {
  return substrings(str).filter(isPalindrome);
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
