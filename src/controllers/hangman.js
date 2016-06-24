/* eslint-disable new-cap, no-console */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';
import ViewGame from '../models/viewGame';
import Hangman from '../models/Hangman';

// new game
router.post('/', (req, res) => {
  console.log('hangman is running');
  const myGame = new Game(req.body);
  console.log('games obj in db is ', myGame);
  myGame.save(() => {
    const rightLetters = [];
    const cleanedGame = new ViewGame(myGame);
    res.send(cleanedGame, rightLetters);
  });
});


// make a guess on game ID with myGuess
router.put('/:id/:myGuess', (req, res) => {
  Game.findById(req.params.id, (err1, game) => {
    const guesses = req.body.guesses; // array of guesses
    const myGuess = req.params.myGuess;
    guesses.append(myGuess);

    const o = { guesses };

    game.update(o, () => {
      Game.findById(req.params.id, (err, game1) => {
        const solvedWord = Hangman.getRightLetters(game1, req.params.myGuess);
        const cleanedGame = new ViewGame(game1);
        res.send(cleanedGame, solvedWord);
      });
    });
  });
});
