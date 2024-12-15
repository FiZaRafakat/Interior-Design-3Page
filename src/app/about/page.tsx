import About from '@/components/About'
import AboutContact from '@/components/AboutContact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Testimonal from '@/components/Testimonal'

const Page = () => {
  return (
    <main>
        <Header />
        <About />
        <Testimonal />
        <AboutContact />
        <Footer/>
    </main>
  )
}

export default Page