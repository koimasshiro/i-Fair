import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import './Home.css'
import About from '../About/About'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}

export default Home