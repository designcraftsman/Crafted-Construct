import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRegMessage } from "react-icons/fa6";
import { FaQuoteRight, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsData from '../../data/testimonials/Testimonials.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const TestimonialsSection2 = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const loadedTestimonials = await Promise.all(
        testimonialsData.testimonials.map(async (testimonial) => ({
          ...testimonial,
          image: await importImage(testimonial.image)
        }))
      );
      setTestimonials(loadedTestimonials);
    };

    loadTestimonials();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  // Create grouped slides for larger screens
  const groupedSlides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedSlides.push(testimonials.slice(i, i + 2));
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
        className="testimonials-carousel bg-secondary py-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className=' container d-flex align-items-center flex-wrap justify-content-between py-3'>
          <div>
            <h2 className=" text-primary fw-semibold display-6 mb-3"><FaRegMessage /> Testimonials </h2>
            <h3 className=" display-5  text-white mb-3 fw-medium">What Our Clients Say</h3>
          </div>
          <div className='buttons'>
            <button onClick={handlePrev} className="testimonials-carousel__control testimonials-carousel__control--prev me-2">
              <div className="arrow-wrapper">
                <FaChevronLeft className="icon" />
              </div>
            </button>
            <button onClick={handleNext} className="testimonials-carousel__control testimonials-carousel__control--next">
              <div className="arrow-wrapper">
                <FaChevronRight className="icon" />
              </div>
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
                {group.map((testimonial, j) => (
                  <div key={j} className='col-5 m-auto px-3'>
                    <div className='bg-white p-4 rounded testimonial-card    d-flex flex-column '>
                      <div className='row flex-grow-1 align-items-center'>
                        <div className='col-md-4 text-center '>
                          <img src={testimonial.image} className="user-image mb-3" alt="" />
                          <h3 className='fw-bold fs-4'>{testimonial.title}</h3>
                          <span className='text-primary'>{testimonial.position}</span>
                        </div>
                        <div className='col-md-8 '>
                          <FaQuoteLeft className='text-primary fs-4 mb-2'/>
                          <p className='fw-light fs-5 mb-3 flex-grow-1 text-center'>{testimonial.text}</p>
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
          {testimonials.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                <div className='col-11 bg-white m-auto p-4 testimonial-card rounded '>
                  <div className='row h-100'>
                    <div className='col-md-4 text-center my-auto '>
                      <img src={testimonial.image} className="user-image mb-3" alt="" />
                      <h3 className='fw-bold fs-5'>{testimonial.title}</h3>
                      <span className='text-primary'>{testimonial.company}</span>
                    </div>
                    <div className='col-md-8 d-flex flex-column justify-content-between'>
                      <FaQuoteLeft className='text-primary fs-4 mb-2'/>
                      <p className='fw-normal text-center '>{testimonial.text}</p>
                      <div className='text-end '>
                        <FaQuoteRight className='text-primary fs-4'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection2;
