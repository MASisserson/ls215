"use strict";

const expandList = function expandList(newList, item) {
  for (let idx = 0; idx < item[1]; idx++) {
    newList.push(item[0]);
  }
  return newList;
};

const buyFruit = function buyFruit(list) {
  return list.reduce(expandList, []);
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
