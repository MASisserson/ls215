"use strict";

const capitalize = function capitalizeWord(wrd) {
  let letters = wrd.toLowerCase().split('');
  letters[0] = letters[0].toUpperCase();

  return letters.join('');
};

const wordCap = function wordCap(str) {
  return str.split(' ').map(capitalize).join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
