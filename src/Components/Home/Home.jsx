import React from 'react'
import Hero from '../Hero/Hero'
import './Home.css'
import About from '../About/About'
import Benefits from '../Benefits/Benefits'

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <About/>
        <Benefits/>
    </div>
  )
}

export default Home