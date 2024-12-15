import React from 'react'

const ExperinceLine = () => {
  return (
    <div className='xl:mx-64 lg:mx-48 min-[500px]:mx-20  sm:mx-20 mx-5 md:mt-20 mt-10 lg:mb-20 mb-10 flex gap-y-3 flex-wrap justify-center items-center '>
        <div className='flex flex-col justify-center items-center group border-r md:px-10 px-5 cursor-pointer  border-[#CDA274]'>
            <h3 className='md:text-6xl  text-5xl text-[#CDA274] group-hover:text-[#C76904]'>12</h3>
            <p className='text-[#4D5053] md:text-base group-hover:text-[#292F36]  text-xs'>Years Of Experience</p>
        </div>
        <div className='flex flex-col justify-center items-center group border-r md:px-10 px-5 cursor-pointer border-[#CDA274]'>
            <h3 className='md:text-6xl text-5xl text-[#CDA274] group-hover:text-[#C76904]'>1074</h3>
            <p className='text-[#4D5053] md:text-base group-hover:text-[#292F36] text-xs'>Success Project</p>
        </div>
        <div className='flex flex-col justify-center items-center group border-r md:px-10 px-5 cursor-pointer border-[#CDA274]'>
            <h3 className='md:text-6xl text-5xl text-[#CDA274] group-hover:text-[#C76904]'>98</h3>
            <p className='text-[#4D5053] md:text-base group-hover:text-[#292F36] text-xs'>Active Project</p>
        </div>
        <div className='flex flex-col justify-center items-center group cursor-pointer md:px-10 px-5'>
            <h3 className='md:text-6xl text-5xl text-[#CDA274] group-hover:text-[#C76904]'>583</h3>
            <p className='text-[#4D5053] md:text-base group-hover:text-[#292F36] text-xs'>Happy Customers</p>
        </div>
    </div>
  )
}

export default ExperinceLine