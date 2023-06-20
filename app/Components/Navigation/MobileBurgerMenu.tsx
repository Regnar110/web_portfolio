import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { push as Menu } from 'react-burger-menu'

const MobileBurgerMenu = () => {
  return (
    <div className='mm_wrapper relative w-full'>
      <div className='burger_icon relative left-[25%] h-full flex justify-start items-center text-white'>
        <MenuIcon fontSize='medium' sx={{color:"white"}}/>
      </div>
      <Menu className='absolute top-0' customCrossIcon={<CloseIcon sx={{color:"white"}}/>} width={280} itemListClassName={"text-[22px] flex flex-col items-center justify-center font-medium text-[14px] gap-28 text-white p"} menuClassName='bg-[#111525]'   pageWrapId={ "page_container" } outerContainerId={ "app_container" }>
          <span className='what_do cursor-pointer'>
              WHAT I DO
          </span>
          <span className='about_me cursor-pointer'>
              ABOUT ME
          </span>
          <span className='projects cursor-pointer'>
              PROJECTS
          </span>
      </Menu>
    </div>
  )
}

export default MobileBurgerMenu
