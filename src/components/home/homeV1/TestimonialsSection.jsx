import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import person1 from '../../../assets/images/V1/home/testimonialsSection/1.jpg';


const HeroSection = () => {
  const [index, setIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const slides = [
    {
      image: person1,
      title: "Stephen jons 1",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work. They transformed our vision into reality, building a home that we are proud of. From the initial consultation to the final walkthrough, the team was transparent and committed to delivering a beautiful, high-quality result.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 2",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work. They transformed our vision into reality, building a home that we are proud of. From the initial consultation to the final walkthrough, the team was transparent and committed to delivering a beautiful, high-quality result.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work. They transformed our vision into reality, building a home that we are proud of. From the initial consultation to the final walkthrough, the team was transparent and committed to delivering a beautiful, high-quality result.",
      buttonText: "Explore Our Projects"
    }
  ];

  return (
    <div className='position-relative'>
    <div
      className="custom-testimonial-carousel  bg-secondary  "  // Scoped class for this carousel
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
         activeIndex={index+1}
         onSelect={handleSelect}
         indicators={false}
         controls={false}
      >
        <div className="text-center py-5">
              <h2 className=" fw-bolder text-primary fs-2 mb-3">Testimonials</h2>
              <h3 className=" fw-light display-5 fw-semibold text-white mb-3">What Our Clients Say</h3>
            </div>
        {slides.map((slide, i) => (
          <Carousel.Item
            key={i+1}
          >
            <div className='row m-auto py-3'>
                <div className='col-3 bg-white m-auto p-3 rounded'>
                    <div className='row align-items-center'>
                       <div className='col-2'>
                        <img src={slide.image}  className="img-fluid rounded-circle" alt="" />
                       </div>
                       <div className="col-9">
                          <h3 className='fw-bold fs-5'>{slide.title}</h3>
                          <span className='text-primary'>CEO of Alsa</span>
                       </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <p className='fw-normal'>
                        {slide.text}
                    </p>
                </div>
                <div className='col-3 bg-white m-auto p-3 rounded'>
                    <div className='row align-items-center'>
                       <div className='col-2'>
                        <img src={slide.image}  className="img-fluid rounded-circle" alt="" />
                       </div>
                       <div className="col-9">
                          <h3 className='fw-bold fs-5'>{slide.title}</h3>
                          <span className='text-primary'>CEO of Alsa</span>
                       </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <p className='fw-normal'>
                        {slide.text}
                    </p>
                </div>
                <div className='col-3 bg-white m-auto p-3 rounded'>
                    <div className='row align-items-center'>
                       <div className='col-2'>
                        <img src={slide.image}  className="img-fluid rounded-circle" alt="" />
                       </div>
                       <div className="col-9">
                          <h3 className='fw-bold fs-5'>{slide.title}</h3>
                          <span className='text-primary'>CEO of Alsa</span>
                       </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <p className='fw-normal'>
                        {slide.text}
                    </p>
                </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="testimonials-carousel-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={index === i ? 'active' : ''}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
