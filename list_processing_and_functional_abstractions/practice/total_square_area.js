"use strict";

const getArea = function getArea(accumulator, dimensions) {
  const area = dimensions[0] * dimensions[1];
  return accumulator + area;
};

const totalArea = function totalArea(rectangles) {
  return rectangles.reduce(getArea, 0);
};

const totalSquareArea = function totalSquareArea(rectangles) {
  const squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
};

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));       // 141
console.log(totalSquareArea(rectangles)); // 121
