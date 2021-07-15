const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema({
  username: String,
  email: String,
  password: String,
  date: {
    default: Date.now,
    type: Date
  }
});

module.exports.Client = mongoose.model('Client', Client);