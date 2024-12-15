

const testimonalCard = [
    {
        image : "/about-1.jpg",
        name : "Natasha",
        desc : "Moscow , Russia",
        para : "Lorem Ispum is simple dummy text of the typesetting industry . Ispum has been."
    },
    {
        image : "/about-2.jpg",
        name : "Raymond Galario",
        desc : "UK London",
        para : "Lorem Ispum is simple dummy text of the typesetting industry . Ispum has been scrambled it to make a type book."
    },
    {
        image : "/about-3.jpg",
        name : "Benny Roll",
        desc : "USA , New York", 
        para : "Lorem Ispum is simple dummy text of the typesetting industry . Ispum has been scrambled."
    }
] 

const Testimonal = () => {
  return (
    <div className='md:mt-20  mt-10 lg:py-14 py-5 px-5 bg-[#D8A876] rounded-3xl xl:mx-64 lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5 mb-10 lg:mb-16'>
        <div className="head text-white text-center mb-7">
            <h2 className='lg:text-4xl font-medium sm:text-3xl text-2xl leading-snug tracking-wide'>What the People Thinks 
                <br />
                About Us
            </h2>
        </div>
        <div className='flex gap-5 lg:gap-6 overflow-x-scroll scrollbar-hide'>
            {testimonalCard.map((card)=>{
                return(
                    <div key={card.name} className='bg-white  group cursor-pointer flex-shrink-0 w-[16rem] sm:w-[17rem] lg:w-[18rem] xl:w-[15.5rem] lg:px-5 px-3 py-3 lg:py-8 rounded-2xl'>
                        <div className='w-full'>
                        <div className="head flex md:flex-row flex-col items-center ">
                            <div className="img inline-flex ">
                                <img src={card.image} alt="customer" className='rounded-full w-16 group-hover:brightness-110' />
                            </div>
                            <div className='md:ml-4 md:text-left text-center gap-0'>
                                <h3 className='text-[#292F36] group-hover:underline-offset-4 group-hover:underline text-base'>{card.name}</h3>
                                <p className='text-[#4D5053] text-xs'>{card.desc}</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className='text-[#4D5053] text-sm leading-normal tracking-wide'>{card.para}</p>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Testimonal