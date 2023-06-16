import Landing from './Components/Landing/Landing'
import Navigation from './Components/Navigation/Navigation'
import Services from './Components/Services/Services'

export default function Home() {
  return (
    <main className="m-0 p-0 flex flex-col bg-[#111525] justify-center items-center">
      <Navigation/>
      <Landing/>
      <Services/>
    </main>
  )
}
