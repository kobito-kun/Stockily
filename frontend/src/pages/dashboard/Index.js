import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Menu from '../../components/dashboard/Menu'
import Account from '../../components/dashboard/Account'

function Index() {

  const [clicked, setClicked] = useState("Home")
  const [reveal, setReveal] = useState(false);
  const [resizeHide, setResizeHide] = useState(false);

  useEffect(() => {
    function handleResize() {
      const {innerWidth: width} = window;
      setReveal(width < 760 ? false : true);
      setResizeHide(width < 760 ? false : true);
    }
    handleResize()
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="darker-bg max-h-screen text-white flex overflow-x-hidden">
      <Sidebar clicked={clicked} setClicked={setClicked} reveal={reveal} setReveal={setReveal} />
      <div className={`lg:hidden ${resizeHide ? "hidden" : "absolute z-10 flex w-full p-4 items-center darkish-bg justify-between h-auto"} duration-500 bottom-0 `}>
        <i onClick={() => setReveal(!reveal)} className="cursor-pointer fas fa-bars"></i>
        <h2>Stockily</h2>
      </div>
      {clicked === "Home" 
        ?
          <Menu />
        :
          <Account />
      }
    </div>
  )
}

export default Index
