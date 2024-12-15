import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const HomeContact = () => {
  return (
    <div className='lg:mt-20 '>
        <div className='w-full sm:h-[300px] h-[200px] ' style={{backgroundImage : 'url("/first-footer.png") ', backgroundSize: "contain",
            backgroundPosition: "center" , backgroundRepeat : "no-repeat"}}>
      <div className='ld:pt-16 md:pt-20 sm:pt-24 pt-16 text-white'>
      <div className='flex flex-col items-center'>
            <h3 className='lg:text-4xl md:text-2xl sm:text-xl  text-lg lg:tracking-wide'>Wanna join the interno?</h3>
            <p className='md:text-base lg:tracking-widest sm:text-sm text-xs   sm:my-2 lg:my-3'>It is a long established fact that will be distracted.</p>
            <div>
            <button className='md:mt-5 sm:mt-2 mt-1 inline-flex items-center md:gap-2 gap-1 bg-[#CDA274] hover:bg-[#C76904] rounded-xl sm:px-3 px-2 md:px-6 sm:py-2 py-1 lg:py-4 text-xs md:text-sm shadow-2xl'>
            <span>Contact With Us</span>
            <FaArrowRight />
            </button>
            </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default HomeContact