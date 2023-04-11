import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import { Link } from 'react-router-dom'

import {Cursor, useTypewriter} from 'react-simple-typewriter'
import pic from '../assets/PersonPic.png'

const Hero = () => {
    const [text, count] = useTypewriter({
        words:['Mechatronic...','Software Engineer...','Data Analyst...'],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center relative'>
        
        <div className='absolute mt-64  sm:mt-48 z-20 flex flex-col justify-center items-center'>
          <img src='https://media.licdn.com/dms/image/C4E03AQGs6mmGR95b1A/profile-displayphoto-shrink_400_400/0/1550494623138?e=1686787200&v=beta&t=89-9ZEZyQk_IGoQUjyO-QEl1ARlk5r9TGF4EIfmL6-s' className='relative rounded-full w-40 h-40 mx-auto object-cover'/>
          <h1 className='text-xs tracking-[5px] sm:text-sm sm:tracking-[15px] uppercase text-gray-500 pb-2 mt-4  '>The name is <span className='font-semibold text-white'>Khoi</span></h1>
          <div>
          <h1 className='text-1xl sm:text-4xl lg:text-6xl font-semibold px-10'>I'm a <span className='mr-3'>{text}</span><Cursor cursorColor='red 2px' /></h1>
          </div>
          <div className='flex flex-col justify-center space-y-1 sm:flex-row pt-5 z-20'>
              <a href="#about">
              <button className='heroButton'>About</button>
              </a>

              <a href="#experience">
              <button className='heroButton'>Experience</button>
              </a>

              <a href="#skills">
              <button className='heroButton'>Skills</button>
              </a>
              
              <a href="#projects">
              <button className='heroButton'>Projects</button>
              </a>
          </div>
        </div>
        <BackgroundCircles/>
    </div>
  )
}

export default Hero