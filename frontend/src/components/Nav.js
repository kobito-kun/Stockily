import React from 'react'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Slide top duration={400}>
      <div className="w-full h-auto darkish-bg p-4 shadow-lg flex justify-between text-white">
        <Link to="/">
          <div className="font-thin">
            Stockily
          </div>
        </Link>
        <div className="font-thin">
          <Link to="/">
            <span className="mx-1">Home</span>
          </Link>
          <Link to="/dashboard">
            <span className="mx-1">Dashboard</span>
          </Link>
        </div>
      </div>
    </Slide>
  )
}

export default Nav
