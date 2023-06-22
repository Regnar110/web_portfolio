'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ProjectTechIcon from './ProjectTechIcon';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

interface Props {
  project_image: StaticImageData;
  project_subtittle:string;
  project_description:string;
  tech_array: string[];
  link:string;
  github_link:string
}
const SingleProject = ({project_image, project_subtittle, project_description, tech_array,link, github_link}:Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div className='single_project relative cursor-pointer flex flex-col justify-center items-center rounded-lg overflow-hidden h-fit w-full' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='project_image_container relative w-full flex flex-col justify-center items-center'>
            <Image src={project_image} alt='apart_project' className=' w-[500px] h-[340px] '/>  
            <span className='text-[#D03838] text-[15px] text-center mb-10 md:mb-0 font-extrabold'>{project_subtittle.toUpperCase()}</span>                  
        </div>
        <div className={`project_absolute_wrapper relative md:absolute flex flex-col max-w-[1024px]  items-center gap-4 top-0 w-fit h-full bg-[#111525b9] ${isHovered === true ? "md:opacity-1 " : "md:opacity-[0]"} transition-all duration-100`}>
            <span className='project_description text-white text-[11px] md:text-[16px] lg:text-[20px] xl:text-[14px] 2xl:text-[16px] font-normal text-center p-0 md:p-7'>{project_description}</span>
            <div className='tech_stac_project flex flex-wrap gap-y-4 gap-x-2 font-semibold justify-center items-center max-w-[90%] md:max-w-[75%]'>
              {
                tech_array.map((el,i) => <ProjectTechIcon key={i} tech_text={el}/>)
              }
            </div>
            <div className='visit_icons flex justify-center items-center gap-3'>
              <div className='visit_icon_wrapper border-[2px] border-[#D03838] bg-[#111525b9] p-1 rounded-full flex justify-center items-center  text-[#fff]'>
                <Link shallow={true} href={link}><TelegramIcon fontSize='medium' color='inherit'/> </Link>
              </div>
              <div className='visit_icon_wrapper border-[2px] border-[#D03838] bg-[#111525b9] p-1 rounded-full flex justify-center items-center text-[#fff]'>
                <Link href={github_link}><GitHubIcon fontSize='medium' color='inherit'/> </Link>
              </div>
            </div>
        </div>
    </div>

  )
}

export default SingleProject