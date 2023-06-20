import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll';

const MobileBurgerMenu = () => {
  return (
    <div className='mm_wrapper relative w-full'>
      <div className='burger_icon relative left-[25%] h-full flex justify-start items-center text-white'>
        <MenuIcon fontSize='medium' sx={{color:"white"}}/>
      </div>
      <Menu className='absolute top-0' customCrossIcon={<CloseIcon sx={{color:"white"}}/>} width={280} itemListClassName={"text-[22px] flex flex-col items-center justify-center font-medium text-[14px] gap-28 text-white p"} menuClassName='bg-[#111525]'   pageWrapId={ "page_container" } outerContainerId={ "app_container" }>
          <span className='about_me'>
            <Link to="about" smooth={true}>ABOUT ME</Link>
          </span>
          <span className='what_do'>
            <Link to="services" smooth={true}>WHAT I DO</Link>
          </span>
          <span className='projects'>
            <Link to="projects" smooth={true}>PROJECTS</Link>
          </span>
      </Menu>
    </div>
  )
}

export default MobileBurgerMenu
