import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

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
    },
    {
      title : '2d/3d Art Work',
      para : "There are many variations of the passages of lorem Ispum from available, majority.",
      icon : <FaArrowRight/>
    },{
      title : "Outdoor Work",
      para : "There are many variations of the passages of lorem Ispum from available, majority.",
      icon : <FaArrowRight/>
    },
    {
        title : "Decoration Work",
        para : "There are many variations of the passages of lorem Ispum from available, majority.",
        icon : <FaArrowRight/>
    }
]

const ServicesAbout = () => {
  return (
    <div className='xl:mx-60 lg:mx-32 min-[500px]:mx-12 sm:mx-20 mx-2 xl:mt-20 mt-10 mb-10 xl:mb-20'>
         <div className='lg:mt-20 mt-5 gap-3 gap-y-2 flex flex-wrap justify-center items-center'>
      {   Cards.map((card)=>{
        return (
           <div key={card.title} className='xl:w-[250px] sm:w-[230px] w-[200px] max-[560px]:w-[160px] max-[400px]:w-[150px] max-[330px]:w-[280px] xl:mx-2 xl:my-5 shadow-md hover:shadow-md hover:shadow-black/50 shadow-black/30 rounded-3xl hover:bg-[#F9F9F9] group cursor-pointer'>
             <div  className='text-center lg:px-6 px-4 md:py-7 py-4 xl:py-10'>
              <h2 className='text-[#292F36] lg:text-xl sm:text-lg text-base group-hover:text-[#C76904]'>{card.title}</h2>
              <p className='lg:mt-3 mt-1 font-extralight leading-normal tracking-wide text-[#4D5053] md:text-base min-[500px]:text-sm text-xs group-hover:text-[#C76904]'>{card.para}</p>
              <button className='inline-flex items-center gap-2 mt-5  xl:mt-10'>
                <span className='text-black md:text-base min-[500px]:text-sm text-xs  group-hover:text-[#C76904]'>Read more</span>
                <span className='text-black hover:text-[#C76904] group-hover:text-[#C76904]'>{card.icon}</span>
              </button>
            </div>
           </div>
        )})}
      
     </div>


    </div>
  )
}

export default ServicesAbout