"use strict";

const encodeRails = function encodeStringIntoRails(rails, char, idx) {
  if (idx % 4 === 0) {
    rails[0].push(char);
  } else if (idx % 2 === 1) {
    rails[1].push(char);
  } else {
    rails[2].push(char);
  }

  return rails;
};

const collapse = function collapseArrayElements(arr) {
  return arr.filter(ele => !!ele).join('');
};

const encodeRail = function encodeWithRailCipher(msg) {
  let chars = msg.replace(/ /g, '').split('');
  let rails = chars.reduce(encodeRails, [[], [], []]);
  return rails.map(collapse).join('');
};

const decodeRail = function decodeRailCipher(msg) {
  let topLength = Math.ceil(msg.length / 4);
  let midLength = Math.floor(msg.length / 2);
  let [ topIdx, midIdx, botIdx ] = [0, topLength, topLength + midLength];

  return msg.split('').map((___, idx) => {
    let decodedChar = '';
    if (idx % 4 === 0) {
      decodedChar = msg[topIdx];
      topIdx += 1;
    } else if (idx % 2 === 1) {
      decodedChar = msg[midIdx];
      midIdx += 1;
    } else {
      decodedChar = msg[botIdx];
      botIdx += 1;
    }

    return decodedChar;
  }).join('');
};

console.log(encodeRail('WE ARE DISCOVERED FLEE AT ONCE'));
console.log(decodeRail('WECRLTEERDSOEEFEAOCAIVDEN'));
