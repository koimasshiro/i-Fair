import React from 'react';
import './About.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Slider from './Slider/Slider';

function About() {
  return (
    <div>
    <div className='about-section'>
      <div className='about'>
        <h1>About <span style={{ color: "#ff5100"}}>i-FAIR</span>?</h1>
        <p>Welcome to the Innovation Fellowship for Aspiring Inventors and Researchers (i-FAIR). i-FAIR is an initiative of the Embassy of the
          State of Israel in Nigeria in collaboration with the Office of the Vice President of the Federal Republic of Nigeria.
        </p>
        <p>
          With the mandate to empower INNOVATORS, INVENTORS, ENTREPRENEURS, and VENTURE CREATORS in Nigeria, i-FAIR was born out of the need to tackle local challenges with innovative made-in-Nigeria solutions; for the overall goal of inspiring Nigeria to become a
          start-up nation.
        </p>
        <button className='btn about-btn'>Read more <FaArrowAltCircleRight style={{paddingTop: '5px'}}/></button>
        {/* <p>Through the 6-month program, i-FAIR provides participants with the necessary resources and support to transform their ideas into
          innovations and sustainable ventures that can create jobs and generate wealth for Nigerians and Nigeria.
        </p>
        <p>We have successfully implemented 2 editions of i-FAIR, with a total of 63 FELLOWS and 56 PROTOTYPES DEVELOPED. This was achieved in
          over 1,300 mentorship hours, supporting over 100 ideas and witnessing inspiring success stories of i-FAIR Fellows who have transformed their
          ideas into ventures such as Thinkbike, Soilless Farm Labs, Quadloop Africa, Eco Circular Solution, who have gone ahead to attract investment
          and become successful enterprises.
        </p>
        <p>We understand the challenges facing the innovation ecosystem in Nigeria and have identified them as an opportunity to provide relevant,
          beneficial, and unique support systems to our Fellows.
        </p>
        <p>At the heart of i-FAIR is Innov8 Hub, the implementation partner of i-FAIR, which provides access to their innovation hub, facilities, cutting-
          edge technology, mentorship and expertise that support Fellows from the point of IDEATION to the point of PROTOTYPE DEVELOPMENT and
          VENTURE CREATION.
        </p>
        <p>At i-FAIR, we are committed to supporting innovation and empowering aspiring inventors and venture creators in Nigeria, to transform their
          ideas into innovations.
        </p> */}
      </div>
      <Slider/>
    </div>
    </div>
  )
}

 
export default About