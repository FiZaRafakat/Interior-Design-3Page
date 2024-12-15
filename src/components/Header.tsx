import Link from 'next/link'
import { RiMenu3Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from 'react-icons/md';
import { BiBuildingHouse } from "react-icons/bi";
import { RiLayout3Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <div className='xl:mx-64 lg:mx-32 min-[500px]:mx-20  sm:mx-20 mx-5'>
       <div className='flex justify-between items-center md:mt-5 mt-3'>
       <div className="logo lg:w-40 w-32 ">
            <img src="/SELHONO.png" alt="logo" />
        </div>
      <div className='hidden md:block'>
      <nav className='flex items-center xl:gap-5 gap-3 text-[#292F36] tracking-wider '>
            <Link href="/" className='hover:text-[#C76904]'>Home</Link>
            <Link href="/about" className='hover:text-[#C76904]'>About</Link>
            <Link href="/services" className='hover:text-[#C76904]' >Services</Link>
            <Link href="/projects" className='hover:text-[#C76904]'>Project</Link>
            <Link href="/FAQ" className='hover:text-[#C76904]'>FAQ&apos;s</Link>
            <Link href="/contact" className='hover:text-[#C76904]'>Contact</Link>
            <p><IoSearchOutline className='size-5 hover:text-[#C86904]' /></p>
        </nav>
      </div>
      <div className='md:hidden block'>
        <Sheet>
                 <SheetTrigger><RiMenu3Fill className='size-6'/></SheetTrigger>
          <SheetContent className='flex flex-col justify-center gap-20 items-center'>
            <SheetHeader>
              <SheetTitle className='flex'>
                <Link href="/" className='flex items-center gap-4'>
                <IoHomeOutline className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36] ' >Home</span> 
                </Link>
              </SheetTitle>
              <SheetTitle className='flex'>
                <Link href="/about" className='flex items-center gap-4'>
                <BiBuildingHouse className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36]' >About</span> 
                </Link>
              </SheetTitle>
              <SheetTitle className='flex'>
                <Link href="/services" className='flex items-center gap-4'>
                <MdOutlineDesignServices className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36]' >Services </span> 
                </Link>
              </SheetTitle>
              <SheetTitle className='flex'>
                <Link href="/projects" className='flex items-center gap-4'>
                <RiLayout3Line className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36]' >Projects </span> 
                </Link>
              </SheetTitle>
              <SheetTitle className='flex'>
                <Link href="/FAQ" className='flex items-center gap-4'>
                <FaRegQuestionCircle className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36]' >FAQ&apos;s</span> 
                </Link>
              </SheetTitle>
              <SheetTitle className='flex'>
                <Link href="/contact" className='flex items-center gap-4'>
                <LuPhone className='size-6 text-[#C76904]'/>
                <span className='text-xl text-[#4D5053] hover:text-[#292F36]' >Contact</span> 
                </Link>
              </SheetTitle>
            
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
       </div>
    </div>
  )
}

export default Header