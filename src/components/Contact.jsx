import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from'@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("data:",data)
        window.location.href =`mailto:khoilucforeducation@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}.${data.message} (${data.mail})`;
    };

  return (
    <div className='h-screen flex relative flex-col text-center max-w-7lx px-10 justify-evenly mx-auto items-center'>
        <h3 className='mt-24 uppercase tracking-[20px] text-gray-500 text-2xl'>contact</h3>

        <div className='h-screen flex flex-col space-y-10 sm:space-y-5 mt-6'>
            <h4 className='text-base sm:text-3xl font-semibold text-center'>
                I have got just what you need. Lets talk
            </h4>

            <div className='space-y-5'>
                <div className='flex justify-center  items-center space-x-5'>
                    <PhoneIcon className='text [#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
                    <p className='text-sm sm:text-2xl'>+84 784189911</p>
                </div>
                <div className='flex justify-center  items-center space-x-5'>
                    <EnvelopeIcon className='text [#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
                    <p className='text-sm sm:text-2xl'>adriankme@gmail.com</p>
                </div>
                <div className='flex justify-center  items-center space-x-5'>
                    <MapPinIcon className='text [#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse'/>
                    <p className='text-sm sm:text-2xl'>Ho Chi Minh city, Viet Nam</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-72  sm:w-fit mx-auto'>
                <div className='flex space-x-2 w-full'>
                    <input {...register("name" ,{ required: true })} placeholder='Name' className='contactInputDiv' type='text'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input {...register("email" ,{ required: true })} placeholder='Email' className='contactInputDiv' type='text'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <input {...register("subject" ,{ required: true })} placeholder='Subject' className='contactInput' type='text'/>
                {errors.exampleRequired && <span>This field is required</span>}
                <textarea {...register("message")} placeholder='Message' className='contactInput'/>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-[#b3b3b3] hover:bg-[#F7AB0A]/40'>Submmit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact