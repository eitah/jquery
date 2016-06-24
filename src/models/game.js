
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
