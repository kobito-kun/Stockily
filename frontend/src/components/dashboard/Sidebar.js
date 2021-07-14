import React from 'react'
import { useHistory } from 'react-router'
import Slide from 'react-reveal/Slide';

function Sidebar({clicked, setClicked, reveal, setReveal}) {

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("loginToken")
    history.push("/")
  }

  return (
    <Slide left>
      <div className={`z-20 shadow-lg lg:w-auto w-screen h-screen lg:static fixed ${reveal ? "flex" : "hidden"} lg:w-60 darkish-bg justify-left p-8 flex-col`}>
        <h1 onClick={() => history.push("/")} className="cursor-pointer hover:text-purple-400 duration-300 text-4xl text-gray-100 font-thin">Stockily</h1>
        <div className="flex flex-col justify-center items-left mt-10">
          <i onClick={() => setReveal(!reveal)} className="lg:hidden cursor-pointer absolute text-2xl bottom-10 fas fa-times right-2/4 left-2/4"></i>
          <h3 onClick={() => setClicked("Home")} className={`cursor-pointer border-b ${clicked === "Home" ? "border-purple-600" : "border-white"} text-xl my-4 font-thin hover:border-gray-600 duration-300`}>Dashboard</h3>
          <h3 onClick={() => setClicked("Account")} className={`cursor-pointer border-b ${clicked === "Account" ? "border-purple-600" : "border-white"} text-xl my-4 font-thin hover:border-gray-600 duration-300`}>Account</h3>
          <h3 onClick={() => logout()} className={`cursor-pointer border-b border-white text-xl my-4 font-thin hover:border-gray-600 duration-300`}>Logout</h3>
        </div>
      </div>
    </Slide>
  )
}

export default Sidebar
