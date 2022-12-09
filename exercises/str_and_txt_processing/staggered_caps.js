"use strict";

// const upCaseEven = function upCaseEvenIndexedCharacters(char, idx) {
//   return (idx % 2 === 0) ? char.toUpperCase() : char;
// };

const staggeredCase = function staggeredCase(str) {
  let counter = 0;
  return str.split('').map(char => {
    if (/[A-Za-z]/.test(char)) {
      counter += 1;
      return (counter % 2 === 1) ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
