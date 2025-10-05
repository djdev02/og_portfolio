import React, { useEffect } from 'react'
import LandPage from './components/Landpage/LandPage'
import About from './components/About/About'
import Aos from "aos";
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const Home = () => {

  //Aos Initiate
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <LandPage />
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <ScrollToTop />
    </>
  )
}

export default Home