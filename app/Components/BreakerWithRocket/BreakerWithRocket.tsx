
'use client'
import React from 'react'
import Lottie from "lottie-react"
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import success_space from '../../../public/succes_space.json'
import LottieAnimationIntersection from '../LottieAnimation/LottieAnimationIntersection'
import RocketIcon from '../RocketIcon/RocketIcon'
const BreakerWithRocket = () => {
    const rocketBackground: BannerLayer = {
        image:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
        translateY: [0, 20],
        opacity: [1, 0.1],
        scale: [1, 1.1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
      };
      const rocket: BannerLayer = {
        translateY: [100,-20],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolutes inset-0 flex items-center justify-center lg:justify-start">
            <RocketIcon/>
          </div>
        ),
      };
    
      const afterRocket: BannerLayer = {
        translateY: [20, -10],
        shouldAlwaysCompleteAnimation: true,
        children: (
            <section className='text-white text-[30px] absolute inset-10 flex flex-col items-center justify-center p-4'>
                <header className='text-[#ffffffc4] w-full ustify-center items-center relative text-[25px] sm:text-[27px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-extrabold text-center'>
                    I WILL <span className='text-[#D03838]'>MAKE</span> YOUR
                    <br/>
                    PROJECT REACH THE ORBIT OF <span className='text-[#D03838]'>SUCCESS</span>
                </header>
                <LottieAnimationIntersection animationClassName='absolute w-[300px] md:w-[350px] right-0 -rotate-45 -z-50 opacity-[0.8]' animationData={success_space}/>
            </section>
        )
      };
  return (
    <ParallaxProvider>
      <ParallaxBanner layers={[rocketBackground, rocket, afterRocket]} className="min-h-[800px] lg:h-[100vh] bg-gray-900"/>
    </ParallaxProvider>
  )
}

export default BreakerWithRocket
