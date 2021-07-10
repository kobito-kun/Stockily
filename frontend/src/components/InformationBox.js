import React from 'react'

function InformationBox({icon, title, description}) {
  return (
    <div className="dark-bg select-none hover:shadow-2xl duration-300 transform hover:-translate-y-4 w-full lg:w-96 shadow-lg rounded-lg m-2 p-4">
      <div className="rounded-full mx-auto h-16 w-16 darker-bg flex justify-center items-center">
        <i className={`${icon} text-white text-3xl `}></i>
      </div>
      <h4 className="text-white py-2 text-center text-3xl font-thin">{title}</h4>
      <p className="text-gray-100 text-center">{description}</p>
    </div>
  )
}

export default InformationBox
