import React from 'react'
const AboutMe = () => {
  return (
    <section id='about' className='aboute_me w-full bg-[#111525] flex flex-col justify-center items-center pt-6 h-[400px] md:gap-0 px-5 lg:p-0'>
      <div className='about_me_container w-full flex flex-col-reverse md:flex-row-reverse justify-around items-start gap-y-8 md:gap-0'>
        <div className='about_me_description flex flex-col gap-4 font-medium text-white text-[12px] lg:text-[16px] p-0 md:px-5 lg:p-0'>
            <div>
                <p>Self-taught Web Developer, looking for new development opportunities</p>
                <p>Involved in work, very communicative, goal-oriented, loyal employee.</p>
            </div>
            <div>
                <p>Fan of Game of Thrones, sports, video games, and coding</p>
                <p>interested in meeting new people, developing my skills and creating websites</p>                
            </div>
        </div>
        <div className='about_me_header'>
            <header className='flex flex-col items-start justify-center text-white text-[24px] sm:text-[30px] lg:text-[37px] xl:text-[45px] 2xl:text-[50px] font-extrabold'>
                <h1 className='about_header '>
                    HI! I'm Mateusz
                </h1>
                <h1 className='text-[#D03838]'>WEB DEVELOPER</h1>          
                <span className='text-[12px] lg:text-[16px] text-[#ffffff6b]'>Front End Developer / JavaScript and React Fan </span>
            </header>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
