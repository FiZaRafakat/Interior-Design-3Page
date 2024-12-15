import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Page = () => {
  return (
    <div>
        <Header/>
        <div className='xl:mx-60 lg:mx-32 min-[500px]:mx-12 sm:mx-20 mx-2 mb-10'>
         <div className='lg:mt-20 md:mt-10 mt-3 flex sm:flex-row items-center flex-col justify-center '>
            <div className="img">
                <img src="/404.png" alt="404Error" className='md:w-[450px] w-[300px] ' />
            </div>
            <div className="error flex justify-end group sm:mt-40 flex-col">
                <h2 className='text-[#CDA274] text-[4.5rem] md:text-[7rem] group-hover:text-[#C76904]'>404</h2>
                <p className='text-[#292F36] max-w-[18rem] tracking-wide'>We are Sorry, but the page you requested was not found.</p>
                <Link  href="/" className='mt-4 w-fit   flex items-center gap-2 bg-[#292F36] text-white rounded-xl  sm:px-6 px-4 py-2 sm:py-4 text-sm'>
                            <span>Back To Home</span>
                            <FaArrowRight className=' group-hover:text-[#C76904]'/>
                </Link>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Page