const sumReduce = function sumReduce(sum, num) {
  return sum + num;
};

const getArrSums = function getArraySegmentSums(___, idx, arr) {
  return arr.slice(0, idx + 1).reduce(sumReduce, 0);
};

const sumOfSums = function sumOfSums(numbers) {
  return numbers.map(getArrSums).reduce(sumReduce, 0);
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
