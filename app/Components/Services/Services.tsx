'use client'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Lottie from "lottie-react"
import web_design from '../../../public/web_design.json'
import web_solutions from '../../../public/web_solutions.json'
import web_live from '../../../public/live_web.json'
const Services = () => {
  return (
    <section className='services w-full bg-white h-[1500px]'>
      <SectionHeader text='WHAT I DO' color='black'/>
      <div className='services_container grid grid-cols-3 items-center justify-items-center'>
        <div className='service flex flex-col justify-start items-center w-[400px] gap-y-4'>
            <Lottie className='relative' animationData={web_design} loop={true}/> 
            <div className='service_headers text-[21px] text-black font-extrabold text-center'>
            <h1>CREATING BEAUTIFUL AND</h1>
            <h1><span className='text-[#D03838]'>RESPONSIVE</span> WEBSITES</h1>
            </div>
            <span className='text-[12px] md:text-[13px] text-center '>
                I specialize in creating unique websites tailored to the needs of my clients. 
                I use modern technologies and apply 
                the best programming practices to be able to create responsive, intuitive in navigation and optimal user experience on all devices.
            </span>
        </div>
        <div className='service flex flex-col justify-start w-[400px] items-center gap-y-4'>
            <Lottie className='relative' animationData={web_solutions} loop={true}/> 
            <div className='service_headers text-[21px] text-black font-extrabold text-center'>
                <h1><span className='text-[#D03838]'>PERSONALISED</span> WEB</h1>
                <h1>SOLUTIONS</h1>
            </div>
            <span className='text-[12px] md:text-[13px] text-center '>
            I offer personalized Internet solutions that are tailored to specific customer requirements. 
            Whether you need an online store, a website for your startup or a business card website
            </span>
        </div>
        <div className='service flex flex-col justify-start items-center gap-y-4 w-[400px]'>
            <Lottie className='relative' animationData={web_live} loop={true}/> 
            <div className='service_headers text-[21px] text-black font-extrabold text-center'>
                <h1><span className='text-[#D03838]'>YOUR DESIGN</span> TO</h1>
                <h1>LIVE WEBSITE</h1>
            </div>
            <span className='text-[12px] md:text-[13px] text-center '>
                I specialize in creating unique websites tailored to the needs of my clients. 
                I use modern technologies and apply 
                the best programming practices to be able to create responsive, intuitive in navigation and optimal user experience on all devices.
            </span>
        </div>

      </div>
      
    </section>
  )
}

export default Services
