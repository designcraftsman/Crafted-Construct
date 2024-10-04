import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRegMessage } from "react-icons/fa6";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import person1 from '../../../assets/images/V1/home/testimonialsSection/1.jpg';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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

  const totalSlides = groupedSlides.length; // Correctly calculate the total slides

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  return (
    <div className='position-relative my-5 reveal'>
      <div
        className="custom-testimonial-carousel bg-secondary"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center py-5">
          <h2 className="fw-bolder text-primary fs-2 mb-3 reveal"><FaRegMessage /> Testimonials </h2>
          <h3 className="fw-light display-5 fw-semibold text-white mb-3 reveal">What Our Clients Say</h3>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='large-screen-carousel'
        >
          {groupedSlides.map((group, i) => (
            <Carousel.Item key={i}>
              <div className='row py-3'>
                {group.map((slide, j) => (
                  <div key={j} className={`col-3 bg-white mx-auto p-3 rounded testimonial-card reveal `}>
                    <div className='row align-items-center'>
                      <div className='col-3'>
                        <img src={slide.image} className="user-image" alt="" />
                      </div>
                      <div className="col-9">
                        <h3 className='fw-bold fs-5'>{slide.title}</h3>
                        <span className='text-muted'>CEO of Alsa</span>
                      </div>
                    </div>
                    <hr className='border-primary border-3' />
                    <FaQuoteLeft className='text-primary  fs-4'/>
                    <p className='fw-light my-3 text-center px-3'>{slide.text}</p>
                    <div className='text-end mb-auto'>
                      <FaQuoteRight className='text-primary text-end mb-auto fs-4'/>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Small Screen Carousel */}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='small-screen-carousel'
        >
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                <div className={`col-10 h-100 bg-white m-auto p-3 testimonial-card rounded  `}>
                  <div className='row align-items-center'>
                    <div className='col-3'>
                      <img src={slide.image} className="user-image" alt="" />
                    </div>
                    <div className="col-9">
                      <h3 className='fw-bold fs-5'>{slide.title}</h3>
                      <span className='text-primary'>CEO of Alsa</span>
                    </div>
                  </div>
                  <hr className='border-primary border-3' />
                  <FaQuoteLeft className='text-primary  fs-3'/>
                  <p className='fw-normal my-3 text-center px-3'>{slide.text}</p>
                  <div className='text-end mb-auto'>
                      <FaQuoteRight className='text-primary text-end mb-auto fs-3'/>
                    </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="testimonials-carousel-nav small-screen-carousel text-center py-5  ">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={index === i ? 'active' : ''}
            />
          ))}
        </div>
        <div className="testimonials-carousel-nav large-screen-carousel text-center py-5  reveal">
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
