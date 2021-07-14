import React, {useEffect, useRef} from 'react';
// import coolImages from 'cool-images';
import Slide from 'react-reveal/Slide';

function Account() {

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const emailInput = useRef(null);

  useEffect(() => {
    usernameInput.current.value = "Kobi Mo";
    emailInput.current.value = "ito.kobilol@gmail.com"
  }, [])

  return ( 
    <Slide duration={700} right>
      <div className="p-10 w-full h-screen justify-center items-center flex">
        <div className="w-full h-auto dark-bg rounded-lg shadow-lg p-10 flex items-center flex-col">
          <div className="lg:w-96">
            <img src={"https://unsplash.it/400/400?image=659"} alt="Profile" className="rounded-full shadow-lg w-40 h-40 bg-gray-600 select-none mx-auto mb-4" />
            <div className="flex lg:w-96 my-1">
              <input ref={usernameInput} className="mr-1 w-full outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Username" />
              <input ref={passwordInput} type="password" className="w-full outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Password" />
            </div>
            <input ref={emailInput} className="w-full my-1 outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Email" />
            <button className="bg-blue-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Update Account<i className="fas fa-user"></i></button>
            <button className="bg-blue-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Download Data <i className="fas fa-file-download"></i></button>
            <button className="bg-red-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Delete Account <i className="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default Account

