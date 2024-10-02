import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import person1 from '../../../assets/images/V1/home/testimonialsSection/1.jpg';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === Math.floor(slides.length / 3) ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  });

  const slides = [
    {
      image: person1,
      title: "Stephen jons 1",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work. They transformed our vision into reality, building a home that we are proud of.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 2",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 3",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 4",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 5",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 6",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    }
  ];

  // Create grouped slides for larger screens
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 3) {
    groupedSlides.push(slides.slice(i, i + 3));
  }

  return (
    <div className='position-relative'>
      <div
        className="custom-testimonial-carousel bg-secondary"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center py-5">
            <h2 className="fw-bolder text-primary fs-2 mb-3">Testimonials</h2>
            <h3 className="fw-light display-5 fw-semibold text-white mb-3">What Our Clients Say</h3>
          </div>

        <Carousel
          activeIndex={index }
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='d-md-none d-sm-none  d-lg-block'
        >
          {groupedSlides.map((group, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                {group.map((slide, j) => (
                  <div key={j} className={`col-3 bg-white m-auto p-3 rounded `}>
                    <div className='row align-items-center'>
                      <div className='col-2'>
                        <img src={slide.image} className="img-fluid rounded-circle" alt="" />
                      </div>
                      <div className="col-9">
                        <h3 className='fw-bold fs-5'>{slide.title}</h3>
                        <span className='text-primary'>CEO of Alsa</span>
                      </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <p className='fw-normal'>{slide.text}</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Carousel
          activeIndex={index }
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='d-lg-none d-md-block  d-sm-block'
        >
          

          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                  <div key={i} className={`col-10 h-100 bg-white m-auto p-3 rounded `}>
                    <div className='row align-items-center'>
                      <div className='col-2'>
                        <img src={slide.image} className="img-fluid rounded-circle" alt="" />
                      </div>
                      <div className="col-9">
                        <h3 className='fw-bold fs-5'>{slide.title}</h3>
                        <span className='text-primary'>CEO of Alsa</span>
                      </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <p className='fw-normal'>{slide.text}</p>
                  </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="testimonials-carousel-nav d-lg-none d-md-block  d-sm-block  text-center py-5 ">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={index === i ? 'active' : ''}
            />
          ))}
        </div>
        <div className="testimonials-carousel-nav   d-md-none d-sm-none  d-lg-block text-center py-5">
          {groupedSlides.map((_, i) => (
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
