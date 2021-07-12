import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Stocks() {
  const [results, setResults] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = () => {
    if(input.length > 2){
      axios.get(`https://stockily-backend.herokuapp.com/api/${input}`).then(data => {
        if(data.data["price"]["symbol"].toUpperCase() === input.toUpperCase()){
          setResults(data.data)
        }
      })
    }
  }

  const checkLength = () => {
    if(input.length === 0){
      setResults(null)
    }
  }

  const seePriceChange = (first, second) => {
    const currentValue = Number(first - second).toFixed(2);
    if(currentValue > 0){
      return (
        <span className="text-green-500">
          🚀 +${currentValue} 🚀
        </span>
      )
    }else{
      return (
        <span className="text-red-600">
          ❗ -${Math.abs(currentValue)} ❗
        </span>
      )
    }    
  }

  useEffect(() => {
    fetchData();
    checkLength();
    // eslint-disable-next-line
  }, [input, setInput])

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
      <div className="text-white flex justify-center items-center">
      {
        results !== undefined && results
        ?
        <div className="shadow-lg rounded-lg dark-bg p-6 text-center grid lg:grid-cols-2 select-none">
          <div className="flex flex-col m-4">
            <h3 className="font-semibold">{results["price"]["exchangeName"].replace("GS", "").toUpperCase()} : {results["price"]["symbol"]}</h3>
            <span>{results["price"]["longName"]}</span>
            <span className="font-bold">{results["price"]["currencySymbol"]}{results["price"]["regularMarketPrice"]}</span>
            <span className="text-xs">{seePriceChange(results["price"]["regularMarketPrice"], results["price"]["regularMarketOpen"])}</span>
          </div>
          <div className="m-4 flex justify-center items-center">
            <button className="rounded-lg shadow-lg darkish-bg px-4 py-2 font-thin hover:bg-gray-800 duration-300">More Information</button>
          </div>
        </div>
        :
        <div className="duration-500">
          {input.length > 0
          ?
            <svg class="animate-spin h-20 w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          :
            <div className="text-xl text-white font-thin animate-pulse">
              Awaiting Input...
            </div>
          }
        </div>
      }
      </div>
    </div>
  )
}

export default Stocks