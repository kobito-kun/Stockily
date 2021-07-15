import React, {useState, useRef} from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

function Login() {

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const history = useHistory()
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const currentUsername = usernameInput.current.value;
    const currentPassword = passwordInput.current.value;

    const object = {
      username: currentUsername,
      password: currentPassword
    }

    axios.post("http://localhost:5000/api/login", object).then(data => {
      const responseObject = data.data;
      setLoading(false)
      if(responseObject.status === "Authenticated"){
        localStorage.setItem("token", responseObject.token)
        localStorage.setItem("username", responseObject.username)
        history.push("/dashboard")
      }else{
        setWarning(responseObject.status)
      }
    })
  }

  return (
    <div className="min-h-screen darker-bg flex flex-col justify-center items-center">
      <div className="lg:w-96 flex-col flex darkish-bg lg:py-16 py-24 lg:px-6 px-10 rounded-lg shadow-xl  ">
        <h3 className="font-thin text-5xl text-white text-center">Stockily</h3>
        <span className="font-bold text-white text-center my-2">Login</span>
        <span className="text-center text-red-600">
          {warning.length > 0 ? warning : ""}
        </span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input required ref={usernameInput} placeholder="Username" className="focus:ring-2 px-4 py-2 shadow-lg outline-none darker-bg m-1" />
          <input required type="password" ref={passwordInput} placeholder="Password" className="focus:ring-2 px-4 py-2 shadow-lg outline-none darker-bg m-1" />
          <button className="text-white px-4 py-2 m-1 darker-bg" type="submit">
              {loading ?
                <svg className="animate-spin h-10 w-10 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                :
                "Login"
              }
          </button>
        </form>
        <Link to="/signup" className="text-gray-300 text-center">
          Create an account here
        </Link>
      </div>
    </div>
  )
}

export default Login
