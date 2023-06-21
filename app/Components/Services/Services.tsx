'use client'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Lottie from "lottie-react"
import web_design from '../../../public/web_design.json'
import web_solutions from '../../../public/web_solutions.json'
import web_live from '../../../public/live_web.json'
import { Fade } from 'react-awesome-reveal'
const Services = () => {
  return (
    <section id="services" className='services w-full bg-white pb-10'>
      <SectionHeader text='WHAT I DO' color='black'/>
      <div className='services_container w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-5'>
        {/* <Fade triggerOnce={true}  cascade> */}
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                {/* <Lottie width={300} className='relative' animationData={web_design} loop={true}/> */}
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  CREATING BEAUTIFUL AND
                  <br/>
                  <span className='text-[#D03838]'>
                    RESPONSIVE
                  </span> DESIGN
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>        
                  I specialize in creating unique websites tailored to the needs of my clients. 
                  I use modern technologies and apply 
                  the best programming practices to be able to create responsive, intuitive in navigation and optimal user experience on all devices.
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                {/* <Lottie width={300} className='relative' animationData={web_solutions} loop={true}/> */}
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>
                    PERSONALISED 
                  </span> WEB
                  <br/>
                  SOLUTIONS
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>        
                I offer personalized Internet solutions that are tailored to specific customer requirements. 
                Whether you need an online store, 
                a website for your startup or a business card website.
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                {/* <Lottie width={300} className='relative' animationData={web_live} loop={true}/> */}
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>YOUR DESIGN</span> TO 
                  <br/>
                  LIVE WEBSITE
                </h3>
                <p className='text-center max-w-[300px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] font-normal px-5'>        
                  I am able to perform a full translation 
                  of your graphic design into the website code. It will map your design, ensuring 
                  that every detail, layout and interaction 
                  is properly transferred to the code
                </p>
              </div>
            </div>          
        {/* </Fade> */}
      </div>
      
    </section>
  )
}

export default Services
