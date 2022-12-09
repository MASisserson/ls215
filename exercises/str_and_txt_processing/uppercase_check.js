"use strict";

// const isAlphabetic = function isAnAlphabeticCharacter(char) {
//   return (/[a-zA-Z]/).test(char);
// };

// const isCharUpcase = function isCharacterUppercase(char) {
//   return char === char.toUpperCase();
// };

// const isUppercase = function isAllStringCharactersUppercase(str) {
//   let characters = str.split('');
//   let alphabeticCharacters = characters.filter(isAlphabetic);
//   return alphabeticCharacters.every(isCharUpcase);
// };

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
