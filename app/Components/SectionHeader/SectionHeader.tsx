import React from 'react'

interface Props {
    text:string,
    color:"white" | "black"
    bg?: "white" | "site"
}

const SectionHeader = ({text, color,bg}:Props) => {
  return <h1 className={`text-[30px] lg:text-[40px] xl:text-[55px] text-${color} bg-[${bg === "site" ? "#111525":"#fff"}] w-full font-extrabold text-center py-10`}>{text}</h1>
}

export default SectionHeader
