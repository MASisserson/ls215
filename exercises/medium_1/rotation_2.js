"use strict";

/*

Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

input:  number, rotationFactor
return: number

Rules:
1. Rotate only the last rotationFactor digits.
2. Do we have to account for a rotationFactor of 0?
3. Do we have to account for either argument being missing?
4. Do we have to account for if rotationFactor is bigger than the number of digits in number?

Algorithm:
1. Get everything into a modifiable state (turn into array).
2. Isolate the last rotationFactor digits.
3. Rotate those digits.
4. Add the isolated group back to the rest and join back into a number.
5. Return that value.


*/

const rotateRightmostDigits = function rotateRightmostDigits(num, rotMod) {
  let digitsArr = String(num).split('');
  let length = digitsArr.length;
  let toRotateArr = digitsArr.splice(length - rotMod, length);
  toRotateArr.push(toRotateArr.shift());

  return +(digitsArr.concat(toRotateArr).join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
