import React from 'react'

interface Props {
    tech_text:string
}
const ProjectTechIcon = ({tech_text}:Props) => {
  return <div className='tech text-white text-[8px] md:text-[11px] border-[1px] border-[#000] bg-[#444548] px-2 py-1 rounded-sm w-fit'>{tech_text}</div>
}

export default ProjectTechIcon