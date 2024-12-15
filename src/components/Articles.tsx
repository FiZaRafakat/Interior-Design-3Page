import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const ArticlesCard = [
  {
    img : "articles-1.png",
    text : "Kitchen Design",
    title : "Let's Get Solution for Building Construction Work",
    date : "26 December,2022"
  },{
    img : "articles-2.png",
    text : "Living Design",
    title : "Low Cost Latest Invented Interior Designing Ideas",
    date : "22 November,2023"
  },{
    img : "artciles-3.png",
    text : "Interior Design",
    title : "Best for Any Office and Business Inerior Solution",
    date : "4 December,2023"
  }
]

const Articles = () => {
  return (
   <div className='xl:mx-64 lg:mx-48 min-[500px]:mx-20  sm:mx-20 mx-5 mb-5'>
     <div className='mx-auto flex flex-col items-center'>
        <div className="head lg:mt-20 mt-4 text-center">
            <h2 className='lg:text-4xl sm:text-3xl text-2xl text-[#292F36]'>Articles & News</h2>
            <p  className='text-[#4D5053] max-w-[30rem] md:leading-relaxed leading-snug md:text-base text-smtracking-wide mt-3 mx-auto'>It is a long established fact that a reader will be dirtracted by readable content of a page when looking at its layout the points of using.</p>
        </div>
        <div className='lg:mt-16 mt-8 flex gap-4 lg:flex-nowrap justify-center flex-wrap '>
         { ArticlesCard.map((card)=>{
            return(
               <div key={card.title} className='border-2 lg:max-w-[305px] w-[280px]  flex-shrink-0 rounded-[3rem] hover:bg-[#E7E7E7]'>
                <div className='lg:px-3 px-4 mx-auto md:pt-2 pt-1 pb-6'>
                  <div className="img lg:w-[250px] lg:h-[240px] w-[240px] h-[240px]  relative" style={{backgroundImage : `url(${card.img})`, backgroundSize: "contain", backgroundPosition: "center" , backgroundRepeat : "no-repeat"}}>
                     <p className='absolute bottom-7 ml-3 bg-black/50 text-white  rounded-2xl rounded-bl-none text-sm px-3 py-1 lg:py-2'>{card.text}</p>
                  </div>
                   <div className="head lg:max-w-[270px] w-[250px]">
                    <p className='lg:text-2xl sm:text-xl text-lg leading-snug tracking-wide text-[#292F36]'>{card.title}</p>
                  <div className='flex justify-between items-center'>
                      <p className='text-[#4D5053] lg:text-sm text-xs tracking-wider'>{card.date}</p>
                    <button>
                      <div className="bg-[#CDA274] hover:bg-[#C76904]  p-2 lg:p-3 rounded-full">
                            <FaAngleRight className="text-white size-3 md:size-5" />
                      </div>
                    </button>
                  </div>
                   </div>
                </div>

               </div>
            )
          })
         }
        </div>
    </div>
   </div>
  )
}

export default Articles