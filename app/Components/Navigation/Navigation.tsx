'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import phone from '../../../public/phone.svg'
import mail from '../../../public/mail.svg'
import fb from '../../../public/fb.svg'
import discord from '../../../public/discord.svg'
import MobileBurgerMenu from './MobileBurgerMenu'
import MediaQuery from 'react-responsive/'
import { Link } from 'react-scroll'
const Navigation = () => {

  const [ isNavFixed, setIsNavFixed ] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => window.scrollY >= 70 ? setIsNavFixed(true): setIsNavFixed(false))
  },[])

  return (
    <nav className={`navigation ${isNavFixed ? "fixed":"relative"} top-0 z-50 w-full grid grid-cols-2 items-center justify-items-center gap-5 h-[80px] bg-[#111525]`}>
      <MediaQuery minWidth={768}>
        <div className='nav_lnks flex font-medium text-white text-[14px] gap-10'>
          <span className='what_do cursor-pointer'>
            <Link to="services" smooth={true}> WHAT I DO</Link>
          </span>
          <span className='projects cursor-pointer'>
            <Link to="projects" smooth={true}>PROJECTS</Link>
          </span>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <MobileBurgerMenu/>
      </MediaQuery>
      <div className='nav_icons flex gap-4'>
        <Image className='w-[18px] cursor-pointer' src={phone} alt='phone'/>
        <Image className='w-[18px] cursor-pointer' src={mail} alt='phone'/>
        <Image className='w-[18px] cursor-pointer' src={discord} alt='phone'/>
        <Image className='w-[18px] cursor-pointer' src={fb} alt='phone'/>
      </div>
    </nav>
  )
}

export default Navigation
