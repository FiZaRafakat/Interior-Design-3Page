import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
   <div className='xl:mx-[14.5rem] lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5'>
     <div className='md:mb-16 mb-5 sm:mb-8 mt-10 flex md:flex-nowrap flex-wrap gap-y-5 lg:gap-10  xl:gap-16 gap-5'>
        <div className="logo max-w-[18rem]">
          <div className='w-40'>
            <img src="/SELHONO.png" alt="logo" />
          </div>
          <div>
            <p className='md:text-base text-sm text-[#4D5053] tracking-wider my-3 md:my-6'>It is a long established fact that a reader will be distracted lookings.</p>
            <nav className='flex md:gap-6 gap-4 text-[#292F36]'>
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
        </div>
        <div className="Pages">
         <h3 className='text-[#292F36] md:text-xl text-lg mb-3 md:mb-6'>Pages</h3>
         <nav className='flex flex-col md:text-base text-sm lg:gap-8 sm:gap-5 gap-3 text-[#4D5053] tracking-wider'>
            <p ><Link href="/about" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>About Us</Link></p>
            <p ><Link href="/projects" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Our Projects</Link></p>
            <p ><Link href="/FAQ" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>FAQ</Link></p>
            <p ><Link href="/contact" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Contact Us</Link></p>
            <p ><Link href="/services" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Services</Link></p>
         </nav>
        </div>
        <div className="services">
        <h3 className='text-[#292F36] md:text-xl text-lg mb-3 md:mb-6'>Services</h3>
         <nav className='flex flex-col md:text-base text-sm lg:gap-8 sm:gap-5 gap-3 text-[#4D5053] tracking-wider'>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Kitchen</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Living Area</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Bathroom</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Dining Hall</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>Bedroom</Link></p>
         </nav>
        </div>
        <div className="contact max-w-[13rem]">
        <h3 className='text-[#292F36] md:text-xl text-lg mb-3 md:mb-6'>Contact</h3>
         <nav className='flex flex-col md:text-base text-sm lg:gap-8 sm:gap-5 gap-3 text-[#4D5053] tracking-wider'>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>55 East Birchwood Ave. Brooklyn, New York 11201</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>contact@selhono.com</Link></p>
            <p ><Link href="/" className='hover:underline hover:underline-offset-4 hover:text-[#C76904]'>(123) 456 - 7890</Link></p>
         </nav>
        </div>
    </div>
    <div className='md:my-3 my-2 text-center'>
        <p className='text-[#4D5053] md:text-sm text-xs  tracking-widest'>Copyright &copy; <a href="https://portfolio-milestone2-seven.vercel.app/"><span className='text-[#292F36] hover:text-[#C76904]'>Fiza Rafakat</span></a> </p>
    </div>
   </div>
  )
}

export default Footer