/* eslint-disable new-cap, no-console */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';
import ViewGame from '../models/viewGame';

// new game
router.post('/', (req, res) => {
  const myGame = new Game(req.body);
  console.log('games obj in db is ', myGame);
  myGame.save(() => {
    const rightLetters = myGame.getRightLetters();
    const cleanedGame = new ViewGame(myGame);
    res.send(cleanedGame, rightLetters);
  });
});


// make a guess on game ID with myGuess
router.put('/:id/:myGuess', (req, res) => {
  Game.findById(req.params.id, (err1, game) => {
    const o = {}; // o is an object
    const n = req.body.num * 1; // numeric not string

    if (n) {
      o.heads = req.body.num + 1;
    } else {
      o.tails = game.tails + 1;
    }

    game.update(o, () => {
      Game.findById(req.params.id, (err, game1) => {
        res.send(game1);
      });
    });
  });
});
