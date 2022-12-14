"use strict";

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const properCase = function properCase(newChar, ogChar, lowOGChar) {
  return (ogChar === lowOGChar) ? newChar : newChar.toUpperCase();
};

const offsetAlphabet = function offsetAlphabet(charArr, key) {
  return charArr.map(char => {
    let lowerCaseChar = char.toLowerCase();

    if (ALPHABET.includes(lowerCaseChar)) {
      let idx = (ALPHABET.indexOf(lowerCaseChar) + key) % ALPHABET.length;
      return properCase(ALPHABET[idx], char, lowerCaseChar);
    } else {
      return char;
    }
  });
};

const caesarEncrypt = function encryptWithCaesarCipher(str, key) {
  return offsetAlphabet(str.split(''), key).join('');
};

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
