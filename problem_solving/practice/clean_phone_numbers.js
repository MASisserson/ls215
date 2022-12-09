"use strict";

const badPhoneNumber = function badPhoneNumber(digits) {
  const length = digits.length;
  return (length > 11
    || length < 10
    || (length === 11 && digits[0] !== '1'));
};

const badChars = function badPhoneCharacters(numStr) {
  return (numStr !== numStr.match(/[\d() .-]/g).join(''));
};

const cleanNum = function cleanPhoneNumberForSMS(numStr) {
  if (!numStr) return '0000000000';
  if (badChars(numStr)) return '0000000000';

  let digits = numStr.match(/\d/g) || '';

  if (badPhoneNumber(digits)) {
    return '0000000000';
  } else {
    return digits.reverse().slice(0, 9).reverse().join('');
  }
};

console.log(cleanNum('(012) 345-6789')); //=== '0123456789');
console.log(cleanNum('1-012-345-6789')); //=== '0123456789');
console.log(cleanNum('0asdf123456789')); //=== '0000000000');
console.log(cleanNum('23456789'));       //=== '0000000000');
console.log(cleanNum('20123456789'));    //=== '0000000000');
console.log(cleanNum(''));               //=== '0000000000');
console.log(cleanNum(' '));              //=== '0000000000');

