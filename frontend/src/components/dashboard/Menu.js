import React, {useState, useEffect} from 'react'

function Menu() {

  const [item, setItem] = useState([
    "AAPL", "TSLA", "COST", "AMZN"
  ]);

  useEffect(() => {
    setInterval(() => {
      setItem([...item])
    }, 500)
    // eslint-disable-next-line
  }, [])


  return (
    <div className="p-10 w-full overflow-y-scroll">
      <div className="flex justify-between items-center lg:flex-row flex-col ">
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2 items-center flex justify-center">
          cgart
        </div>
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2"></div>
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2"></div>
      </div>
      <table className="w-full darkish-bg rounded-lg shadow-lg border-separate p-4 text-center mt-8">
        <thead>
          <tr>
            <th className="border-b border-white">SYMBOL</th>
            <th className="border-b border-white">PRICE</th>
            <th className="border-b border-white">CHANGE</th>
            <th className="border-b border-white">BALANCE</th>
          </tr>
        </thead>
        <tbody>
          {item.map(x => (
            <tr>
              <td className="px-4 py-8">{x}</td>
              <td>${Number(Math.random() * 100).toFixed(2)}</td>
              <td>+${Number(Math.random() * 10).toFixed(2)}</td>
              <td>${Number(Math.random() * 10000).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Menu
