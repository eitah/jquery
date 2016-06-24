/* eslint-disable no-underscore-dangle */

// import 'Hangman' from '../Hangman';

function ViewGame(game) {
  this.id = game._id;
  this.name = game.name;
  this.createdAt = game.createdAt.toLocaleDateString();
  this.timeRemaining = game.timeRemaining;
  this.wordLength = game.wordPicked.length;
  this.guesses = game.guesses;
  this.didWin = game.didWin;

  if (this.guesses.length === 0) {
    this.rightLetters = [];
  }
  // else {
  //   this.rightLetters = Hangman.getRightLetters(game, letterGuessed);
  // }
}

module.exports = ViewGame;
