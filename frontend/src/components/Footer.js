import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="dark-bg text-white text-xs px-4 py-2 flex flex-wrap justify-end cursor-pointer">
      <p onClick={() => window.location.href = "https://kobi.lol"} className="mx-2">@Kobi 2021</p>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/stocks" className="mx-2">Search Stocks</Link>
    </div>
  )
}

export default Footer
