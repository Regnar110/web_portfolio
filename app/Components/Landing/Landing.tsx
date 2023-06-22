'use client'
import React, { useRef } from 'react'
import juicy from '../../../public/juicy_man.json'
import LottieAnimationIntersection from '../LottieAnimation/LottieAnimationIntersection';
const Landing = () => {

  return (
    <section id='about' className='landing_section w-full bg-[#111525] md:flex grid auto-rows-2 items-center md:justify-center md:flex-row max-w-[2000px] border-b-[1px] border-[#D03838]'>
            <div className='landing_headers mt-20 md:mt-0 flex flex-col items-center justify-center w-full text-white '>
                <div className='w-fit flex flex-col items-start justify-center'>
                        <h1 className='text-[30px] sm:text-[37px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-extrabold w-fit'>FRONT - END</h1>
                        <h2 className='text-[#D03838] text-[25px] sm:text-[27px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-extrabold w-fit'>DEVELOPER</h2>       
                        <span className='text-left w-[300px] md:w-[350px] lg:w-[500px] text-[12px] lg:text-[14px]'>
                            Solving design issues, constructing intuitive user interfaces with smart interactions, developing dynamic web applications, and delivering seamless and engaging web experiences.
                        </span>                        
                </div>
            </div>                
        <div  className='langin_animation_container relative flex justify-center items-center transform translate-y-[18%] w-full 2xl:max-w-[1300px]  h-fit place-self-end'>
            <LottieAnimationIntersection animationData={juicy}/>
        </div>
        
    </section>
  )
}

export default Landing
