import React, {useState} from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Menu from '../../components/dashboard/Menu'

function Index() {

  const [clicked, setClicked] = useState("Home")

  return (
    <div className="darker-bg max-h-screen text-white flex">
      <Sidebar clicked={clicked} setClicked={setClicked} />
      <Menu />
    </div>
  )
}

export default Index
