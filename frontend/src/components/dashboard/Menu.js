import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';

function Menu() {

  const [item, setItem] = useState([
    "AAPL", "TSLA", "COST", "AMZN"
  ]);

  const [options, setOptions] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setInterval(() => {
      setItem([...item])
    }, 500)
    // eslint-disable-next-line
  }, [])

  const getRandomValues = () => {
    return [Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20]
  }

  useEffect(() => {
    setData({
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: 'Stock',
          data: getRandomValues(),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
      ],
    });

    setOptions({
        animation: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      })
    // eslint-disable-next-line
  }, [])


  return (
    <div className="p-10 w-full overflow-y-scroll">
      <div className="flex justify-between items-center lg:flex-row flex-col ">
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2 items-center flex justify-center">
          <Line data={data} options={options} />
        </div>
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2 items-center flex justify-center">
          <Line data={data} options={options} />
        </div>
        <div className="darkish-bg w-72 h-48 rounded-lg shadow m-2 items-center flex justify-center">
          <Line data={data} options={options} />
        </div>
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
