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
    <div className='single_project relative cursor-pointer rounded-lg overflow-hidden h-fit w-full' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='project_image_container relative w-full'>
            <Image src={project_image} alt='apart_project' className=' w-[700px] xl:w-full'/>                    
        </div>
        <div className={`project_absolute_wrapper relative md:absolute flex flex-col  items-center gap-4 top-0 w-fit h-full bg-[#ffffffe0] ${isHovered === true ? "md:opacity-1 " : "md:opacity-[0]"} transition-all duration-100`}>
            <div className='project_header flex flex-col text-[#444548] font-roboto justify-center items-center'>
                {/* <h1 className='text-[#FF7400] font-semibold text-[26px] xl:text-[22px] 2xl:text-[26px]'>{project_tittle}</h1> */}
                <span className=' text-[14px] font-semibold text-center'>{project_subtittle.toUpperCase()}</span>                        
            </div>
            <span className='project_description text-[11px] md:text-[16px] lg:text-[20px] xl:text-[14px] 2xl:text-[16px] font-normal text-center p-0 md:p-7'>{project_description}</span>
            <div className='tech_stac_project flex flex-wrap gap-y-4 gap-x-2 font-semibold justify-center items-center max-w-[75%]'>
              {
                tech_array.map((el,i) => <ProjectTechIcon key={i} tech_text={el}/>)
              }
            </div>
            <div className='visit_icons flex justify-center items-center gap-3'>
              <div className='visit_icon_wrapper border-[1px] bg-[#fff] p-1 rounded-full flex justify-center items-center  text-[#FF7400]'>
                <Link href={link}><TelegramIcon fontSize='medium' color='inherit'/> </Link>
              </div>
              <div className='visit_icon_wrapper border-[1px] bg-[#fff] p-1 rounded-full flex justify-center items-center text-[#FF7400]'>
                <Link href={github_link}><GitHubIcon fontSize='medium' color='inherit'/> </Link>
              </div>
            </div>
        </div>
    </div>

  )
}

export default SingleProject