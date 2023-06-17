'use client'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Lottie from "lottie-react"
import web_design from '../../../public/web_design.json'
import web_solutions from '../../../public/web_solutions.json'
import web_live from '../../../public/live_web.json'
const Services = () => {
  return (
    <section className='services w-full bg-white pb-10'>
      <SectionHeader text='WHAT I DO' color='black'/>
      <div className='services_container w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-5'>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[300px] h-[300px]'>
                <Lottie width={300} className='relative' animationData={web_design} loop={true}/>
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  CREATING BEAUTIFUL AND
                  <br/>
                  <span className='text-[#D03838]'>
                    RESPONSIVE
                  </span> DESIGN
                </h3>
                <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px]  font-normal px-5'>        
                  I specialize in creating unique websites tailored to the needs of my clients. 
                  I use modern technologies and apply 
                  the best programming practices to be able to create responsive, intuitive in navigation and optimal user experience on all devices.
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[300px] h-[300px]'>
                <Lottie width={300} className='relative' animationData={web_solutions} loop={true}/>
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>
                    PERSONALISED 
                  </span> WEB
                  <br/>
                  SOLUTIONS
                </h3>
                <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px]  font-normal px-5'>        
                I offer personalized Internet solutions that are tailored to specific customer requirements. 
                Whether you need an online store, 
                a website for your startup or a business card website.
                </p>
              </div>
            </div>
            <div className='service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
              <div className='lottie_animation relative w-[300px] h-[300px]'>
                <Lottie width={300} className='relative' animationData={web_live} loop={true}/>
              </div>
              <div className='service_desc flex flex-col w-fit justify-center items-center'>
                <h3 className='w-fit h-[70px] text-[21px] text-black font-extrabold text-center '>
                  <span className='text-[#D03838]'>YOUR DESIGN</span> TO 
                  <br/>
                  LIVE WEBSITE
                </h3>
                <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px]  font-normal px-5'>        
                  I am able to perform a full translation 
                  of your graphic design into the website code. It will map your design, ensuring 
                  that every detail, layout and interaction 
                  is properly transferred to the code
                </p>
              </div>
            </div>
        {/* <div className='service flex flex-col justify-start items-center gap-y-4 w-[300px]'>
            <div className='lottie_animation relative w-[300px] h-[300px] flex justify-start items-center'>
              <Lottie width={300} className='relative' animationData={web_solutions} loop={true}/> 
            </div>
            <div className='service_headers text-[21px] text-black font-extrabold text-center'>
                <h1><span className='text-[#D03838]'>PERSONALISED</span> WEB</h1>
                <h1>SOLUTIONS</h1>
            </div>
            <span className='text-[12px] md:text-[13px] text-center '>
            I offer personalized Internet solutions that are tailored to specific customer requirements. 
            Whether you need an online store, a website for your startup or a business card website
            </span>
        </div>
        <div className='service flex flex-col justify-start items-center gap-y-4 w-[300px]'>
            <div className='lottie_animation relative w-[300px] h-[300px]'>
              <Lottie width={300} className='relative' animationData={web_live} loop={true}/>             
            </div>
            <div className='service_headers text-[21px] text-black font-extrabold text-center'>
                <h1><span className='text-[#D03838]'>YOUR DESIGN</span> TO</h1>
                <h1>LIVE WEBSITE</h1>
            </div>
            <span className='text-[12px] md:text-[13px] text-center'>
              I specialize in creating responsive, user-friendly, unique websites tailored to the needs of my clients using the latest technologies.
            </span>
        </div> */}

      </div>
      
    </section>
  )
}

export default Services
