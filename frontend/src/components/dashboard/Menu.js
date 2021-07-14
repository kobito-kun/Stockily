import React, {useState, useEffect, useRef} from 'react'
import Stock from '../Stock';
import Slide from 'react-reveal/Slide';

function Menu() {

  const stockInput = useRef(null);
  
  const [item, setItem] = useState([
    "AAPL", "TSLA", "COST", "AMZN"
  ]);

  const addStock = () => {
    const currentValue = stockInput.current.value;
    setItem([...item, currentValue])
    stockInput.current.value = "";
  }

  useEffect(() => {
    // setInterval(() => {
    //   setItem([...item])
    // }, 500)
    // eslint-disable-next-line
  }, [])

  return (
    <Slide right duration={700}>
      <div className="p-10 w-full overflow-y-scroll">
        <div>
          <div className="flex justify-end mb-4 lg:flex-row flex-col">
            <input ref={stockInput} placeholder="Add a Stock" className="lg:mx-0 mx-2 lg:my-0 my-2 rounded-lg shadow dark-bg px-4 py-2 outline-none" />
            <button onClick={() => addStock()} className="dark-bg px-4 py-2 rounded-lg shadow mx-2">Add</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {item.map(x => (
            <Stock symbol={x} />
          ))}
        </div>
      </div>
    </Slide>
  )
}

export default Menu
