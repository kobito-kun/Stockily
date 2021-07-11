import React, {useState, useEffect} from 'react'
const yahooFinance = require("yahoo-finance")

function Stocks() {
// eslint-disable-next-line
  const [results, setResults] = useState(null);
  const [input, setInput] = useState("owoowowow");

  const fetchData = () => {
    if(input.length > 2){
      yahooFinance.quote({
        symbol: 'TSLA',
        modules: ['price', 'summaryDetail']
      }, (err, quote) => {
        console.log(quote)
      })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [input])

  useEffect(() => {
    document.title = "Stockify - Stocks";
    fetchData()
    // eslint-disable-next-line
  }, [])



  return (
    <div className="min-h-screen darker-bg">
      <div className="flex justify-center items-center flex-col p-4">
          <h1 className="text-4xl text-white font-thin border-b pb-2">Stocks</h1>
          <input onChange={(e) => setInput(e.target.value)} className="my-4 px-8 py-4 dark-bg shadow-lg focus:border-gray-700 duration-300 outline-none border-b border-white text-white" placeholder="AAPL" />
      </div>
      <div className="text-white">
      {
        results !== undefined && results
        ?
        "Stuff"
        :
        "Nothing"
      }
      </div>
    </div>
  )
}

export default Stocks
