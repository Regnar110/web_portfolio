import Lottie from 'lottie-react'
import React from 'react'
import loading_space from '../../../public/loading.json'

const Loading = () => {
  return (
    <div className='w-full relative h-[100vh] bg-[#111525] flex flex-col justify-center items-center'>
      <Lottie className='relative opacity-25 w-[300px]' animationData={loading_space} loop={true}/>
    </div>
  )
}

export default Loading
