import React from 'react'
import {motion} from 'framer-motion'
import pic from '../assets/PersonPic.png'

const About = () => {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h1 className='mt-16 md:absolute md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-3 '>About</h1>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{duration: 1.2}}
        viewport={{once:true}} src='https://media.licdn.com/dms/image/C4E03AQGs6mmGR95b1A/profile-displayphoto-shrink_400_400/0/1550494623138?e=1686787200&v=beta&t=89-9ZEZyQk_IGoQUjyO-QEl1ARlk5r9TGF4EIfmL6-s'
        className=' md:mb-10 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg sm:w-52 sm:h-52 md:w-95' />

        <div className='space-y-5 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Background
            </h4>
            <p className='text-base'>
                I am a student of Vietnamese - German University, majoring in Mechatrocnic Engineering in Viet Nam. With more than 2 years of working, mostly as a Process and Product Engineer in Semiconductor Industry, I am well-versed in many aspect of Engineering, especially in Data Analytics, Programing and Reporting. With great enthusiasm, I am eager to work, share and learn from others.
            </p>
        </div>
    </div>
  )
}

export default About