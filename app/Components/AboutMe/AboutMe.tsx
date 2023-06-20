import React from 'react'
const AboutMe = () => {
  return (
    <section className='aboute_me w-full bg-[#111525] flex justify-center items-center py-24'>
      <div className='about_me_container w-full max-w-[2000px] flex flex-col md:flex-row justify-around items-center gap-y-8 md:gap-0 px-5 lg:p-0'>
        <div className='about_me_header'>
            <header className='flex flex-col items-start justify-center text-white text-[24px] sm:text-[30px] lg:text-[37px] xl:text-[45px] 2xl:text-[50px] font-extrabold'>
                <h1 className='about_header '>
                    HI! I'm Mateusz
                </h1>
                <h1 className='text-[#D03838]'>WEB DEVELOPER</h1>          
                <span className='text-[12px] lg:text-[16px] text-[#ffffff6b]'>Front End Developer / JavaScript and React Fan </span>
            </header>
        </div>
        <div className='about_me_description flex flex-col justify-center gap-4  text-white w-[280px] md:w-auto sm:text-[10px] md:text-[12px] lg:text-[14px]'>
            <div>
                <p>Self-taught Web Developer, looking for new development opportunities</p>
                <p>Involved in work, very communicative, goal-oriented, loyal employee.</p>
            </div>
            <div>
                <p>Fan of Game of Thrones, sports, video games, and coding</p>
                <p>interested in meeting new people, developing my skills and creating websites</p>                
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
