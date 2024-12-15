"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeContact from '@/components/HomeContact'
import ServicesAbout from '@/components/ServicesAbout'
import ServicesHero from '@/components/ServicesHero'
import Work from '@/components/Work'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Page = () => {

  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])

  return (
    <main>
        <Header />
        <ServicesHero/>
        <ServicesAbout/>
        <Work/>
        <HomeContact />
        <Footer/>
    </main>
  )
}

export default Page