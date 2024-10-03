import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import service1 from '../../../assets/images/V1/home/servicesSection/1.jpg';
import Carousel from 'react-bootstrap/Carousel';

const services = [
  {
    img: service1,
    title: 'Our Services',
    subtitle: 'Residential Construction',
    description: 'Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.',
  },
  {
    img: service1,
    title: 'Our Services',
    subtitle: 'Residential Construction',
    description: 'Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.',
  },
  {
    img: service1,
    title: 'Our Services',
    subtitle: 'Residential Construction',
    description: 'Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.',
  },
  // You can add more service objects here if needed
];

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
        {services.map((service, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              <div className='col-lg-6 col-md-6 col-12 p-0 m-0'>
                <img src={service.img} className='h-100 w-100 object-fit-cover' alt="" />
              </div>
              <div className='col-lg-6 col-md-6 col-12 bg-secondary p-0 d-flex flex-column align-content-center p-5'>
                <div className='my-auto'>
                  <h2 className="text-primary fw-semibold mb-3">{service.title}</h2>
                  <h3 className='text-white fw-bold fs-2'>{service.subtitle}</h3>
                  <p className='fw-light fs-5 text-white w-75'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Previous Button */}
      <button
        className="servicesCarousel__control servicesCarousel__control--prev btn btn-dark hover-filled-slide-down"
        onClick={handlePrevClick}
        aria-label="Previous"
      >
        <FaArrowLeft className="fs-1 icon text-white" />
      </button>

      {/* Custom Next Button */}
      <button
        className="servicesCarousel__control servicesCarousel__control--next btn btn-dark hover-filled-slide-down"
        onClick={handleNextClick}
        aria-label="Next"
      >
        <FaArrowRight className="fs-1 icon text-white" />
      </button>
    </div>
  );
}

export default UncontrolledExample;
