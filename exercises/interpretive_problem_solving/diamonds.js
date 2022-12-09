"use strict";

const countUp = function countUp(len) {
  let counter = 1;
  let result = [];

  while (counter <= len) {
    let spaces = (' ').repeat((len - counter) / 2);
    result.push(spaces + ('*').repeat(counter) + spaces);
    counter += 2;
  }

  return result;
};

const countDown = function countDown(len) {
  let counter = len;
  let result = [];

  while (counter > 1) {
    counter -= 2;
    let spaces = (' ').repeat((len - counter) / 2);
    result.push(spaces + ('*').repeat(counter) + spaces);
  }

  return result;
};

const diamond = function printDiamond(len) {
  if (len === 1) {
    console.log('*');
    return;
  }

  console.log(countUp(len).concat(countDown(len)).join('\n'));
};

diamond(1);
diamond(3);
diamond(9);
