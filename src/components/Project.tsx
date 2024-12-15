import { FaAngleRight } from "react-icons/fa6";

const ProjectCard = [
    {
        img : "/project-1.png",
        title : "Modern bedroom",
        desc : "Decor / Artchitecture",
    },{
        img : "/project-4.png",
        title : "Modern bedroom",
        desc : "Decor / Artchitecture",
    },{
        img : "/project-3.png",
        title : "Modern bedroom",
        desc : "Decor / Artchitecture",
    },{
        img : "/project-5.png",
        title : "Modern bedroom",
        desc : "Decor / Artchitecture",
    }
]

const Project = () => {
  return (
    <div className="xl:mx-64 lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5">
        <div className="lg:mb-40 md:mb-28 mb-8">
            <div className="head md:mt-20 mt-10 text-center">
                <h2 className='lg:text-4xl sm:text-3xl text-2xl font-medium text-[#292F36]'>Follow Our Projects</h2>
                <p className='text-[#4D5053] max-w-[30rem] md:leading-relaxed leading-snug md:text-base text-sm tracking-wide mt-2 md:mt-3 mx-auto'>It is a long established fact that a reader will be distracted by readable content of page looking at its layouts points.  </p>
            </div>
            <div className="mt-10 flex flex-wrap  gap-3 justify-center  lg:gap-10">
               { ProjectCard.map((project)=>{
                    return(
                       <div key={project.img} className="">
                         <div>
                            <img src={project.img} className="lg:h-[20rem] md:h-[18rem] hover:contrast-125 h-[20rem]" alt="bedroom pic" />
                         </div>
                         <div className="flex justify-between items-center mt-2">
                            <div className="head hover:cursor-pointer">
                                <h3 className="text-[#292F36] md:text-lg">{project.title}</h3>
                                <p className="text-[#4D5053] md:text-base text-sm leading-normal tracking-wide">{project.desc}</p>
                            </div>
                            <div className="bg-[#CDA274] hover:bg-[#C76904] p-2 md:p-3 rounded-full">
                            <FaAngleRight className="text-white size-4 md:size-5" />
                            </div>
                         </div>
                       </div>
                 ) })}
            </div>
        </div>
    </div>
  )
}

export default Project