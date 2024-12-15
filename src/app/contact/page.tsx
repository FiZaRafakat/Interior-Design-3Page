import Contact from '@/components/Contact'
import ContactHero from '@/components/ContactHero'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Header />
        <ContactHero/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default Page