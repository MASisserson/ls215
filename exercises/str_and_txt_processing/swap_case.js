"use strict";

const whatCase = function whatCaseIsCharacter(char) {
  if (/[A-Z]/.test(char)) {
    return 'upper';
  } else if (/[a-z]/.test(char)) {
    return 'lower';
  } else {
    return 'none';
  }
};

const swapCharCase = function swapCharCase(char) {
  switch (whatCase(char)) {
    case 'upper':
      return char.toLowerCase();
    case 'lower':
      return char.toUpperCase();
    default:
      return char;
  }
};

const swapCase = function swapStringCase(str) {
  return str.split('').map(swapCharCase).join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
