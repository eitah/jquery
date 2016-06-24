/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';
import ViewGame from '../models/viewGame';
import Hangman from '../models/Hangman';

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});

router.get('/twitch', (req, res) => {
  res.render('home/twitch');
});

router.get('/coins', (req, res) => {
  res.render('home/coins');
});

router.get('/hangman', (req, res) => {
  res.render('home/hangman');
});


router.post('/hangman/newGame', (req, res) => {
  console.log('hangman is running');
  const myGame = new Game(req.body);
  console.log('games obj in db is ', myGame);
  myGame.save((err) => {
    if (err) { console.log(err); }
    const cleanedGame = new ViewGame(myGame);
    const rightLetters = [];
    console.log('cleaned game', cleanedGame);
    res.send({ cleanedGame, rightLetters });
  });
});


// make a guess on game ID with myGuess
router.put('/hangman/:id/:myGuess', (req, res) => {
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
