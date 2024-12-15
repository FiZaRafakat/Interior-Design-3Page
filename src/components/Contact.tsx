import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { TfiEmail } from "react-icons/tfi";
import { LiaPhoneSolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoTwitter } from 'react-icons/io5';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='xl:mx-44 lg:mx-32 min-[500px]:mx-12 sm:mx-20 mx-2 sm:mb-10 mb-7 md:mb-20'>
        
       <div>
       <div className='lg:mt-14 mt-5 md:mt-7 md:mb-10 mb-5 flex justify-center text-center'>
        <h3 className='lg:text-4xl sm:text-3xl text-2xl  md:max-w-[35rem] max-w-[20rem] leading-snug text-[#292F36] tracking-wider'>We love meeting new people and helping them.</h3>
        </div>
      <div className='flex flex-col md:flex-row px-0 lg:gap-20 md:gap-10 gap-5'>
        <div className='flex flex-col lg:gap-10 gap-5 items-center'>
         <div className='flex lg:mt-16 md:mt-12 mt-3  flex-col gap-3 lg:gap-7'>
             <div className="email flex gap-7 items-center">
               <TfiEmail className='text-[#CDA274] size-5' />
               <span className='text-[#4D5053] tracking-wider'>info@selhono.com</span>
              </div>
             <div className="contact flex gap-7 items-center">
               <LiaPhoneSolid className='text-[#CDA274] size-5' />
               <span className='text-[#4D5053] tracking-wider'>+1 (378) 400-1234</span>
               </div>
             <div className="world flex gap-7 items-center">
               <GiWorld className='text-[#CDA274] size-5' />
               <span className='text-[#4D5053] tracking-wider'>www.selhono.com</span>
             </div>
        </div>
        <nav className='flex md:gap-6 gap-4 text-[#292F36] lg:justify-start justify-center'>
        <Link href="/" className='p-2 rounded-full border hover:text-[#C76904] border-white hover:border-[#C76904]'> 
               <FaFacebookF className=' size-4 md:size-5' />
          </Link>
          <Link href="/" className='p-2 rounded-full border hover:text-[#C76904] border-white hover:border-[#C76904]'>
               <IoLogoTwitter className=' size-4 md:size-5' />
          </Link>
          <Link href="/" className='p-2 rounded-full border hover:text-[#C76904] border-white hover:border-[#C76904]'>
                <FaLinkedinIn className=' size-4 md:size-5' /> 
          </Link>
          <Link href="/" className='p-2 rounded-full border hover:text-[#C76904] border-white hover:border-[#C76904]'>
                <FaInstagram className=' size-4 md:size-5' />
          </Link>
        </nav>
      </div>
     <form action="" className='lg:w-[600px] '>
     <div className='lg:mt-8 mt-5'>
     <div className='flex justify-between gap-5'>
       <label htmlFor="name" >
       <input
        type="text"
        id="name" placeholder='Name'
        className="border-b border-black sm:text-base text-sm placeholder-[#4D5053]  outline-none lg:w-[250px] md:w-[200px]  w-[140px]  lg:px-3 px-2 sm:py-2 py-1 lg:py-4 text-[#4D5053] tracking-widest peer"
         />
       </label>
       <label htmlFor="email" >
       <input
        type='email'
        id="email" placeholder='Gmail'
        className="border-b border-black sm:text-base text-sm placeholder-[#4D5053]  outline-none lg:w-[250px] md:w-[200px] w-[140px]   lg:px-3 px-2 sm:py-2 py-1 lg:py-4 text-[#4D5053] tracking-widest peer"
         />
       </label>
       </div>
       <div className='lg:mt-8 sm:mt-5 mt-3 flex gap-5 justify-between'>
       <label htmlFor="subject" >
       <input
        type="text"
        id="subject" placeholder='Subject'
        className="border-b placeholder-[#4D5053] sm:text-base text-sm border-black outline-none lg:w-[250px] md:w-[200px] w-[140px]    lg:px-3 px-2 sm:py-2 py-1 lg:py-4 text-[#4D5053] tracking-widest peer"
         />
       </label>
       <label htmlFor="phone" className=''>
       <input
        type='tel'
        id="phone" placeholder='Phone'
        className="border-b placeholder-[#4D5053] sm:text-base text-sm  border-black outline-none lg:w-[250px] md:w-[200px] w-[140px]  lg:px-3 px-2 sm:py-2 py-1 lg:py-4 text-[#4D5053] tracking-widest peer"
         />
       </label>
       </div>
       <div className='lg:mt-8 sm:mt-5 mt-3'>
       <label htmlFor="message" className=''>
       <textarea rows={6} cols={5}
        id="message" placeholder="Hello I am Intersted in.........."
        className="border-b border-black outline-none sm:text-base text-sm w-full md:px-3 px-2 sm:py-2 py-1 md:py-4 text-[#4D5053] tracking-widest placeholder-[#4D5053] peer"
         />
       </label>
       </div>
     </div>
       <div className='flex justify-end'>
       <button className='lg:mt-8 sm:mt-5 mt-3  flex items-center gap-2 bg-[#292F36] text-white rounded-xl  min-[400px]:px-6 px-4 py-2 min-[400px]:py-4 text-sm'>
            <span>Send Now</span>
            <FaArrowRight className='text-[#CDA274] hover:text-[#C76904]'/>
        </button>
        </div>
     </form>
        </div>
       </div>
       {/* Image */}
       <div className='md:mt-20 mt-7 relative'>
         <img src="/Photo.png" alt="location" className='rounded-[2rem] ' />
         <div className='absolute md:top-32 top-12 left-32 md:left-44'>
         <FaLocationDot className='text-[#CDA274] size-8' />
         </div>
       </div>
    </div>
  )
}

export default Contact