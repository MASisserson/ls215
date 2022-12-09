"use strict";

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

const trim = function trimExcessWhiteSpace(txt) {
  return txt.replace(/[\s]+/g, ' ');
};

const getSentences = function getSentencesFromWordArray(wordArr) {
  let sentenceID = 0;
  let sentenceArr = wordArr.reduce((sentenceArr, word) => {
    sentenceArr[sentenceID] = sentenceArr[sentenceID] || [];
    sentenceArr[sentenceID].push(word);

    if (word.match(/[.!?]/)) {
      sentenceID += 1;
    }

    return sentenceArr;
  }, []);

  return sentenceArr;
};

const getLongest = function getLongestSentenceFromSentenceArray(sentenceArr) {
  return sentenceArr.reduce((longest, current) => {
    return (longest.length > current.length) ? longest : current;
  });
};

const printLongestSentence = function printLongestSentence(words) {
  console.log(words.join(' ') + '\n');
  console.log(`The longest sentence has ${words.length} words.`);
};

const isNotEmptyStr = function isNotWEmptyString(word) {
  return word.length > 0;
};

const cleanWords = function cleanWordArray(wordArr) {
  return wordArr.filter(isNotEmptyStr);
};

const cleanSentences = function cleanSentenceArray(sentenceArr) {
  return sentenceArr.map(cleanWords);
};

const longestSentence = function logLongestSentence(text) {
  let words = trim(text).split(' ');
  let sentences = getSentences(words);
  let longestSentence = getLongest(cleanSentences(sentences));
  // console.log(longestSentence);

  printLongestSentence(longestSentence);
};

// longestSentence(longText);


// longestSentence("We are met on a great battlefield of that war.  It is altogether fitting and proper that we should do this.");
// longestSentence("What's up, \"Doc\"?    The brown fox is superlative!");
// longestSentence("    I yam what I yam! Hi there!");
// longestSentence("Hello there! Why  not? Goodbye.");
