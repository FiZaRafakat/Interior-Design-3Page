import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ_f = () => {
  return (
    <div className="xl:mx-60 lg:mx-32 min-[500px]:mx-12 sm:mx-20 mx-2 lg:mt-24 sm:mt-12 mt-8 mb-10 lg:mb-28">
       <div className="lg:mb-20 sm:mb-10 mb-5">
       <div>
       <h3 className="text-center md:text-4xl sm:text-3xl text-2xl lg:mb-10 md:mb-7 mb-5 text-[#292F36] ">Every Question Answered</h3>
       </div>
       <div className="flex md:flex-row flex-col justify-center items-center gap-10">
       <div>
        <Accordion type="single" collapsible className="max-w-[27rem]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">What is the Hipcouch Interior Design Service?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">So, how exactly does this work?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">Which cities do you currently operate in?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">Hipcouch Interior Design Service?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">What kind of  interior designers do you have?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
        </div>
        <div className="img">
            <img src="1stFAQ.png" alt="Every Question Answered" className="md:w-[400px] sm:w-[300px] w-[260px]" />
        </div>
       </div>
       </div>

       {/* 2nd Page */}
       <div className="lg:mb-20 sm:mb-10 mb-5 lg:mt-20 sm:mt-10 mt-5">
       <div>
       <h3 className="text-center md:text-4xl sm:text-3xl text-2xl lg:mb-10 md:mb-7 mb-5 text-[#292F36] ">Project Related Questions</h3>
       </div>
       <div className="flex md:flex-row-reverse flex-col justify-center  items-center gap-10">
       <div>
        <Accordion type="single" collapsible className="lg:w-[27rem] md:w-[20rem] w-[20rem] max-[340px]:w-[17rem]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">How long does it take ?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">Can I use my existing furnishings?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">I put into redesigning my interior?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">What do your services cost?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[#292F36] lg:text-lg text-base tracking-wide leading-snug">Do you offer free consultations?</AccordionTrigger>
            <AccordionContent className="text-[#4D5053] lg:text-base text-sm max-[400px]:text-xs tracking-wider">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam obcaecati omnis maiores commodi molestias velit eaque. Quasi, quos reprehenderit voluptas laudantium temporibus necessitatibus laborum minima, sapiente illo, natus excepturi?
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
        </div>
        <div className="img ">
            <img src="2ndFAQ.png" alt="Every Question Answered" className="md:w-[400px] sm:w-[300px] w-[260px]" />
        </div>
       </div>
       </div>
    </div>
  )
}

export default FAQ_f