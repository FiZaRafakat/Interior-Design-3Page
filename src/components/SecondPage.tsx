"use client"
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const SecondPage = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Check screen size on client-side
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 640);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='sm:mt-24 xl:mx-64 lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5'>
        <div className='flex '>
            <div className="lg:h-[450px] lg:w-full h-[400px] w-[800px] relative overflow-hidden" style={{ backgroundImage: isMediumScreen ? 'url("/sec-page2.png")' : "none", backgroundSize: "contain",
            backgroundPosition: 'right' , backgroundRepeat : "no-repeat",  }}>
            <img src="/sec-page.png" alt="" className='xl:h-[450px] xl:w-[460px] max-[820px]:w-[430px] max-[800px]:h-[430px] h-[450px] w-[460px] absolute inset-0 z-10' />

           <div className="absolute inset-0 z-10 text-white lg:mt-20 md:mt-10 mt-20  ml-5">
          <div className="heading">
          <h2 className="md:text-4xl text-3xl md:leading-snug leading-tight">We create art 
                <br />
                for modern life
            </h2>
            <p className="md:leading-relaxed tracking-wide  md:max-w-[15rem] max-w-[19rem] text-sm">
            There are many variations of the passages of lorem Ispum from available, majority.
            </p>
          </div>

            <div className="flex mt-2">
            <button className="bg-white  md:p-5 p-3 rounded-full">
            <LuPhone className="text-[#CDA274] hover:text-[#C76904] size-8"/>
            </button>
            <div className=" flex flex-col  justify-center ml-5">
                <span className="md:text-lg tracking-wide">012345678</span>
                <span className="md:text-base text-sm">Call us Anytime</span>
            </div>
            </div>
            <button className='mt-5 flex items-center gap-2 hover:bg-[#C76904] bg-[#CDA274] rounded-xl md:px-6 md:py-4 px-3 py-2 text-sm'>
            <span>Get Free Estimate</span>
            <FaArrowRight />
            </button>
           </div>
           
            <div className='circle absolute right-[320px] -top-[5.5rem] border-[52px] border-white w-[750px] h-[750px] rounded-[30rem] rounded-b-none'> 
            </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage