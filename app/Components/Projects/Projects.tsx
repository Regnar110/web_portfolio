import React from 'react'
import { projects } from '@/utils/ProjectsArray'
import SingleProject from './SingleProject'

const Projects = () => {
    return (
        <section id='projects' className='projects_section flex flex-col items-center justify-center w-full md:w-[80%] mb-28  gap-x-4 p-8 gap-y-10 border-l-[1px] border-r-[1px] border-dashed border-[#d038386c]'>
            {
                projects.map((el,i) => (
                        <SingleProject key={i} project_image={el.project_image} project_subtittle={el.project_subtittle} project_description={el.project_description} tech_array={el.tech_array} link={el.link} github_link={el.github_link}/>
                ))
            }
        </section>
    )
}

export default Projects