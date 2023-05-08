import React, { useEffect, useState } from 'react'
import { TestimonialsData } from '../../Data/TestimonialsData/TestimonialsData';
import './Testimonials.css';
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Testimonials = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = TestimonialsData.length;
  const autoScroll = true;

  // slide to auto scroll every 5secs
  let slideInterval;
  let Interval = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  function myAuto() {
    slideInterval = setInterval(nextSlide, Interval)
  }
  useEffect(() => {
    if (autoScroll) {
      myAuto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  return (
    <>
      <div>
        <img src='/wave3.svg' alt='' className='svg'/>
      </div>
      <div className='container'>
        <div className='testimonials'>
          <h1>Testimonials</h1>
          <HiOutlineArrowCircleLeft className='arrow prev' onClick={prevSlide}/>
          <HiOutlineArrowCircleRight className='arrow next' onClick={nextSlide}/>
          {TestimonialsData.map((testimonials, id) => {
            return (
              <motion.div key={id} className="testimonial-section">
                <div className='testimonial'>
                  {id === currentSlide && (
                    <>
                      <img src={testimonials?.image} alt='fellows' className='testimonials-img' />
                      <h3 style={{color: "#ff5100"}}>{testimonials?.fullName}</h3>
                      <h4>{testimonials?.invention}</h4>
                      <p>{testimonials?.desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div>
        <img src='/wavebottom3.svg' alt=''/>
      </div>
    </>
  )
}

export default Testimonials