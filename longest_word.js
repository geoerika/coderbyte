// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

const LongestWord = (sen) => {

  sen = sen.match(/[a-z0-9]+/gi);
  let maxWord = sen[0];
  for (let word of sen) {
    maxWord = (maxWord.length < word.length) ? word : maxWord;
  }
  sen = maxWord;

  return sen;
}


console.log(LongestWord('How are you today?????'));
console.log(LongestWord('How are you today????? what about yesterday?!'));