"use strict";

const anagram = function anagram(word, list) {
  const chars = word.split('').sort().join('');
  return list.filter(word => chars === word.split('').sort().join(''));
};

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
