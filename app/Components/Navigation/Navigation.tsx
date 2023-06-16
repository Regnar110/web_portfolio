import React from 'react'
import Image from 'next/image'
import phone from '../../../public/phone.svg'
import mail from '../../../public/mail.svg'
import fb from '../../../public/fb.svg'
import discord from '../../../public/discord.svg'
const Navigation = () => {
  return (
    <nav className='navigation w-full grid grid-cols-2 items-center justify-items-center gap-5 h-[80px] bg-[#111525]'>
      <div className='nav_lnks flex font-medium text-white text-[14px] gap-10'>
        <span className='what_do cursor-pointer'>
            WHAT I DO
        </span>
        <span className='projects cursor-pointer'>
            PROJECTS
        </span>
        <span className='contact cursor-pointer'>
            CONTACT
        </span>
      </div>
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
