'use client'
import React, { useEffect, useState } from 'react'
import MobileBurgerMenu from './MobileBurgerMenu'
import MediaQuery from 'react-responsive/'
import { Link } from 'react-scroll'
import succes_space from '../../../public/succes_space.json'
import Lottie from 'lottie-react'
const Navigation = () => {
  const [ isNavFixed, setIsNavFixed ] = useState<boolean>(false)
  const [isMounted, setMounted ] = useState<boolean>(false)
  useEffect(() => {
      setMounted(true)
      window.addEventListener('scroll', () => window.scrollY >= 70 ? setIsNavFixed(true): setIsNavFixed(false))
  },[])

  return isMounted ? 
    <nav className={`navigation ${isNavFixed ? "fixed":"relative"} top-0 z-50 w-full grid grid-cols-2 items-center justify-items-center gap-5 h-[80px] bg-[#111525]`}>
      <MediaQuery minWidth={768}>
        <div className='nav_lnks pl-6 lg:pl-0 flex justify-center items-center font-medium text-white text-[14px] gap-10'>
          <Lottie  className=' w-[60px]' animationData={succes_space} loop={true}/>
          <span className='about_me cursor-pointer whitespace-nowrap'>
            <Link to="about" smooth={true}>ABOUT ME</Link>
          </span>
          <span className='what_do cursor-pointer whitespace-nowrap'>
            <Link to="services" smooth={true}>WHAT I DO</Link>
          </span>
          <span className='projects cursor-pointer whitespace-nowrap'>
            <Link to="projects" smooth={true}>PROJECTS</Link>
          </span>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <MobileBurgerMenu/>
      </MediaQuery>
    </nav>
  :
  null
}

export default Navigation
