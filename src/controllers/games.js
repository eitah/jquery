/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  const g = new Game(req.body);
  console.log('games obj is ', g);
  g.save(() => {
    res.send(g);
  });
});

router.put('/:id/flip', (req, res) => {
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
