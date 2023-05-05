import React from 'react'
import TestimonialsData from '../../TestimonialsData/TestimonialsData'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        {
        TestimonialsData.map((testimonial, id)=>{
            return(
                <div className='testimonial'>
                    <img src={testimonial.image}/>
                    <h4>{testimonial.fullName}</h4>
                    <h4>{testimonial.invention}</h4>
                    <p>{testimonial.desc}</p>       
                </div>
            )
        })}
    </div>
  )
}

export default Testimonials