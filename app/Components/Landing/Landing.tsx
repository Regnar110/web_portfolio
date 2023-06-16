'use client'
import React from 'react'
import Lottie from "lottie-react"
import juicy from '../../../public/juicy_man.json'
const Landing = () => {
  return (
    <section className='landing_section bg-[#111525] md:flex grid auto-rows-2 items-center justify-center md:flex-row max-w-[2000px]'>
        <div className='landing_headers mt-20 md:mt-0 flex flex-col items-center justify-center w-full text-white '>
            <div className='w-fit flex flex-col items-start justify-center'>
                <h1 className='text-[30px] sm:text-[37px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-extrabold w-fit'>MATEUSZ WRYCZA</h1>
                <h2 className='text-[25px] sm:text-[27px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-extrabold w-fit'>WEB DEVELOPER</h2>
                <span className='text-[12px] text-center md:text-left sm:text-[12px] lg:text-[14px] max-w-[300px] 2xl:max-w-[420px]'>
                    Jestem web-developerem specjalizującym się 
                    w budowaniu przyjaznych użytkownikom, responsywnych stron i aplikacji internetowych
                </span>                
            </div>

        </div>
        <div className='langin_animation_container relative flex justify-center items-center transform translate-y-[18%] w-full 2xl:max-w-[1300px]  h-fit place-self-end'>
            <Lottie className='relative' animationData={juicy} loop={true}/> 
        </div>
        
    </section>
  )
}

export default Landing
