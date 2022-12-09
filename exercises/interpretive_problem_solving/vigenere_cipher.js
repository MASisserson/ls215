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

const getKeyArr = function getKeyArray(key) {
  return key.toLowerCase().split('').map(char => ALPHABET.indexOf(char));
};

const vigenereEncrypt = function vigenereEncrypt(str, key) {
  let keyArr = getKeyArr(key);
  let keyIdx = 0;

  return str.split('').map(char => {
    if (!/[A-Za-z]/.test(char)) return char;

    let encryptedChar = caesarEncrypt(char, keyArr[keyIdx]);

    keyIdx += 1;
    if (keyIdx === key.length) {
      keyIdx = 0;
    }

    return encryptedChar;
  }).join('');
};

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
