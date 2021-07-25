import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  symbol: String,
  shares: Number,
  username: String,
  date: {
    default: Date.now,
    type: Date
  }
});

export const Stock = mongoose.model('Stock', StockSchema);