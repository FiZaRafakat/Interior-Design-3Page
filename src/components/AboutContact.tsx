import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const AboutContact = () => {
  return (
    <div className='md:mt-24 mt-10 md:mb-40 mb-10 xl:mx-64 lg:mx-48 min-[500px]:mx-20  sm:mx-20 mx-5'>
     <div className='flex justify-center items-center'>
     <h4 className='md:text-3xl text-2xl text-[#292F36] max-w-[25rem] text-center tracking-wide'>
        {`Creative Project ? Let's have a productive talk.`}
     </h4>
     </div>
     <form action="">
     <div className='md:mt-14 mt-7'>
     <div className='flex justify-between flex-wrap gap-y-5 sm:flex-nowrap'>
       <label htmlFor="name" className='relative block'>
       <input
        type="text"
        id="name" placeholder='Name'
        className="border-b border-black outline-none lg:max-w-[350px] md:w-[290px] w-full md:px-3 px-2 py-3 md:py-4 placeholder-[#4D5053] text-[#4D5053] tracking-widest peer"
         />
       </label>
       <label htmlFor="email" className='relative block'>
       <input
        type='email'
        id="email" placeholder='Gmail'
        className="border-b border-black outline-none lg:max-w-[350px] md:w-[290px] w-full md:px-3 px-2 py-3 md:py-4 placeholder-[#4D5053] text-[#4D5053] tracking-widest peer"
         />
       </label>
       </div>
       <div className='xl:mt-24 md:mt-16 sm:mt-8 mt-5'>
       <label htmlFor="message" className='relative block'>
       <input
        type="text"
        id="message" placeholder='Message'
        className="border-b border-black outline-none w-full md:px-3 px-2 py-3 md:py-4 text-[#4D5053] placeholder-[#4D5053] tracking-widest peer"
         />
       </label>
       </div>
     </div>
       <div className='flex justify-center'>
       <button className='mt-10 group flex items-center gap-2 bg-[#292F36] text-white rounded-xl px-6 py-4 text-sm'>
            <span>Send Now</span>
            <FaArrowRight className='group-hover:text-[#CDA274] '/>
        </button>
        </div>
     </form>
    </div>
  )
}

export default AboutContact