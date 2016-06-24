
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hangmanSchema = new Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  timeRemaining: { type: Number, default: 60 },
  wordPicked: { type: String, default: 'Goose' },
  guesses: { type: Array, default: [] },
  didWin: { type: Boolean, default: null },
});

module.exports = mongoose.model('Hangman', hangmanSchema);

Hangman.prototype.getRightLetters = (myGame) => {
  const rightLetters = '_' * myGame.wordPicked.length; // _ _ _ _ _ _

  if (rightLetters > 0) {
    for (index in rightLetters) {
      for (guess of guesses) {
        if (guess === myGame.wordpicked[index]) {
          rightLetters[index] = myGame.wordpicked[index];
        }
      }
    }
  }
  return rightLetters.strToArray;
};
