'use client'
import Company from "@/components/Company";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import SecondPage from "@/components/SecondPage";
import Testimonal from "@/components/Testimonal";
import ExperinceLine from "@/components/ExperinceLine";
import Articles from "@/components/Articles";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
    <Header />
     <Hero />
     <SecondPage />
     <Testimonal />
     <Company/>
     <Project />
     <ExperinceLine />
     <Articles />
     <HomeContact />
     <Footer />
    </main>
  );
}
