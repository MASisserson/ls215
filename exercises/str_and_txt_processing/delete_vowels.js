"use strict";

const dropVowels = function dropVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
};

const removeVowels = function removeVowels(strArr) {
  return strArr.map(dropVowels);
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));        // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));               // ["BC", "", "XYZ"]
