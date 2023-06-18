
import Benefits from './Components/Benefits/Benefits'
import BreakerWithRocket from './Components/BreakerWithRocket/BreakerWithRocket'
import Landing from './Components/Landing/Landing'
import Navigation from './Components/Navigation/Navigation'
import Projects from './Components/Projects/Projects'
import SectionHeader from './Components/SectionHeader/SectionHeader'
import Services from './Components/Services/Services'
import TechStackSwiper from './Components/TechStackSwiper/TechStackSwiper'

export default function Home() {
  return (
    <main className="m-0 p-0 flex flex-col bg-[#111525] justify-center items-center overflow-hidden scroll-smooth">
      <Navigation/>
      <Landing/>
      <Services/>
      <TechStackSwiper/>
      <SectionHeader text='KEY BENEFITS' color='black'/>
      <Benefits/>
      <BreakerWithRocket/>
      <SectionHeader text='PROJECTS' color='white'/>
      <Projects/>
    </main>
  )
}
