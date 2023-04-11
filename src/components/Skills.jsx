import React from 'react'
import Skill from './Skill'


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

const skills_list = [python, postgrest, django, rest, htmll, css, rect, ccc, numpy, pandas, plotly, jmp, tableu, matlab, inventor, cad]

const Skills = () => {
  return (
    <div className='h-screen flex flex-col items-center'>
        <h3 className='mt-24 uppercase tracking-[15px]  sm:tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='mt-6 uppercase tracking-[1px] sm:tracking-[3px] text-gray-500 text-sm'>Hover a skill for currency proficiency</h3>

        <div className='mt-6 grid grid-cols-4 gap-5'>
          {skills_list.map((item)=>{return <Skill skill_item = {item} />
            
          })}

        </div>
    </div>
  )
}

export default Skills