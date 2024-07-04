const wordsArray = require('../../react-journey/src/assets/fiveLetters.json');
const wordsSet = new Set(wordsArray);

const selectRandomWord = () => {
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const isWordInList = (word) => {
  return wordsSet.has(word.toLowerCase());
};



const checkLetters = (guess, original) => {
    const result = { guess: guess.split(''), colors: [] };
    const originalArr = original.toLowerCase().split('');
    
    guess.toLowerCase().split('').forEach((letter, index) => {
      const originalLetter = originalArr[index];
      if (letter === originalLetter) {
        result.colors.push('green');
      } else if (originalArr.includes(letter)) {
        result.colors.push('yellow');
      } else {
        result.colors.push('grey');
      }
    });
  
    return result;
  };


module.exports = { selectRandomWord, isWordInList, checkLetters };
