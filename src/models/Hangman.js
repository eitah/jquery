

function Hangman() {
}

Hangman.getRightLetters = (game, letterGuessed) => {
  const solvedWord = ('_' * game.wordPicked.length).strToArray;

  console.log('solvedWord', solvedWord, 'letterguessed', letterGuessed);
  return solvedWord;
};

module.exports = Hangman;

  // // not sure if this is the right syntax
  //   let letterGuessed, i, j;
  //   j = 0; // j indicates the position where the search should begin
  //   i = indexOf(letterGuessed, j); // Hel
  //   while (i >= 0) {
  //     solvedWord[i] = letterGuessed;
  //     j = i++;
  //   }
  //   letterGuessed = // somehow need to wait for next letter to be input
  //
  // }


//   const rightLetters = '_' * myGame.wordPicked.length; // _ _ _ _ _ _
//   if (rightLetters > 0) {
//     for (index in rightLetters) {
//       for (guess of guesses) {
//         if (guess === myGame.wordpicked[index]) {
//           rightLetters[index] = myGame.wordpicked[index];
//         }
//       }
//     }
//   }
//   return rightLetters.strToArray;
// };
