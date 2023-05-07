import React from "react";
import "./Hero.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <div>
      <div className="hero-section">
        <Navbar />
        <div className="hero">
          <div>
            <h3>Welcome</h3>
            <h1 className="title">
              Innovation Fellowship for Aspiring <br />
              Inventors and Researchers (i-FAIR)
            </h1>
            <button className="btn">
              Read More <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="hero-img">
            {/*Add Blob*/}
            <img src="" alt="i-fair fellows" />
          </div>
          
        </div>
        <div className='wave-container'>
        <img src='/wave.svg' className='wave-svg' alt='wave-svg' />
          <img src='/wave2.svg' className='wave2-svg' alt='wave-svg' />
        </div>

      </div>
      
    </div>
  );
}

export default Hero;
