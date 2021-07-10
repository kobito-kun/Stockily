import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Stocks() {

  const [results, setResults] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = () => {
    if(input.length > 2){
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${input.toUpperCase()}&interval=5min&apikey=L15Y13FOAAGMAX87`).then((data) => setResults(data.data))
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [input])

  useEffect(() => {
    document.title = "Stockify - Stocks";
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
        <>
          {results !== undefined ? results["Meta Data"]["2. Symbol"] : "Nothing"}
          {results !== undefined ? JSON.stringify(results[Object.keys(results)[1]]) : "Nothing"}
        </>
        :
        "Nothing"
      }
      </div>
    </div>
  )
}

export default Stocks
