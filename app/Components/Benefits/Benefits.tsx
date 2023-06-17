import React from 'react'
import Image from 'next/image'
import design from '../../../public/Benefits/design.svg'
import experience from '../../../public/Benefits/experience.svg'
import fast from '../../../public/Benefits/fast.svg'
import interactivity from '../../../public/Benefits/interactivity.svg'
import maintain from '../../../public/Benefits/maintain.svg'
import mobile from '../../../public/Benefits/mobile.svg'

const Benefits = () => {
  return (
    <section className='w-full bg-white grid lg:grid-cols-3 items-start justify-items-center text-center gap-10 md:gap-5 py-10 px-5'>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={fast} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px] '>FAST LOADING</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                The page will load quickly, which means less waiting times for users
            </p>            
        </div>

      </div>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={interactivity} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px] '>INTERACTIVITY</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                The site will provide dynamic and interactive elements such as animations and special effects, creating a unique user experience
            </p>            
        </div>

      </div>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={mobile} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px] '>RESPONSIVNES</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                Responsive and good-looking website on different devices, while ensuring an optimal experience regardless of the platform
            </p>            
        </div>

      </div>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={design} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px] '>ELLEGANT PAGE DESIGN</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                Tailwind CSS will make your website look professional and attractive, attracting visitors' eyes
            </p>            
        </div>
      </div>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={maintain} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px]'>EASY TO MAINTAIN AND EXPAND</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                The website will be easy to expand, update and maintain thanks to the modular approach to its creation
            </p>            
        </div>

      </div>
      <div className='benefit flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-around lg:justify-start gap-10 lg:gap-4 w-full lg:w-fit'>
        <div className='benefit_image'>
            <Image className='md:w-[180px] md:h-[200px] lg:w-[100px] lg:h-[100px]' src={experience} alt='benefit_image'/>
        </div>
        <div className='benefit_description flex flex-col justify-center items-center gap-5'>
            <h3 className='font-semibold text-[25px] lg:text-[19px] '>OPTIMIZED EXPERIENCE</h3>
            <p className='text-[18px] lg:text-[14px] w-[300px]'>
                Using React.js and Next.js, the website will be optimized for performance, which will contribute to better usability and user satisfaction
            </p>            
        </div>

      </div>
      
      
    </section>
  )
}

export default Benefits
