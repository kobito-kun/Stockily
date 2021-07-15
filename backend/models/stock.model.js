const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stock = new Schema({
  symbol: String,
  shares: Number,
  username: String,
  date: {
    default: Date.now,
    type: Date
  }
});

module.exports.Stock = mongoose.model('Stock', Stock);