import React from 'react'
import Image from 'next/image'
import apart from '../../../public/projects/apart.svg'
import SectionHeader from '../SectionHeader/SectionHeader'

const Projects = () => {
  return (
    <section className='flex flex-col bg-[#111525] text-white'>
      <SectionHeader text='PROJECTS' color='white' />
      <div className='projects_container flex flex-col gap-y-10'>
        <div className='single_project flex flex-col justify-center items-center gap-y-5'>
            <Image src={apart} alt="apart"/>
            <h1 className='text-[22px]'>E-COMMERCE PLATFORM</h1>
        </div>
        <div className='single_project flex flex-col justify-center items-center gap-y-5'>
            <Image src={apart} alt="apart"/>
            <h1 className='text-[22px]'>E-COMMERCE PLATFORM</h1>
        </div>
        <div className='single_project flex flex-col justify-center items-center gap-y-5'>
            <Image src={apart} alt="apart"/>
            <h1 className='text-[22px]'>E-COMMERCE PLATFORM</h1>
        </div>
        <div className='single_project flex flex-col justify-center items-center gap-y-5'>
            <Image src={apart} alt="apart"/>
            <h1 className='text-[22px]'>E-COMMERCE PLATFORM</h1>
        </div>
      </div>
    </section>
  )
}

export default Projects
