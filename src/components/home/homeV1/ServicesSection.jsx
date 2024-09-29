import React, { useRef } from 'react';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
import service1 from '../../../assets/images/V1/home/servicesSection/1.jpg';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  const carouselRef = useRef(null); // Create a reference for the carousel

  // Handler for going to the previous slide
  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Manually trigger the previous slide
    }
  };

  // Handler for going to the next slide
  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Manually trigger the next slide
    }
  };

  return (
    <div className="servicesCarousel__wrapper">
      {/* Carousel */}
      <Carousel ref={carouselRef} className="servicesCarousel__carousel" indicators={false} controls={false}>
        <Carousel.Item>
          <div class="row">
            <div className='col-lg-6 col-12 p-0 m-0'>
              <img src={service1} className='img-fluid' alt="" />
            </div>
             <div className='col-lg-6 col-12 bg-secondary p-0 d-flex flex-column align-content-center p-5'>
                <div className='my-auto '>
                  <h2 className="text-primary fw-semibold mb-3">Our Services</h2>
                  <h3 className='text-white fw-bold fs-2'>Residential Construction</h3>
                  <p className='fw-light fs-5 text-white w-75'>
                  Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.
                  </p>
                </div> 
             </div>  
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="row">
            <div className='col-lg-6 col-12 p-0 m-0'>
              <img src={service1} className='img-fluid' alt="" />
            </div>
             <div className='col-lg-6 col-12 bg-secondary p-0 d-flex flex-column align-content-center p-5'>
                <div className='my-auto '>
                  <h2 className="text-primary fw-semibold mb-3">Our Services</h2>
                  <h3 className='text-white fw-bold fs-2'>Residential Construction</h3>
                  <p className='fw-light fs-5 text-white w-75'>
                  Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.
                  </p>
                </div> 
             </div>  
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row">
            <div className='col-lg-6 col-12 p-0 m-0'>
              <img src={service1} className='img-fluid' alt="" />
            </div>
             <div className='col-lg-6 col-12 bg-secondary p-0 d-flex flex-column align-content-center p-5'>
                <div className='my-auto '>
                  <h2 className="text-primary fw-semibold mb-3">Our Services</h2>
                  <h3 className='text-white fw-bold fs-2'>Residential Construction</h3>
                  <p className='fw-light fs-5 text-white w-75'>
                  Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.
                  </p>
                </div> 
             </div>  
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Custom Previous Button */}
      <button
        className="servicesCarousel__control servicesCarousel__control--prev bg-primary p-3"
        onClick={handlePrevClick}
        aria-label="Previous"
      >
        <FaArrowLeft className="servicesCarousel__icon fs-1 text-white " />
      </button>

      {/* Custom Next Button */}
      <button
        className="servicesCarousel__control servicesCarousel__control--next bg-primary p-3"
        onClick={handleNextClick}
        aria-label="Next"
      >
        <FaArrowRight className="servicesCarousel__icon fs-1 text-white  "/>
      </button>
    </div>
  );
}

export default UncontrolledExample;
