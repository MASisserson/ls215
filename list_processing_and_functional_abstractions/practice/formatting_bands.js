"use strict";

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

const capitalizeWord = function capitalizeWord(word) {
  let capitalizedWord = word.split('');
  capitalizedWord[0] = capitalizedWord[0].toUpperCase();
  return capitalizedWord.join('');
};

const capitalizeString = function capitalizeString(str) {
  return str.split(' ').map(capitalizeWord).join(' ');
};

const removeDots = function removeDots(str) {
  // return str.split('.').join('');
  return str.replace(/\./g, '');
};

const processBands = function processBands(data) {
  return data.map(band => {
    return {
      name: removeDots(capitalizeString(band.name)),
      country: 'Canada',
      active: band.active,
    };
  });
};

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
