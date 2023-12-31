import React from 'react'

interface Props {
    text:string,
    color:"white" | "black"
}

const SectionHeader = ({text, color}:Props) => {
  return <h1 className={`text-[30px] lg:text-[40px] xl:text-[55px] text-${color} ${color === "white" ? "bg-[#111525]":"bg-[#fff]"} w-full font-extrabold text-center py-10`}>
      {text}
  </h1>
}

export default SectionHeader
