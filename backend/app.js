const express = require("express");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

app.get("/", (req, res) => {
  res.json({"status": "success"})
})

app.get("/api/:symbol", (req, res) => {
  const {symbol} = req.params;
  yahooFinance.quote({
    symbol: symbol.toUpperCase(),
    module: ['price', 'summaryDetail']
  }, (err, quotes) => {
    if(err) return console.error(err);
    res.json(quotes)
  })
})

app.listen(port, () => console.log(`Listening at port ${port}`))