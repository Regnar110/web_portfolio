import React from 'react'

interface Props {
    text:string,
    color:"white" | "black"
}

const SectionHeader = ({text, color}:Props) => {
  return <h1 className={`text-[55px] ${color} font-extrabold text-center my-10`}>{text}</h1>
}

export default SectionHeader
