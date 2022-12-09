"use strict";

const containsNonNumerics = function containsNonNumerics(...args) {
  for (let idx = 0; idx < args.length; idx++) {
    if (!/^\d+(.?\d+)*$/g.test(args[idx])) return true;
  }

  return false;
};

const compareInts = function compareIntegers(int1, int2) {
  let num1 = Number(int1) || 0;
  let num2 = Number(int2) || 0;

  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
};

const getLongestLength = function getLongestLength(...args) {
  return args.reduce((length, arr) => {
    return (compareInts(length, arr.length) > -1) ? length : arr.length;
  }, 0);
};

const compareVersions = function compareVersions(version1, version2) {
  if (containsNonNumerics(version1, version2)) return null;

  let [ verOneArr, verTwoArr ] = [version1.split('.'), version2.split('.')];
  let length = getLongestLength(verOneArr, verTwoArr);

  for (let idx = 0; idx < length; idx++) {
    let comparison = compareInts(verOneArr[idx], verTwoArr[idx]);
    if (comparison !== 0) return comparison;
  }

  return 0;
};

// console.log(compareInts(1, 2));
// console.log(compareInts(3, 2));
// console.log(compareInts(1, 1));

console.log(compareVersions('0.1', '1') === -1);          // -1
console.log(compareVersions('1', '1.0') === 0);           // 0
console.log(compareVersions('1', '1.1') === -1);          // -1
console.log(compareVersions('1.2', '1.1') === 1);         // 1
console.log(compareVersions('1.2', '1.2.0.0') === 0);     // 0
console.log(compareVersions('1.2', '1.18.2') === -1);     // -1
console.log(compareVersions('1.18.2', '13.37') === -1);   // -1
console.log(compareVersions('1.18.a', '13.37') === null); // -1
console.log(compareVersions('1.18.2', '13.3b') === null); // -1
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
