"use strict";

/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

input:  number
return: number

Rules:
1. Fully rotate the value.
2. Are we to account for when no argument is given?

Algorithm:
1. Loop from the number of digits in the input num down to 2.
2. For each iteration, pass that number on to rotateRightmostDigits
3. Save the return value for use in the next iteration.
4. Return this value.

*/

const rotateRightmostDigits = function rotateRightmostDigits(num, rotMod) {
  let digitsArr = String(num).split('');
  let length = digitsArr.length;
  let toRotateArr = digitsArr.splice(length - rotMod, length);
  toRotateArr.push(toRotateArr.shift());

  return +(digitsArr.concat(toRotateArr).join(''));
};

const maxRotation = function maxRotation(num) {
  let rotNum = num;
  let digitCount = String(num).length;

  for (let rotMod = digitCount; rotMod > 1; rotMod--) {
    rotNum = rotateRightmostDigits(rotNum, rotMod);
  }

  return rotNum;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
