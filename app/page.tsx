import Benefits from './Components/Benefits/Benefits'
import Landing from './Components/Landing/Landing'
import Navigation from './Components/Navigation/Navigation'
import RocketIcon from './Components/RocketIcon/RocketIcon'
import SectionHeader from './Components/SectionHeader/SectionHeader'
import Services from './Components/Services/Services'
import TechStackSwiper from './Components/TechStackSwiper/TechStackSwiper'

export default function Home() {
  return (
    <main className="m-0 p-0 flex flex-col bg-[#111525] justify-center items-center overflow-hidden">
      <Navigation/>
      <Landing/>
      <Services/>
      <TechStackSwiper/>
      <SectionHeader text='KEY BENEFITS' color='black' bg='white'/>
      <Benefits/>
      <RocketIcon/>
    </main>
  )
}
