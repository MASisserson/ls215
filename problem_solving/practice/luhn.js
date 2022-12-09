"use strict";

const addDigitMod = function addDigitMod(sum, digitMod) {
  if (digitMod > 9) {
    return sum + digitMod - 9;
  } else {
    return sum + digitMod;
  }
};

const isLuhn = function isValidLuhnNumber(numStr) {
  let digits = numStr.match(/\d/g);
  let count = 0;

  let digitSum = digits.reduceRight((sum, digit) => {
    count += 1;
    if (count % 2 === 1) {
      return sum + Number(digit);
    } else {
      let digitMod = (Number(digit) * 2);
      return addDigitMod(sum, digitMod);
    }
  }, 0);

  return digitSum % 10 === 0;
};

console.log(isLuhn('8763'));                 // true
console.log(isLuhn('1111'));                 // false
console.log(isLuhn('2323 2005 7766 3554'));  // true
