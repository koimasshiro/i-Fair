import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css';
import About from '../About/About';
import Benefits from '../Benefits/Benefits';
import Sponsors from '../Sponsors/Sponsors';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <About/>
        <Benefits/>
        <Testimonials/>
        <Sponsors/>
        <Footer/>
    </div>
  )
}

export default Home