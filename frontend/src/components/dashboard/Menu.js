import React, {useState, useEffect, useRef} from 'react'
import Stock from '../Stock';
import Slide from 'react-reveal/Slide';
import axios from 'axios'

function Menu() {

  const stockInput = useRef(null);
  
  const [item, setItem] = useState([]);

  const addStock = () => {
    
    const currentValue = stockInput.current.value;
    const currentShare = 3;
    const authToken = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    
    const headers = {
      headers: {
        "authorization": `Bearer ${authToken}`
      }
    };
    
    const object = {
      symbol: currentValue,
      shares: currentShare,
      username: username
    }

    axios.put("https://stockily-backend.herokuapp.com/api/symbol", object, headers).then(data => fetchStocks()).then(stockInput.current.value = "")
  }

  const fetchStocks = () => {
    const authToken = localStorage.getItem("token");
    const headers = {
      headers: {
        "authorization": `Bearer ${authToken}`
      }
    };
    axios.get(`https://stockily-backend.herokuapp.com/api/symbols/`, headers).then(data => setItem(data.data))
  }

  useEffect(() => {
    fetchStocks()
    // setInterval(() => {
    //   setItem([...item])
    // }, 500)
    // eslint-disable-next-line
  }, [])

  return (
    <Slide right duration={700}>
      <div className="p-10 w-full min-h-screen overflow-y-scroll">
        <div>
          <div className="flex justify-end mb-4 lg:flex-row flex-col">
            <input ref={stockInput} placeholder="Add a Stock" className="lg:mx-0 mx-2 lg:my-0 my-2 rounded-lg shadow dark-bg px-4 py-2 outline-none" />
            <button onClick={() => addStock()} className="dark-bg px-4 py-2 rounded-lg shadow mx-2">Add</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {item.length > 0 ?
          item.map(x => (
            <Slide bottom duration={1000}>
              <Stock symbol={x.symbol} />
            </Slide>
          ))
          :
          <div className="flex flex-col mt-20 justify-center items-center">
            <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          }
        </div>
      </div>
    </Slide>
  )
}

export default Menu
