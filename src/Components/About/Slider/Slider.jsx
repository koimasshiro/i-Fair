import React, {useEffect, useState} from 'react';
import './Slider.css';
import { SliderData } from './SliderData'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const delay = 2500;

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);
    
  return (
    <div className='slideshow'>
        <div className='slideshowslider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {SliderData.map((slide, id)=> {
                return(
                    <div className='slide' key={id}>
                        <img src={slide.image} alt='i-fair events' className='slide-img'/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Slider