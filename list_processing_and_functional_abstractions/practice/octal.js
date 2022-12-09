"use strict";

function octalToDecimal(numberString) {
  const digits = numberString.split('');
  const octalBase = 8;
  let power = 0;

  return digits.reduceRight((sum, digit) => {
    const octalModifier = Math.pow(octalBase, power);
    power += 1;

    return sum + (Number(digit) * octalModifier);
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
