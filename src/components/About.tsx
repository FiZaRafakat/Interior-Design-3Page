import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='lg:mt-20 mt-10 xl:mx-52 lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5 mb-10 md:mb-10 xl:mb-20'>
        {/* Heading */}
      <div className='flex flex-col justify-center items-center text-center '>
     <div className=' px-3 border-x-2 border-[#4D5053]'>
     <h3 className='max-w-[38rem] md:text-3xl sm:text-2xl text-lg text-[#292F36] cursor-pointer'>{`I like an interior that defines labeling. I don't really want someone to walk into a room and know that i did it. `}</h3>
     <h4 className='uppercase text-[#4D5053] md:text-base text-sm tracking-wider cursor-pointer mt-5'>Buuny Williams</h4>
     </div>
      </div>
      {/* What we do ? */}
      <div className='md:mt-24 mt-16'>
       <div className='flex md:flex-row flex-col justify-center items-center'>
       <div className="head lg:max-w-[25rem] max-w-[20rem] lg:mr-0 md:mr-4 mb-5 md:mb-0">
            <h3 className=' lg:text-4xl md:text-3xl text-2xl text-[#292F36]'>What We Do</h3>
            <p className='text-[#4D5053] tracking-wider lg:mt-5 mt-2 lg:pr-8 leading-snug'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layouts the points of using that is has a more-or-less normal.</p>
            <button className='md:mt-7 group mt-3 flex items-center gap-1 md:gap-2 bg-[#292F36] text-white rounded-xl md:px-6 px-3 md:py-4 py-2 text-xs sm:text-sm'>
            <span>Our Concept</span>
            <FaArrowRight className='group-hover:text-[#CDA274]' />
            </button>
        </div>
        <div>
            <img src="/what we do.png" alt="" className='md:h-[400px] hover:contrast-125 md:w-[500px] sm:h-[300px] h-[250px]'/>
        </div>
       </div>
       {/* End Result */}
       <div className='lg:mt-20 mt-8 flex md:flex-row flex-col-reverse justify-center lg:gap-10 sm:gap-8 gap-3  items-center'>
       <div>
            <img src="/end-result.png" alt="" className='md:h-[400px] hover:contrast-125 md:w-[550px] sm:h-[300px] h-[250px]'/>
        </div>
       <div className="head max-w-[20rem] ">
            <h3 className='lg:text-4xl md:text-3xl text-2xl text-[#292F36]'>The End Result</h3>
            <p className='text-[#4D5053] tracking-wider lg:mt-5 mt-2 leading-snug'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layouts the points of using that is has a more-or-less normal.</p>
            <button className='md:mt-7 mt-3 group flex items-center gap-1 md:gap-2 bg-[#292F36] text-white rounded-xl md:px-6 px-3 md:py-4 py-2 text-xs sm:text-sm'>
            <span>Our Portfolio</span>
            <FaArrowRight className='group-hover:text-[#CDA274]'/>
            </button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default About