import React, {useEffect, useState} from 'react'
import {seePriceChange, randomNumberGenerator} from '../util/index';
import coolImages from 'cool-images';
// import axios from 'axios'

function Stock({symbol, image}) {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    // Disabled for Query Limitaions
    // axios.get(`https://stockily-backend.herokuapp.com/api/${symbol}`).then(data => setData(data.data))
    const object = {
      price: {
        exchangeName: "NASDAQGS",
        symbol: symbol,
        longName: `${symbol} .Inc`,
        currencySymbol: '$',
        regularMarketPrice: randomNumberGenerator(50, 1000),
        regularMarketOpen: randomNumberGenerator(50, 1000)
      }
    }
    setData(object)
  // eslint-disable-next-line
  }, [])

  return (
    <div className="dark-bg p-4 rounded-lg shadow-lg flex items-center justify-center flex-col select-none hover:-translate-y-2 transform duration-300 m-2 w-60">
      {data !== undefined && data 
      ?
      <div className="flex flex-col m-4 text-center">
        <img src={coolImages.one(400, 400)} alt={symbol} className="w-16 h-16 bg-gray-600 rounded-full shadow-lg filter blur-sm mx-auto mb-4" />
        <h3 className="font-semibold">{data["price"]["exchangeName"].replace("GS", "").toUpperCase()} : {data["price"]["symbol"]}</h3>
        <span>{data["price"]["longName"]}</span>
        <span className="font-bold">{data["price"]["currencySymbol"]}{data["price"]["regularMarketPrice"]}</span>
        <span className="text-xs">{seePriceChange(data["price"]["regularMarketPrice"], data["price"]["regularMarketOpen"])}</span>
      </div>
      : 
      <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      }
    </div>
  )
}

export default Stock
