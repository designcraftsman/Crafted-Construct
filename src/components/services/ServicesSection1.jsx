import React, { useRef, useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import servicesData from '../../data/services/services.json';
import Carousel from 'react-bootstrap/Carousel';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const services = servicesData.servicesSection1;

function ServicesSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const loadedServices = await Promise.all(
        servicesData.servicesSection1.map(async (service) => ({
          ...service,
          img: await importImage(service.img)
        }))
      );
      setServices(loadedServices);
    };
    loadServices();
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="services-section reveal-section" ref={sectionRef}>
      {/* Carousel */}
      <Carousel ref={carouselRef} className="services-section__carousel" indicators={false} controls={false}>
        {services.map((service, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              <div className='col-lg-6 col-md-6 col-12 p-0 m-0 reveal-element reveal-1'>
                <img src={service.img} className='h-100 w-100 object-fit-cover' alt="" />
              </div>
              <div className='col-lg-6 col-md-6 col-12 bg-secondary p-0 d-flex flex-column align-content-center p-5 reveal-element reveal-2'>
                <div className='my-auto'>
                  <h2 className="text-primary fw-semibold mb-3 reveal-element reveal-3">{service.title}</h2>
                  <h3 className='text-white fw-bold fs-2 reveal-element reveal-4'>{service.subtitle}</h3>
                  <p className='fw-light fs-5 text-white w-75 reveal-element reveal-5'>
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
        className="services-section__control services-section__control--prev reveal-element reveal-1"
        onClick={handlePrevClick}
        aria-label="Previous"
      >
        <FaArrowLeft className="fs-4 icon" />
      </button>

      {/* Custom Next Button */}
      <button
        className="services-section__control services-section__control--next reveal-element reveal-1"
        onClick={handleNextClick}
        aria-label="Next"
      >
        <FaArrowRight className="fs-4 icon" />
      </button>
    </div>
  );
}

export default ServicesSection;
