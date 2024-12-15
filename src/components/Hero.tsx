import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Cards = [
    {
        title : "Project Plan", 
        para : "There are many variations of the passages of lorem Ispum from available, majority.",
        icon : <FaArrowRight/>
    },
    {
        title : "Interior Work", 
        para : "There are many variations of the passages of lorem Ispum from available, majority.",
        icon : <FaArrowRight/>
    },
    {
        title : "Realization", 
        para : "There are many variations of the passages of lorem Ispum from available, majority.",
        icon : <FaArrowRight/>
    }
]

const Hero = () => {
  return (
    <div className='mb-10 xl:mx-64 lg:mx-32 min-[500px]:mx-20 sm:mx-20 mx-2'>
     
     <div className='flex justify-center xl:mt-20 lg:mt-5  sm:mt-10 mt-2 '>
     <div style={{backgroundImage : 'url("/hero.png") ', backgroundSize: "contain",
            backgroundPosition: "center" , backgroundRepeat : "no-repeat"}} className='w-full lg:h-[500px] md:h-[400px] sm:h-[320px]  min-[500px]:h-[280px] h-[250px] max-[400px]:h-[230px]'>
        

        <div className='lg:mt-16 mt-8 lg:ml-28 xl:ml-20 ml-5 max-[500px]:ml-12 lg:text-left  sm:text-center text-white'>
        <h1 className=' lg:text-4xl sm:text-3xl text-2xl max-[320px]:text-xl  lg:leading-snug leading-tight'>{`Let's make your `}
        <br/> home beautiful together
         </h1>
        <p className='max-w-[23rem] lg:tracking-wide max-[320px]:text-xs sm:mx-auto  min-[1024px]:mx-0 max-[768px]:mx-0 tracking-normal md:text-base text-sm  lg:mt-3 mt-2'>
            There are many varaitions of the passages of Lorem Ispum from available , majority. 
        </p>
        <button className='md:mt-5 mt-2 flex items-center gap-2 bg-[#CDA274] min-[1024px]:mx-0  sm:mx-auto hover:bg-[#C76904] rounded-xl md:px-6 md:py-4 px-3 py-2 text-sm'>
           <span>Get Started</span>
            <FaArrowRight />
        </button>
        </div>

    </div>

     </div>


    {/* About */}
     <div className='lg:mt-20 mt-10 flex mx-1 md:mx-3 max-[500px]:gap-4 max-[440px]:gap-2 max-[500px]:justify-center max-[500px]:flex-wrap'>
    {   Cards.map((card)=>{
        return (
            <div key={card.title} className='md:text-center px-4 max-[500px]:w-[200px] max-[440px]:w-[140px]   group cursor-pointer '>
              <h2 className='text-[#292F36] sm:text-xl text-base group-hover:text-[#C76904]'>{card.title}</h2>
              <p className='sm:mt-3 sm:mb-3 my-1 font-extralight md:leading-normal tracking-wide sm:text-sm text-xs text-[#4D5053] group-hover:text-[#C76904]'>{card.para}</p>
              <button className='inline-flex items-center  gap-2'>
                <span className='text-[#4D5053] md:text-base sm:text-sm text-xs group-hover:text-[#C76904]'>Read more</span>
                <span className='text-black hover:text-[#C76904] group-hover:text-[#C76904]'>{card.icon}</span>
              </button>
            </div>
        )})}
      
     </div>

    </div>
  )
}

export default Hero