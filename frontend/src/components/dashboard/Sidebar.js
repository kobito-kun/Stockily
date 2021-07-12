import React from 'react'

function Sidebar({clicked, setClicked}) {
  return (
    <div className="h-screen w-60 darkish-bg flex justify-left p-8 flex-col">
      <h1 className="text-4xl text-gray-100 font-thin">Stockily</h1>
      <div className="flex flex-col justify-center items-left mt-10">
        <h3 onClick={() => setClicked("Home")} className={`cursor-pointer border-b ${clicked === "Home" ? "border-purple-600" : "border-white"} text-xl my-4 font-thin hover:border-gray-600 duration-300`}>Dashboard</h3>
        <h3 onClick={() => setClicked("Account")} className={`cursor-pointer border-b ${clicked === "Account" ? "border-purple-600" : "border-white"} text-xl my-4 font-thin hover:border-gray-600 duration-300`}>Account</h3>
      </div>
    </div>
  )
}

export default Sidebar
