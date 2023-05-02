import React from 'react';
import "./Hero.css"
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Hero() {
  return (
    <div className='hero'>
      <div>
        <h3>Welcome</h3>
        <h1>
          Innovation Fellowship for Aspiring <br/>Inventors and Researchers (i-FAIR)
          </h1>
          <button className='btn'>Read More <FaArrowAltCircleRight/></button>
        </div>
        <div className='hero-img'>
          <img src='' alt='image'/>
        </div>

    </div>
  )
}

export default Hero