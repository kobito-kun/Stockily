const express = require("express");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const { Client } = require("./models/user.model");
const { Stock } = require("./models/stock.model");

require("dotenv/config")
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

// Initial Functions

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '604800s' });
}

const authenticateToken = (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  let returnThis;

  if (token == null) return false;

  jwt.verify(token, String(process.env.TOKEN_SECRET), (err, user) => {
    if (err) return returnThis = false;
    return returnThis = true;
  })
  return returnThis
}

const getTokenUser = (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  let returnThis;

  if (token == null) return "";

  jwt.verify(token, String(process.env.TOKEN_SECRET), (err, user) => {
    if (err) return returnThis = "";
    return returnThis = user.username;
  })
  return returnThis  
}

app.get("/", (req, res) => {
  Client.findOne({}, (err, result) => {
    res.json(result)
  })
})

app.get("/api/symbols/", (req, res) => {
  if(authenticateToken(req, res)){
    Stock.find({username: getTokenUser(req, res)}, (err, result) => {
      res.json(result)
    })
  }else{
    res.json([])
  }
})

app.get("/api/symbol/:symbol", (req, res) => {
  const {symbol} = req.params;
  yahooFinance.quote({
    symbol: symbol.toUpperCase(),
    module: ['price', 'summaryDetail']
  }, (err, quotes) => {
    if(err) {res.json([]); return console.log(err)};
    res.json(quotes)
  })
})

app.get("/api/profile/:username", (req, res) => {
  if(authenticateToken(req, res)){
    Client.findOne({username: getTokenUser(req, res)}, (err, result) => {
      res.json(result)
    })
  }else{
    res.json([])
  }
})

app.put("/api/profile", (req, res) => {
  const {username, password, email} = req.body;
  if(authenticateToken(req, res)){
    Client.findOne({username: getTokenUser(req, res)}, (err, result) => {
      if(err) return res.json(err);
      result.password = password !== undefined ? password : result.password,
      result.email = email
      result.save()
      res.json(result)
    })
  }else{
    res.json([])
  }
})

app.put("/api/symbol", (req, res) => {
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
})

app.post("/api/login", (req, res) => {
  const {username, password} = req.body;
  Client.findOne({username: username}, (err, result) => {
    if(err) return console.log(err);
    if(result !== null){
      if(password === result.password){
        const token = generateAccessToken({ username: username });
        const objectToReturn = {
          "status": "Authenticated",
          "token": token,
          "username": username
        }
        res.json(objectToReturn)
      }else{
        res.json({"status": "Incorrect Credentials"})
      }
    }else{
      res.json({"status": "Incorrect Credentials"})
    }
  })
})

app.post("/api/signup", (req, res) => {
  const {username, email, password} = req.body;
  const newClient = new Client({
    username: username,
    email: email,
    password: password
  })
  newClient.save()
  res.json({
    "status": "User Created",
    "username": username,
    "token": generateAccessToken({username: username})
  })
})

app.listen(port, () => console.log(`Listening at port ${port}`))