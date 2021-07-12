import React from 'react'
import ServerIMG from '../assets/server.webp'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="min-w-screen grid lg:grid-cols-2 h-screen p-10 select-none bg-image">
      <div className="flex justify-center lg:items-start items-center flex-col lg:p-10 lg:ml-40 z-10">
        <h1 className="text-white text-7xl font-semibold mb-2 text-left">Stockily</h1>
        <span className="text-gray-100 mb-2 lg:text-left text-center">Stocks prices. Anywhere. Immediantly. Rapidly.</span>
        <div>
          <Link to="/signup">
            <button className="px-4 py-2 outline-none m-1 rounded-lg shadow dark-bg text-white font-thin hover:bg-gray-600 duration-300">Sign Up</button>
          </Link>
          <Link to="/stocks">
            <button className="px-4 py-2 outline-none m-1 rounded-lg shadow dark-bg text-white font-thin hover:bg-gray-600 duration-300">Browse Stocks</button>
          </Link>
        </div>
      </div>
      <div className="lg:mr-40 right-0 top-0 bottom-0 left-0 lg:opacity-100 opacity-25 z-5 lg:static absolute flex justify-center items-center">
        <img src={ServerIMG} alt="Server Img" className="w-4/4" />
      </div>
      <i className="fas fa-caret-down absolute text-2xl text-white animate-bounce bottom-4 right-2/4 left-2/4"></i>
    </div>
  )
}

export default Hero
