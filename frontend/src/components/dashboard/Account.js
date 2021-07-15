import React, {useEffect, useRef, useState} from 'react';
import Slide from 'react-reveal/Slide';
import axios from 'axios'

function Account() {

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const emailInput = useRef(null);
  const [loading, setLoading] = useState(true);
  

  const fetchProfile = () => {
    const username = localStorage.getItem("username");
    const authToken = localStorage.getItem("token");
    const headers = {
      headers: {
        "authorization": `Bearer ${authToken}`
      }
    };
    axios.get(`https://stockily-backend.herokuapp.com/api/profile/${username}`, headers).then(data => {
      setLoading(false)
      usernameInput.current.value = data.data.username;
      emailInput.current.value = data.data.email;      
    })
  }

  const updateProfile = (e) => {
    e.preventDefault()
    setLoading(true)
    const authToken = localStorage.getItem("token");
    const headers = {
      headers: {
        "authorization": `Bearer ${authToken}`
      }
    };
    const object = {
      username: usernameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value
    }
    axios.put(`https://stockily-backend.herokuapp.com/api/profile`, object, headers).then(data => {
      fetchProfile()
    })
  }

  const deleteAccount = () => {
    if(window.confirm("Are you SURE you want to delete your account?")){
      window.confirm("Well too bad I'm not deleting your account.")
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return ( 
    <Slide duration={700} right>
      <div className="p-10 w-full h-screen justify-center items-center flex">
        <div className="w-full h-auto dark-bg rounded-lg shadow-lg p-10 flex items-center flex-col">
          <div className="lg:w-96">
            {loading 
            ?
              <svg className="animate-spin h-10 w-10 text-white mx-auto my-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>            
            :
            <>
              <img src={"https://unsplash.it/400/400?image=659"} alt="Profile" className="rounded-full shadow-lg w-40 h-40 bg-gray-600 select-none mx-auto mb-4" />
              <form onSubmit={(e) => updateProfile(e)}>
                <div className="flex lg:w-96 my-1">
                  <input readOnly ref={usernameInput} className="cursor-not-allowed mr-1 w-full outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Username" />
                  <input ref={passwordInput} type="password" className="w-full outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Password" />
                </div>
                <input required ref={emailInput} type="email" className="w-full my-1 outline-none px-4 py-2 darker-bg rounded-lg shadow" placeholder="Email" />
                <button type="submit" className="hover:bg-blue-800 duration-300 bg-blue-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Update Account<i className="fas fa-user"></i></button>
              </form>
              <button className="cursor-not-allowed hover:bg-blue-800 duration-300 bg-blue-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Download Data <i className="fas fa-file-download"></i></button>
              <button onClick={() => deleteAccount()} className="hover:bg-red-800 duration-300 bg-red-600 text-white rounded-lg w-full py-2 shadow font-bold my-1">Delete Account <i className="fas fa-trash"></i></button>
            </>
            }
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default Account

