import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRegMessage } from "react-icons/fa6";
import { FaQuoteRight, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import person1 from '../../assets/images/V1/home/testimonialsSection/1.jpg';

const TestimonialsSection2 = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const slides = [
    {
      image: person1,
      title: "Stephen jons 1",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work. They transformed our vision into reality, building a home that we are proud of.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 2",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 3",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 4",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 5",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    },
    {
      image: person1,
      title: "Stephen jons 6",
      company: "CEO of Alsa",
      text: "CraftedConstruct exceeded our expectations with their professionalism and quality of work.",
      buttonText: "Explore Our Projects"
    }
  ];

  // Create grouped slides for larger screens
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 2) {
    groupedSlides.push(slides.slice(i, i + 2));
  }

  const totalSlides = groupedSlides.length;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  return (
    <div className='position-relative '>
      <div
        className="testimonials-carousel bg-secondary"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className=' container d-flex align-items-center justify-content-between py-5'>
          <div>
            <h2 className="fw-bolder text-primary fs-2 mb-3"><FaRegMessage /> Testimonials </h2>
            <h3 className="fw-light display-5 fw-semibold text-white mb-3">What Our Clients Say</h3>
          </div>
          <div className='buttons'>
            <button onClick={handlePrev} className="btn btn-primary me-2">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="btn btn-primary">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Large Screen Carousel */}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='testimonials-carousel__large-screen'
        >
          {groupedSlides.map((group, i) => (
            <Carousel.Item key={i}>
              <div className='row py-3'>
                {group.map((slide, j) => (
                  <div key={j} className='col-4 m-auto px-3'>
                    <div className='bg-white p-4 rounded testimonial-card-v2   d-flex flex-column'>
                      <div className='row flex-grow-1'>
                        <div className='col-md-4 text-center'>
                          <img src={slide.image} className="user-image mb-3" alt="" />
                          <h3 className='fw-bold fs-5'>{slide.title}</h3>
                          <span className='text-primary'>{slide.company}</span>
                        </div>
                        <div className='col-md-8 d-flex flex-column'>
                          <FaQuoteLeft className='text-primary fs-4 mb-2'/>
                          <p className='fw-light mb-3 flex-grow-1'>{slide.text}</p>
                          <div className='text-end mt-auto'>
                            <FaQuoteRight className='text-primary fs-4'/>
                          </div>
                        </div>
                      </div>
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
          className='testimonials-carousel__small-screen'
        >
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                <div className='col-10 bg-white m-auto p-4 testimonial-card-v2 rounded h-100'>
                  <div className='row h-100'>
                    <div className='col-md-4 text-center mb-3 mb-md-0'>
                      <img src={slide.image} className="user-image mb-3" alt="" />
                      <h3 className='fw-bold fs-5'>{slide.title}</h3>
                      <span className='text-primary'>{slide.company}</span>
                    </div>
                    <div className='col-md-8 d-flex flex-column'>
                      <FaQuoteLeft className='text-primary fs-4 mb-2'/>
                      <p className='fw-normal mb-3 flex-grow-1'>{slide.text}</p>
                      <div className='text-end mt-auto'>
                        <FaQuoteRight className='text-primary fs-4'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="testimonials-carousel__nav testimonials-carousel__small-screen text-center py-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={index === i ? 'active' : ''}
            />
          ))}
        </div>
        <div className="testimonials-carousel__nav testimonials-carousel__large-screen text-center py-5 ">
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

export default TestimonialsSection2;
