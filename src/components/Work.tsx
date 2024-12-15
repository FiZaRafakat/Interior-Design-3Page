import React from 'react'

const Work = () => {
  return (
    <div className='xl:mx-64 lg:mx-32 min-[500px]:mx-12 sm:mx-20 mx-2 mb-10 md:mb-32'>
         <div className="head xl:mt-28 mt-10 text-center">
                <h2 className='lg:text-4xl text-3xl text-[#292F36]'>How We Work</h2>
                <p className='text-[#4D5053] xl:max-w-[40rem] max-w-[30rem] md:text-base text-sm leading-relaxed tracking-wide mt-3 mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
        </div>
        <div className="work">
            <div className="1stbox flex items-center lg:gap-14 gap-6 max-[450px]:gap-2 mt-5 sm:mt-10 lg:mt-20">
                <div className="img">
                    <img src="/service-1.png" alt="service-1"className='w-[400px]' data-aos="zoom-in"/>
                </div>
                <div className="text lg:max-w-[23rem] max-w-[22rem] max-[890px]:w-[20rem] flex  flex-col ">
                    <h3 className='lg:text-[5rem] text-[4.5rem] max-[450px]:text-[3.5rem] text-[#C76904] text-right '>01</h3>
                    <div className='lg:mt-10 md:mt-5'>
                        <h4 className='lg:text-2xl text-xl max-[450px]:text-lg text-[#292F36]'>Concept & Details</h4>
                        <p className='text-[#4D5053] leading-relaxed tracking-wide  md:mt-2 lg:text-base text-sm max-[450px]:text-xs mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
                    </div>
                </div>
            </div>
            <div className="2ndbox flex flex-row-reverse items-center lg:gap-14 gap-6 max-[450px]:gap-2 mt-5 sm:mt-10 lg:mt-20">
                <div className="img">
                    <img src="/service-2.png" alt="service-2"className='w-[400px]' data-aos="zoom-in" />
                </div>
                <div className="text lg:max-w-[23rem] max-w-[22rem] max-[890px]:w-[20rem] flex  flex-col ">
                    <h3 className='lg:text-[5rem] text-[4.5rem] max-[450px]:text-[3.5rem] text-[#C76904] text-left '>02</h3>
                    <div className='lg:mt-10 md:mt-5'>
                        <h4 className='lg:text-2xl text-xl max-[450px]:text-lg text-[#292F36]'>Idea for Work</h4>
                        <p className='text-[#4D5053] leading-relaxed tracking-wide md:mt-2 lg:text-base max-[450px]:text-xs text-sm mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
                    </div>
                </div>
            </div>
            <div className="3rdbox flex items-center lg:gap-14 gap-6 max-[450px]:gap-2 mt-5 sm:mt-10 lg:mt-20">
                <div className="img">
                    <img src="/service-3.png" alt="service-3"className='w-[400px]' data-aos="zoom-in" />
                </div>
                <div className="text lg:max-w-[23rem] max-w-[22rem] max-[890px]:w-[20rem] flex  flex-col ">
                    <h3 className='lg:text-[5rem] text-[4.5rem] max-[450px]:text-[3.5rem] text-[#C76904] text-right '>03</h3>
                    <div className='lg:mt-10 md:mt-5'>
                        <h4 className='lg:text-2xl text-xl max-[450px]:text-lg text-[#292F36]'>Design</h4>
                        <p className='text-[#4D5053] leading-relaxed tracking-wide  md:mt-2 lg:text-base max-[450px]:text-xs text-sm mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
                    </div>
                </div>
            </div>
            <div className="4thbox flex flex-row-reverse items-center gap-6 lg:gap-14 max-[450px]:gap-2 mt-5 sm:mt-10 lg:mt-20">
                <div className="img">
                    <img src="/service-4.png" alt="service-4"className='w-[400px]' data-aos="zoom-in" />
                </div>
                <div className="text lg:max-w-[23rem] max-w-[22rem] max-[890px]:w-[20rem] flex flex-col ">
                    <h3 className='lg:text-[5rem] text-[4.5rem] max-[450px]:text-[3.5rem] text-[#C76904] text-left '>04</h3>
                    <div className='lg:mt-10 md:mt-5'>
                        <h4 className='lg:text-2xl text-xl max-[450px]:text-lg text-[#292F36]'>Perfection</h4>
                        <p className='text-[#4D5053] leading-relaxed tracking-wide  md:mt-2 max-[450px]:text-xs lg:text-base text-sm mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work