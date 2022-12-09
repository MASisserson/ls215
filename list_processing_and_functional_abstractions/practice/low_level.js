function isAllUnique(str) {
  let seen = {};
  let lowerCasedString = str.toLowerCase();

  for (let idx = 0; idx < lowerCasedString.length; idx += 1) {
    if (lowerCasedString[idx] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[idx]]) {
      return false;
    } else {
      seen[lowerCasedString[idx]] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
