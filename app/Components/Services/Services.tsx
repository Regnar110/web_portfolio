'use client'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Lottie from "lottie-react"
import web_design from '../../../public/web_design.json'
import rwd from '../../../public/rwd.json'
import backend from '../../../public/backend.json'

import LottieAnimationIntersection from '../LottieAnimation/LottieAnimationIntersection'

const Services = () => {
  return (
    <section id="services" className='services w-full bg-white pb-10'>
      <SectionHeader text='WHAT I DO' color='black'/>
      <div className='services_container w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-5'>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                <LottieAnimationIntersection animationData={web_design}/>
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  WRITING
                  <br/>
                  <span className='text-[#D03838]'>
                    CLEAN CODE
                  </span>
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>     
                  I put a lot of emphasis on writing clean JavaScript code, which means that my projects are not only functional, but also readable and organized. 
                  Using the React library, the code is modular and reusable.   
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
              <LottieAnimationIntersection animationData={rwd}/>
                {/* <Lottie width={300} className='relative' animationData={web_solutions} loop={true}/> */}
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center z-10'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>
                    RESPONSIVE
                  </span>
                  <br/>
                  WEB DESIGN
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>        
                I create websites that look and work great on a variety of devices - from computers to smartphones. 
                Thanks to the use of techniques such as media queries, flexbox and grid layout, my projects adapt to different screens, 
                guaranteeing a consistent and comfortable experience for users.
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
              <LottieAnimationIntersection animationData={backend}/>
                {/* <Lottie width={300} className='relative' animationData={web_live} loop={true}/> */}
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>BACK-END</span>
                  <br/>
                  DEVELOPMENT
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>        
                I create scalable and efficient services that support business logic and communicate with the database. 
                Using Node.js, I am able to create API, manage sessions and authorization, 
                as well as integrate with various technologies, which allows for the comprehensive construction of full web applications.
                </p>
              </div>
            </div> 
      </div>
      
    </section>
  )
}

export default Services
