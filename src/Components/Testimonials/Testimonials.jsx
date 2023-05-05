import React from 'react'
import { TestimonialsData } from '../../Data/TestimonialsData/TestimonialsData'

const Testimonials = () => {
  return (
    <div>
      {TestimonialsData.map((testimonials, id)=>{
        return(
          <div>
            <img src={testimonials.image} alt='fellows'/>
            <h3>{testimonials.fullName}</h3>
            <h4>{testimonials.invention}</h4>
            <p>{testimonials.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Testimonials