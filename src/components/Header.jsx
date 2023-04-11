import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}
         className='flex flex-row items-center space-x-2'>
            <SocialIcon url='https://www.linkedin.com/in/luckhoi/' fgColor='gray' bgColor='transparent' className='hover:rounded-full hover:border border-[#F7AB0A]/40'/>
            <SocialIcon url='https://github.com/JustK1134' fgColor='gray' bgColor='transparent' className='hover:rounded-full hover:border border-[#F7AB0A]/40'/>

        </motion.div>


        <motion.div 
        initial={{
            x: 500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
            <a href='#contact'>
                <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer'/>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A]/40'>Get in touch</p>
            </a>

        </motion.div>
    </header>
  )
}

export default Header