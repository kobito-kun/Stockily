import { Stock } from "../models/stock.model.js";
import {
  getTokenUser,
  authenticateToken
} from "../utils/utils.js";

export const getSymbols = (req, res) => {
  if(authenticateToken(req, res)){
    Stock.find({username: getTokenUser(req, res)}, (err, result) => {
      res.json(result)
    })
  }else{
    res.json([])
  }
}

export const addSymbol = (req, res) => {
  const {symbol, shares, username} = req.body;
  if(authenticateToken(req, res)){
    const newStock = new Stock({
      symbol: symbol,
      shares: shares,
      username: username
    })
    newStock.save()
    res.json(newStock)
  }else{
    res.json({"status": "Failure"})
  }
}