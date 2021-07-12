import React, {useEffect} from 'react'
// import BGStocks from '../assets/bg.jpg'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

import CommunitySVG from '../assets/community.svg';
import TeamSVG from '../assets/team.svg';
import SearchSVG from '../assets/searchowo.svg';

function Index() {

  useEffect(() => {
    document.title = "Stockily - Home"
  }, [])

  return (
    <div className="h-auto min-w-screen darker-bg">
      <Hero />
      <Information />
      <Showcase left={true} img={SearchSVG} title={"Search for Price"} description={"Instantly get the results of a provided search stock name. All information needed in one place."} button={`Search <i className="fas fa-search"></i>`} />
      <Showcase left={false} img={CommunitySVG} title={"Open Source"} description={"Everything provided here. Is open-sourced. Free for inspection and free to use. Under MIT License."} button={`GitHub Repository <i className="fab fa-github"></i>`} />
      <Showcase left={true} img={TeamSVG} title={"Well Developed"} description={"Made with love and passion by Kobi encrypting and securing everything to ensure absolute safety."} button={`Kobi's Website <i className="fas fa-user"></i>`} />
      <Footer />
    </div>
  )
}

export default Index
