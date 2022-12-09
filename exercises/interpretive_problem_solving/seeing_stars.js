"use strict";

const buildStarTop = function buildStarTop(arr) {
  let innCnt = ((size - 3) / 2);
  let outCnt = 0;

  while (innerSpaces > 0) {
    arr.push((' ').repeat(outCnt) + )
  }
};

const buildStarBottom = function buildStarBottom(arr) {
  let innCnt = 0;
  let outCnt = ((size - 3) / 2);

};

const star = function printStar(size) {
  let starArr = [];

  buildStarTop(starArr);
  starArr.push(('*').repeat(size));
  buildStarBottom(starArr);

  console.log(starArr.join('\n'));
};

star(7);
star(9);
