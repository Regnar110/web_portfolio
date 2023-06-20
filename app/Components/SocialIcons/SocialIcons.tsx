import React, { useState } from 'react'
import Image from 'next/image'
import phone from '../../../public/phone.svg'
import discord from '../../../public/discord.svg'
import mail from '../../../public/mail.svg'
const SocialIcons = () => {
    const [phoneState, setPhone ] = useState<boolean>(false)
    const [mailState, setMail ] = useState<boolean>(false)
    const [discordState, setDiscord ] = useState<boolean>(false)
  return (
    <div className='fixed z-50 right-[-200px] top-[65%] flex flex-col gap-y-3 text-[12px]'>
      <div className='phone relative right-[0px] hover:right-[200px] transition-all duration-300 w-[250px] bg-[#1e253d] text-white font-medium rounded-md overflow-hidden flex justify-start'>
        <div className='visible_icon border-l-[2px] border-[#D03838] px-4 py-4 bg-white'>
            <Image className='w-[22px] cursor-pointer' src={phone} alt='phone'/>
        </div>
        <div className='default_hidden_content w-full flex justify-center items-center'>
            784 452 569
        </div>
      </div>
      <div className='mail relative right-[0px] hover:right-[200px] transition-all duration-300 w-[250px] bg-[#1e253d] text-white font-medium rounded-md overflow-hidden flex justify-start'>
        <div className='visible_icon border-l-[2px] border-[#D03838] px-4 py-4 bg-white'>
            <Image className='w-[22px] cursor-pointer' src={mail} alt='mail'/>
        </div>
        <div className='default_hidden_content w-full flex justify-center items-center'>
            mateuszwrycza3@gmail.com
        </div>
      </div>
      <div className='discord relative right-[0px] hover:right-[200px] transition-all duration-300 w-[250px] bg-[#1e253d] text-white font-medium rounded-md overflow-hidden flex justify-start'>
        <div className='visible_icon border-l-[2px] border-[#D03838] px-4 py-4 bg-white'>
            <Image className='w-[22px] cursor-pointer' src={discord} alt='discord'/>
        </div>
        <div className='default_hidden_content w-full flex justify-center items-center'>
            MatiKing #0598
        </div>
      </div>
    </div>
  )
}

export default SocialIcons
