import React, {useState, useEffect, useRef} from 'react'
// import axios from 'axios';
import Slide from 'react-reveal/Slide';

import Stock from '../components/Stock';
import Nav from '../components/Nav';

import {seePriceChange, randomNumberGenerator} from '../util/index';
import coolImages from 'cool-images';

function Stocks() {
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState();
  const [warning, setWarning] = useState("");
  const inputStock = useRef(null)

  const fetchData = () => {
    const input = inputStock.current.value
    if(input.length > 0){
      setWarning("")
      setSearch(true)
      // Disabled for Query Reasons
      // axios.get(`https://stockily-backend.herokuapp.com/api/${input}`).then(data => {
        const object = {
          price: {
            exchangeName: "NASDAQGS",
            symbol: input,
            longName: `${input} .Inc`,
            currencySymbol: '$',
            regularMarketPrice: randomNumberGenerator(50, 1000),
            regularMarketOpen: randomNumberGenerator(50, 1000)
          }
        }
        setResults(object);
        setSearch(false)
      // })
    }else{
      setWarning("Please input something.")
    }
  }

  useEffect(() => {
    document.title = "Stockify - Stocks";
    // eslint-disable-next-line
  }, [])

  return (
    <div className="min-h-screen darker-bg">
      <Nav />
      <div className="flex justify-center items-center flex-col p-4">
          <h1 className="text-4xl text-white font-thin border-b pb-2">Stocks</h1>
          <span className="text-xs text-red-600 font-bold text-center mt-2">{warning.length > 0 ? warning : ""}</span>
          <div className="flex lg:flex-row flex-col">
            <input onChange={() => {
              if(inputStock.current.value.length === 0){
                setResults(null)
              }
            }} ref={inputStock} className="my-4 px-8 py-4 dark-bg shadow-lg focus:border-gray-700 duration-300 outline-none border-b border-white text-white" placeholder="Search Your Own" />
            <button onClick={() => fetchData()} className="border-b border-white py-2 px-4 lg:my-4 hover:bg-gray-700 duration-300 font-thin text-white shadow-lg mx-2 dark-bg">Search</button>
          </div>
      </div>
      <div className="text-white flex justify-center items-center">
      {
        results !== undefined && results
        ?
        <Slide bottom duration={700}>
          <div className="shadow-lg rounded-lg dark-bg p-6 text-center select-none">
            {results.length !== 0 
              ?
              <div className="flex flex-col m-4">
                <img src={coolImages.one(400, 400)} alt={inputStock.current.value} className="w-16 rounded-full shadow-lg filter blur-sm mx-auto mb-4" />
                <h3 className="font-semibold">{results["price"]["exchangeName"].replace("GS", "").toUpperCase()} : {results["price"]["symbol"]}</h3>
                <span>{results["price"]["longName"]}</span>
                <span className="font-bold">{results["price"]["currencySymbol"]}{results["price"]["regularMarketPrice"]}</span>
                <span className="text-xs">{seePriceChange(results["price"]["regularMarketPrice"], results["price"]["regularMarketOpen"])}</span>
              </div>
              :
              <div className="flex flex-col">
                <span className="text-lg">Nothing found on the server.</span>
                <span className="text-xs text-gray-500">Please search for another or valid symbol.</span>
              </div>
            }
          </div>
        </Slide>
        :
        <div className="duration-500">
          {search
          ?
            <svg className="animate-spin h-20 w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          :
            <Slide bottom duration={700}>
              <div>
                <h3 className="text-xl font-thin uppercase text-center mb-4">Popular stocks</h3>
                <div className="flex flex-wrap justify-center items-center">
                  <Stock symbol={'AAPL'} image={"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"} />
                  <Stock symbol={'GOOG'} image={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"} />
                  <Stock symbol={'TSLA'} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png"} />
                  <Stock symbol={'MSFT'} image={"http://temperfield.com/wp-content/uploads/2017/09/Microsoft-Logo-icon-png-Transparent-Background.png"} />
                  <Stock symbol={'AMZN'} image={"https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png"} />
                  <Stock symbol={'GM'} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/General_Motors_%282021%29.svg/1200px-General_Motors_%282021%29.svg.png"} />
                </div>
              </div>
            </Slide>
          }
        </div>
      }
      </div>
    </div>
  )
}

export default Stocks