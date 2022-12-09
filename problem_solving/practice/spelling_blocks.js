"use strict";

const SET_A = ['B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z'];
const SET_B = ['O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y', 'M'];

const getIdxMatch = function getBlockIndexMatch(ltr) {
  return (SET_A.includes(ltr)) ? SET_A.indexOf(ltr) : SET_B.indexOf(ltr);
};

const isBlockWord = function isValidBlockWord(wrd) {
  let ltrArr = wrd.match(/\w/g).map(ltr => ltr.toUpperCase());
  let blockArr = ltrArr.map(getIdxMatch);
  return !blockArr.map(idx => {
    return blockArr.indexOf(idx) === blockArr.lastIndexOf(idx);
  }).includes(false);
};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
