"use client"
import Benefits from './Components/Benefits/Benefits'
import BreakerWithRocket from './Components/BreakerWithRocket/BreakerWithRocket'
import Landing from './Components/Landing/Landing'
import Navigation from './Components/Navigation/Navigation'
import Projects from './Components/Projects/Projects'
import SectionHeader from './Components/SectionHeader/SectionHeader'
import Services from './Components/Services/Services'
import TechStackSwiper from './Components/TechStackSwiper/TechStackSwiper'
import AboutMe from './Components/AboutMe/AboutMe'
import Loading from './Components/Loading/Loading'
import SocialIcons from './Components/SocialIcons/SocialIcons'
import { useEffect, useState } from 'react'


export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
  },[])
  return isLoading?
        <main id='app_container' className="m-0 p-0 flex flex-col bg-[#111525] justify-center items-center overflow-hidden scroll-smooth">
          <Navigation/>
          <div id='page_container' className='burger_page-wrap flex flex-col bg-[#111525] justify-center items-center overflow-hidden scroll-smooth'>
            <Landing/>
            <AboutMe/>
            <Services/>
            <TechStackSwiper/>
            <SectionHeader text='KEY BENEFITS' color='black'/>
            <Benefits/>
            <BreakerWithRocket/>
            <SectionHeader text='PROJECTS' color='white'/>
            <Projects/>
            <SocialIcons/>       
          </div>

        </main>           
  :
  <Loading/>
}
