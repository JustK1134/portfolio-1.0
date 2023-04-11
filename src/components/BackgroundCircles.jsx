import React from 'react'
import {motion} from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div
    initial={{
        opacity:0,
    }} 
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1], 
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center h-screen aspect-square'>
        <div className='absolute border [#333333] rounded-full h-[100px] w-[100px] animate-ping '/>
        <div className='absolute border [#333333] rounded-full h-[200px] w-[200px]  animate-ping '/>
        <div className='absolute border [#333333] rounded-full h-[400px] w-[400px]  animate-ping '/>
        <div className='absolute border [#333333] rounded-full h-[500px] w-[500px] opacity-20  animate-pulse '/>
        <div className='absolute border [#333333] rounded-full h-[600px] w-[600px] opacity-20  animate-pulse '/>
    </motion.div>
  )
}

export default BackgroundCircles