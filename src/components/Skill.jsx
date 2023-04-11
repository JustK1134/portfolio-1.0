import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({skill_item}) => {
  return (
    <motion.div
            initial={{
            x: skill_item.directionLeft ? 50 : -50,
            opacity:0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}} className='group relative flex cursor-pointer'>
        <img

        className='rounded-full  border border-gray-500 object-contain w-12 h-12 sm:w-24 sm:h-24  filter group-hover:grayscale transition duration-300 ease-in-out'
        src={skill_item.logo}
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  w-12 h-12 sm:w-24 sm:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill_item.proficiency}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill