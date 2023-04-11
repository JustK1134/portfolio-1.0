import React from 'react'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
// w-[385px] md:w-[984px] xl:w-[1400px] 2xl:w-[2520px]
const ExperienceCard = ({experience}) => {
    // w-[500px] md:w-[600px] xl:w-[900px]
  return (
    <article className='flex flex-col w-screen  rounded-lg items-center space-y-7 flex-shrink-0  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 cursor-pointer '>
        <motion.img src={experience.image_company}
        className='h-32 w-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-top mb-0 '
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            y:0,
            opacity:1,
        }}
        viewport={{ once: true}} />

        <div className='px-0 md:px-10 sm:ml-24   '>
            {/* <div className='flex flex-col ml-24'> */}
                <h4 className='text-3xl font-light mt-0'>{experience.title}</h4>
                <p className='font-bold text-1xl mt-0'>{experience.company}</p>
                <div className='flex space-x-2 mt-2'>
                    {experience.skills.map((item) =>{ return(
                        <img className='w-10 h-10 rounded-full object-contain object-center mb-0' src={item}/>
                    )                
                    })}
                </div>
                {/* <div className='flex space-x-2 mt-2'>
                    <img className='w-10 h-10 rounded-full' src='https://media.licdn.com/dms/image/C560BAQFi30eQoynqxw/company-logo_200_200/0/1628089032445?e=1689206400&v=beta&t=hqFBebzThMHHzcldMNCObH0_KKfRq0tBLwUTQnoB38Y'/>
                    <img className='w-10 h-10 rounded-full' src='https://media.licdn.com/dms/image/C560BAQFi30eQoynqxw/company-logo_200_200/0/1628089032445?e=1689206400&v=beta&t=hqFBebzThMHHzcldMNCObH0_KKfRq0tBLwUTQnoB38Y'/>
                    <img className='w-10 h-10 rounded-full' src='https://media.licdn.com/dms/image/C560BAQFi30eQoynqxw/company-logo_200_200/0/1628089032445?e=1689206400&v=beta&t=hqFBebzThMHHzcldMNCObH0_KKfRq0tBLwUTQnoB38Y'/>
                </div> */}
                <p className='uppercase py-2 text-gray-300 text-sm sm:text-base'>Started work: {experience.start} - End: {experience.end}</p>
                <ul className='list-disc space-y-4 ml-5 text-md w-60 sm:w-96  text-xs sm:text-base'>
                    <li>{experience.summary_point_1}</li>
                    <li>{experience.summary_point_2}</li>
                    <li>{experience.summary_point_3}</li>
                </ul>
            {/* </div> */}
        </div>
    </article>
  )
}

export default ExperienceCard