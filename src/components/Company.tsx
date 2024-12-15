import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";



const image = [
    {
        img : "/buffer.png",
    },{
        img : "/co-2.png"
    },{
        img : "/co-3.png"
    },{
        img : "/co-4.png"
    }
]

const Company = () => {
  return (
    <div className='mt-10 mb-6 xl:mx-64 lg:mx-40 min-[500px]:mx-20  sm:mx-20 mx-5'>
        <div className='flex justify-around flex-wrap items-center'>
           {
            image.map((img)=>{
                return (
                    <div key={img.img}>
                        <img src={img.img} alt="" className='lg:h-12 sm:h-9 h-7' />
                    </div>
                )
            })
           }
        </div>
    </div>
  )
}

export default Company