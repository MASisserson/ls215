"use strict";

const isBalanced = function hasBalancedParentheses(str) {
  let parenCount = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
      parenCount += 1;
    } else if (str[idx] === ')') {
      parenCount -= 1;
    }

    if (parenCount < 0) return false;
  }

  return parenCount === 0;
};

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
