// 1

// let firstName = 'Matthew';
// let lastName = 'Sisserson';
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// 2

// let firstName = 'Matthew';
// let lastName = 'Sisserson';
// console.log(firstName.concat(lastName));

// 3

// let firstName = 'Matthew';
// let lastName = 'Sisserson';
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName.split(' '));

// 4

// let language = 'JavaScript';
// let idx = language.indexOf('S');
// console.log(idx);

// 5

// let language = 'JavaScript';
// let idx = language.indexOf('S');
// let charCode = language.charCodeAt(idx);
// console.log(charCode);

// 6

// let language = 'JavaScript';
// let idx = language.indexOf('S');
// let charCode = language.charCodeAt(idx);
// console.log(String.fromCharCode(charCode));

// 7

// let language = 'JavaScript';
// let idx = language.lastIndexOf('a');
// console.log(idx);

// 8

// let a = 'a';
// let b = 'b';
// console.log(a > b);

// b = 'B';
// console.log(a > b);

// 9

// let language = 'JavaScript';
// console.log(language.slice(1, 4));
// console.log(language.slice(2, 4));

// 10

// let language = 'JavaScript';
// console.log(language.substring(1, 4));
// console.log(language.substring(2, 4));

// 11

// let language = 'JavaScript';
// console.log(language.slice(1, -1));
// console.log(language.slice(2, -1));

// 12

// let language = 'JavaScript';
// console.log(language.substring(1, -1));
// console.log(language.substring(2, -1));

// 13

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
// console.log(compoundSentence);

// 14

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// console.log(fact1[0]);
// console.log(fact2[0]);

// 15

// let pi = 22 / 7;
// pi = pi.toString();
// console.log(pi.lastIndexOf('14'));

// 16

// let boxNumber = (356).toString();
// console.log(boxNumber);

// 17

// let boxNumber = (356).toString();
// boxNumber = parseInt(boxNumber, 10);
// console.log(typeof boxNumber);
// boxNumber = String(boxNumber);
// console.log(typeof boxNumber);

// 18

let userInput = require('readline-sync');

const queryName = function queryName() {
  return userInput.question('What is your name? ');
};

const askAndRespond = function askAndRespond() {
  let name = queryName();
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
};

askAndRespond();
