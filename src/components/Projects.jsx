import React from 'react'
import {motion} from 'framer-motion'
import image_project_1 from '../assets/project1.png'
import image_project_2 from '../assets/project2.png'
import image_project_3 from '../assets/project3.png'
import image_project_4 from '../assets/project4.png'
import image_project_5 from '../assets/project5.png'
import cert_project_1 from '../assets/cert1.png'
import cert_project_2 from '../assets/cert2.png'
import cert_project_3 from '../assets/cert3.png'
import cert_project_4 from '../assets/cert4.png'
import cert_project_5 from '../assets/cert5.png'

const python ={directionLeft: true,logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png', proficiency: '70%'}
const postgrest ={directionLeft: true, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', proficiency: '80%'}
const django = {directionLeft: true, logo:'https://nedbatchelder.com/pix/django-icon-256.png', proficiency:'50%'}
const rest = {directionLeft: true, logo:'https://okli.in/wp-content/uploads/2021/04/resticon-removebg-preview.png', proficiency: '50%'}

const htmll = {directionLeft: false, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',proficiency:'70%'}
const css = {directionLeft: false, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png', proficiency:'60%'}
const rect = {directionLeft: false, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', proficiency:'60%'}
const ccc = {directionLeft: false, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',proficiency:'70%'}
const numpy = {directionLeft: true, logo:'https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png', proficiency:'70%'}
const pandas = {directionLeft: true, logo:'https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png',proficiency:'60%'}
const plotly = {directionLeft: true, logo:'data:image/png;base64,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',proficiency:'70%'}
const jmp = {directionLeft: true, logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wfAET-as7OugTYONWjLrPG5Wu5oaYVqr84UkVb1QrRPKMC3jAt0IWJrwhKAU6vG0938&usqp=CAU',proficiency:'90%'}
const tableu = {directionLeft: false, logo:'data:image/png;base64,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', proficiency:'70%'}
const matlab = {directionLeft: false, logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/267px-Matlab_Logo.png',proficiency:'50%'}
const inventor = {directionLeft: false, logo:'https://gskygo.com/img/product/origin/full_gskygo_phan-mem-inventor-97-2021108134056.png', proficiency:'80%'}
const cad = {directionLeft: false, logo:'https://logos-world.net/wp-content/uploads/2020/12/Autocad-Logo.png', proficiency: '70%'}
const flask = 'data:image/png;base64,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'

const project_1 = {live:true, image:image_project_1, cert:cert_project_1,title:'Adidas Store Clone.', description:'This is an E-commercial Website clonning from Adidas web. Most of the button is clickable. You can do some simple search, filter, create a cart, delete a cart, check out and track order.',link:'https://www.linkedin.com/in/luckhoi/details/certifications/', skills:[django.logo, rest.logo, rect.logo]}
const project_2 = {live:true, image:image_project_2, cert:cert_project_2, title:'Restaurant Booking Page.', description:'This is a simple landing page using react and simple django.', link:'https://www.linkedin.com/in/luckhoi/details/certifications/' ,skills:[rect.logo,css.logo, htmll.logo]}
const project_3 = {live:true, image:image_project_3, cert:cert_project_3, title:'Data Analytics - Suicide Rate.', description:'A Dashboard to summary the status of suicides around the world from 1985-2015.', link:'https://www.linkedin.com/in/luckhoi/details/certifications/', skills:[numpy.logo, pandas.logo, plotly.logo]}
const project_4 = {live: false, image:image_project_4, cert:cert_project_4, title:'Clothing Store.', description:'This is a simple clothing store with pure Html, Css and Flask.', link:'https://www.linkedin.com/in/luckhoi/details/certifications/', skills:[htmll.logo,css.logo, flask]}
const project_5 = {live: false, image:image_project_5, cert:cert_project_5, title:'Computer Vision in Failure Detection.', description:'A graduation project using machine learning algorithm Mask R-CNN, with built-in framework OpenCV, TensorFlow, Keras and Flask server as backend processor. Output displayed by MCU Ras Pi and ESP8266.', link:'https://www.linkedin.com/in/luckhoi/details/certifications/', skills:[ccc.logo, python.logo, numpy.logo, pandas.logo]}

const project_list = [project_1, project_2, project_3, project_4, project_5]

const Projects = () => {
  return (
    <div className='h-screen relative flex flex-col text-left flex-col max-w-full justify-evenly mx-auto items-center '>
        <h3 className='mt-24 mb-12 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='h-screen w-full flex cursor-pointer overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
            {project_list.map((item, index)=>{return (
            <div key={index} className='w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center '>

                <div className='flex flex-col justify-center space-y-1 sm:flex-row sm:justify-center sm:space-x-5'>
                    <motion.img initial={{y:-30, opacity:0}} transition={{duration: 1.2}} whileInView={{opacity:1, y:0}} viewport={{once: true}} className={index === 4 ? 'w-44 sm:w-72 md:w-92 z-20 object-contain object-center border border-[#F7AB0A] border-4':'w-44 sm:w-72 md:w-92 z-20 object-cover object-center border border-[#F7AB0A] border-4'} src={item.image}/>
                    <motion.img initial={{y:-30, opacity:0}} transition={{duration: 1.2}} whileInView={{opacity:1, y:0}} viewport={{once: true}} className='w-44 sm:w-72 md:w-92 z-20 object-cover object-center border border-[#F7AB0A] border-4' src={item.cert}/>
                </div>
                

                <div className='space-y-5 px-0 md:px-10 max-w-5xl flex flex-col items-center'>
                    <div className='flex space-x-10 justify-center mt-2'>
                        {item.skills.map((it) =>{ return(
                            <img className='w-7 h-7 sm:w-10 sm:h-10 rounded-full object-contain object-center mb-0' src={it}/>
                        )                
                        })}
                    </div>
                    <h4 className='text-lg sm:text-3xl lg:text-4xl font-semibold text-center'>
                        <span className='underline'>Case {index+1} of {project_list.length}:</span> {item.title}
                    </h4>
                    <p className='text-sm w-64 sm:w-96 md:w-full sm:text-lg text-center'>{item.description}</p>
                    
                </div>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-[#b3b3b3] hover:bg-[#F7AB0A]/40' ><a href={item.link}> {item.live ? 'Check it out. Its live!': 'Check it on Git'}</a></button>
            </div>
            )})}


        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects