"use strict";

/*

You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611


input:  str
return: Array of Integers?

Rules:

1. The argument is a string.
2. Commas (', ') separate individual numbers.
3. (:, -, ..) denote inclusive ranges.
4. Return an array of integers.

Data Types And Tricks:

1. Individual numbers and ranges can be isolated into an array.
2. Ranges: startInteger -> next int whose final character(s) match.
    Ergo, we can just count up and add to the arr until we find that value

Algorithm:

1. Turn `numStr` into `digitArr`, by separating at `', '`
2. Reduce `digitArr`
    A. Start with an empty array accumulator, `rngArr`.
    B. Conditional branch:
        a. If individual number, coerce to Number and add to `rngArr`
            i. Call parseVal() to determine what number is the next number.
        b. If range, call `addRng(rngArr)`
    C. Return `rngArr`
3. Return `rngArr`

parseVal(prevNo, currNum) (helper function)
1. Initiate an endless loop that adds incrementing values until:
    A. A value matches the current step.
    B. The first step will be the default starting place.
    C. Break once there is a match.

addRng(rngArr) (helper function)
0. Separate range into constituent steps, `stepsArr`
1. Iterate through `stepsArr`:
    A. Initiate an endless loop that adds incrementing values until:
        a. A value matches the current step.
        b. The first step will be the default starting place.
        c. Break once there is a match.
    B. Add each value to stepsArr, even the matches.

0. Separate range into constituent steps, `stepsArr`.
1. Convert steps to integers via `parseVal()`
2. Use `getRng()` to get the ranges between values:
    A. Use spread syntax

getRng() (helper function)
1. Iterate from the 1 above the first value up to the final value.
2. Add each iteration value to an array.
3. Return that array.

Questions:

1. Is the return value to be an array of integers or an array of strings?
2. Should I return an array at all?

*/


const parseVal = function parseShortHandValue(rngArr, val) {
  if (rngArr.length === 0) {
    return +(val);
  } else {
    let candidate = rngArr[rngArr.length - 1] + 1;
    let regex = new RegExp(`${val}$`);

    while (true) {
      if (regex.test(String(candidate))) {
        return candidate;
      }

      candidate += 1;
    }
  }
};

const getRng = function getRangeValues(first, final) {
  let rngArr = [];

  for (let val = first + 1; val <= final; val++) {
    rngArr.push(val);
  }

  return rngArr;
};

const addRng = function addRangeToSequence(seq, rng) {
  let stepsArr = rng.split(/-|:|\.\./g);
  let localRng = stepsArr.reduce((localRng, val) => {
    if (localRng.length === 0) {
      localRng.push(parseVal(seq, val));
    } else {
      let lastVal = localRng[localRng.length - 1];
      localRng.push(...getRng(lastVal, parseVal(localRng, val)));
    }

    return localRng;
  }, []);

  seq.push(...localRng);
};

const longHand = function getLongHandList(numStr) {
  let digitArr = numStr.split(/[, ]+/g);
  return digitArr.reduce((rngArr, val) => {
    if (/^\d+$/.test(val)) {
      rngArr.push(parseVal(rngArr, val));
    } else if (/\d..\d/.test(val) || /\d-\d/.test(val) || /\d:\d/.test(val)) {
      addRng(rngArr, val);
    } else {
      console.log(`Input was incorrectly formatted.`);
    }

    return rngArr;
  }, []);
};

console.log(longHand('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]);
console.log(longHand('1-3, 1-2')); // [1, 2, 3, 11, 12]);
console.log(longHand('1:5:2')); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(longHand('104-2')); // [104, 105, 106, 107, 108, 109, 110, 111, 112]);
console.log(longHand('104-02'));      // [104, 105, ... 202]
console.log(longHand('545, 64:11'));  // [545, 564, 565, ... 611]
console.log(longHand('13, 1...3'));
