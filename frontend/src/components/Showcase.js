import React from 'react'
import renderHTML from 'react-render-html';

function Showcase({left, img, title, description, button}) {
  return (
    <div className={`grid select-none lg:grid-cols-2 ${left ? "darkish-bg" : ""} p-4`}>
      {left ? 
      <>
        <div className="p-4 items-center justify-center flex">
          <img src={img} alt="Community" className="w-2/4 hover:scale-105 transform duration-300" />
        </div>
        <div className="p-4 flex justify-center lg:items-start items-center flex-col">
          <h3 className="text-white text-4xl font-thin my-2 lg:text-left text-center">{title}</h3>
          <p className="text-gray-100 lg:text-left text-center lg:w-96">{description}</p>
          <button className="text-white hover:bg-gray-800 duration-300 darker-bg px-4 py-2 mt-2 w-48 shadow-lg">{renderHTML(button)}</button>
        </div>
      </>
      :
      <>
        <div className="p-4 lg:order-none order-last flex justify-center lg:items-end items-center flex-col">
          <h3 className="text-white text-4xl font-thin my-2 lg:text-right text-center">{title}</h3>
          <p className="text-gray-100 lg:text-right text-center lg:w-96">{description}</p>
          <button className="text-white hover:bg-gray-800 duration-300 dark-bg px-4 py-2 mt-2 w-48 shadow-lg">{renderHTML(button)}</button>
        </div>
        <div className="p-4 items-center justify-center flex">
          <img src={img} alt="Community" className="w-2/4 hover:scale-105 transform duration-300" />
        </div>
      </>}
    </div>
  )
}

export default Showcase
