'use client'
import React from 'react'
import Image from "next/image"
import html from '../../../public/tech/html.png'
import css from '../../../public/tech/css.jpg'
import js from '../../../public/tech/js.png'
import ts from '../../../public/tech/typescript.png'
import react from '../../../public/tech/react.png'
import next from '../../../public/tech/next.png'
import redux from '../../../public/tech/redux.png'
import form from '../../../public/tech/reactform.jpg'
import tailwind from '../../../public/tech/tailwind.png'
import mui from '../../../public/tech/mui.png'
import sanity from '../../../public/tech/sanity.png'
import mongo from '../../../public/tech/mongodb.webp'
import spring from '../../../public/tech/spring.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive'

const TechStackSwiper = () => {
    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })
  return (
        <Swiper 
            className="mySwiper bg-white w-[100vw]"
            slidesPerView={isMobile ? 1: 4}
            spaceBetween={10}
            autoplay={{
                delay:0,
                disableOnInteraction: false
                
            }}
            speed={isMobile? 1000:1500}
            modules={[Autoplay]}
            loop={true}
            >
                <SwiperSlide ><div className='h-[170px] flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={html} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={css} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={js} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={ts} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={react} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={next} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={redux} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={spring} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={form} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={tailwind} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={mui} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={200} style={{width:"auto"}} src={sanity} alt="tech"/></div></SwiperSlide>
                <SwiperSlide ><div className='h-[170px]  flex justify-center items-center'><Image width={100} style={{width:"auto"}} src={mongo} alt="tech"/></div></SwiperSlide>
        </Swiper>           
  )
}

export default TechStackSwiper