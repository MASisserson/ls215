# Longest Sentence

Input: String
Output: String
Return: undefined

**Rules:**
1. What is a sentence:
  a. Ends with a period, exclamation point, or question mark.
  b. Begins with a word character.
2. What is a word:
  a. Any sequence of characters that are not spaces or sentence-ending characters.
3. Report the longest string without any changes to it.

**Plan**
1. Split text at the spaces to create wordArr.
2. Create a variable called sentenceID, initialized to 0.
3. Reduce wordArr to a nested array called sentenceArr
  A. Pass `[]` to the array as the starting value, sentenceArr.
  B. Set `sentenceArr[sentenceID] = sentenceArr[sentenceID] || []`
  C. Push each word to the current `sentenceArr[sentenceID]`
  D. Check each word for a `.`, `!`, or `?`. If found:
    a. Iterate up sentenceID
4. Reduce sentenceArr, returning the longest sentence.
5. Log information to the console.
