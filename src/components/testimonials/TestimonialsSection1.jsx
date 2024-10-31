import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaRegMessage, FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
import testimonialsData from '../../data/testimonials/Testimonials.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const TestimonialsSection1 = () => {
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

  // Create grouped slides for larger screens
  const groupedSlides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedSlides.push(testimonials.slice(i, i + 3));
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
    <div className='position-relative reveal-section'>
      <div
        className="testimonials-carousel bg-secondary reveal-element reveal-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center py-5">
          <h2 className="fw-bolder text-primary fs-2 mb-3 reveal-element reveal-2"><FaRegMessage /> Testimonials </h2>
          <h3 className="fw-light display-5 fw-semibold text-white mb-3 reveal-element reveal-3">What Our Clients Say</h3>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          className='testimonials-carousel__large-screen reveal-element reveal-4'
        >
          {groupedSlides.map((group, i) => (
            <Carousel.Item key={i}>
              <div className='row py-3 reveal-element reveal-5'>
                {group.map((testimonial, j) => (
                  <div className={`col-3 bg-white mx-auto p-3 rounded testimonial-card d-flex flex-column justify-content-center`}>
                  <div className='row align-items-center'>
                    <div className='col-3'>
                      <img src={testimonial.image} className="user-image" alt="" />
                    </div>
                    <div className="col-9 d-flex flex-column justify-content-center">
                      <h3 className='fw-bold fs-5 my-auto'>{testimonial.title}</h3>
                      <span className='text-muted my-auto'>{testimonial.position}</span>
                    </div>
                  </div>
                  <hr className='border-primary border-3' />
                  <div className='d-flex flex-column justify-content-center '>
                    <FaQuoteLeft className='text-primary fs-4 mb-2' />
                    <p className='fw-light my-3 text-center px-3'>{testimonial.text}</p>
                    <FaQuoteRight className='text-primary fs-4 mt-2 ms-auto' />
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
          className='testimonials-carousel__small-screen reveal-element reveal-4'
        >
          {testimonials.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <div className='row m-auto py-3'>
                <div className={`col-10 bg-white m-auto p-3 testimonial-card testimonials-carousel__card rounded reveal-element reveal-5`}>
                  <div className='row align-items-center'>
                    <div className='col-3'>
                      <img src={testimonial.image} className="user-image" alt="" />
                    </div>
                    <div className="col-9 my-auto">
                      <h3 className='fw-bold fs-5'>{testimonial.title}</h3>
                      <span className='text-primary'>{testimonial.position}</span>
                    </div>
                  </div>
                  <hr className='border-primary border-3' />
                  <div className='d-flex flex-column justify-content-between h-100'>
                    
                    <FaQuoteLeft className='text-primary fs-3 '/>
                    <p className='fw-normal my-auto text-center px-3'>{testimonial.text}</p>
                    <div className='text-end mb-auto'>
                      <FaQuoteRight className='text-primary text-end  fs-3'/>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="testimonials-carousel__nav testimonials-carousel__small-screen text-center py-5 reveal-element reveal-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={index === i ? 'active' : ''}
            />
          ))}
        </div>
        <div className="testimonials-carousel__nav testimonials-carousel__large-screen text-center py-5 reveal-element reveal-6">
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

export default TestimonialsSection1;
