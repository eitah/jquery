/* eslint-disable no-underscore-dangle */

function ViewGame(game) {
  this.id = game._id;
  this.name = game.name;
  this.createdAt = game.createdAt.toLocaleDateString();
  this.timeRemaining = game.timeRemaining;
  this.wordLength = game.wordPicked.length();
  this.guesses = game.guesses;
  this.didWin = game.didWin;

  const lettersArray = game.word.toArray();



  this.rightLetters = lettersRight.join(',');
}

module.exports = ViewGame;
