import React from 'react'
interface Props {
    id:string;
    children: JSX.Element[]
}

const SectionWrapper = ({id, children}:Props) => {
  return (
    <section id={id} className='wrapper relative flex flex-col justify-center items-center max-w-[1536px] rounded-md  bg-white mx-5 overflow-hidden'>
      {children.map(el => el)}
    </section>
  )
}

export default SectionWrapper