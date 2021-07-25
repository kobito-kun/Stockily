import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  username: String,
  email: String,
  password: String,
  date: {
    default: Date.now,
    type: Date
  }
});

export const Client = mongoose.model('Client', ClientSchema);