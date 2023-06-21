'use client'
import React from 'react'
import Lottie from "lottie-react"
import juicy from '../../../public/juicy_man.json'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Fade, Zoom } from "react-awesome-reveal";
const Landing = () => {
  return (
    <section id='about' className='landing_section bg-[#111525] md:flex grid auto-rows-2 items-center md:justify-center md:flex-row max-w-[2000px] border-b-[1px] border-[#D03838]'>
        <ParallaxProvider>
            <Parallax className='w-full' speed={10}>
            <div className='landing_headers mt-20 md:mt-0 flex flex-col items-center justify-center w-full text-white '>
                <div className='w-fit flex flex-col items-start justify-center'>
                    <h1 className='text-[30px] sm:text-[37px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-extrabold w-fit'>FRONT - END</h1>
                    <h2 className='text-[#D03838] text-[25px] sm:text-[27px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-extrabold w-fit'>DEVELOPER</h2>
                    
                    {/* <Zoom triggerOnce={true}  className=' max-w-[280px] 2xl:max-w-[420px]' delay={1000}> */}
                        <span className='text-center md:text-left text-[12px] lg:text-[14px]'>
                            Solving design issues, constructing intuitive user interfaces with smart interactions, developing dynamic web applications, and delivering seamless and engaging web experiences.
                            {/* I am a web developer specializing in building user-friendly, responsive websites and web applications */}
                        </span>                        
                    {/* </Zoom> */}

                </div>
            </div>                
            </Parallax>
        </ParallaxProvider>

        <div className='langin_animation_container relative flex justify-center items-center transform translate-y-[18%] w-full 2xl:max-w-[1300px]  h-fit place-self-end'>
            {/* <Lottie className='relative' animationData={juicy} loop={true}/>  */}
        </div>
        
    </section>
  )
}

export default Landing
