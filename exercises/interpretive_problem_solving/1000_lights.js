"use strict";

const range = function range(start, end) {
  let rngArr = [];
  for (let idx = start; idx <= end; idx++) {
    rngArr.push(idx);
  }

  return rngArr;
};

const iterateSwitchBrd = function iterateSwitchBrd(brd) {
  let brdCopy = brd;
  for (let step = 1; step <= brd.length; step++) {
    brdCopy = brdCopy.map((lightStatus, idx) => {
      return ((idx + 1) % step === 0) ? !lightStatus : lightStatus;
    });
  }

  return brdCopy;
};

const getOnLights = function getOnLightNumbers(brd) {
  return Object.entries(brd).filter(light => light[1] === true)
    .map(light => +(light[0]) + 1);
};

const lightsOn = function lightsOn(switchCnt) {
  let switchBrd = range(1, switchCnt);
  switchBrd = switchBrd.map(___ => false);
  switchBrd = iterateSwitchBrd(switchBrd);

  return getOnLights(switchBrd);
};

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
