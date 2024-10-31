import React, { useRef, useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import servicesData from '../../data/services/services.json';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

function ServicesSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const loadedServices = await Promise.all(
        servicesData.services.map(async (service) => ({
          ...service,
          img: await importImage(service.image1)
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
    <Container fluid className="services-section reveal-section p-0" ref={sectionRef}>
      <Carousel ref={carouselRef} className="services-section__carousel" indicators={false} controls={false}>
        {services.map((service, index) => (
          <Carousel.Item key={index}>
            <Row>
              <Col lg={6} md={6} className='p-0 m-0 reveal-element reveal-1'>
                <img src={service.img} className='services-section__carousel__image' alt="" />
              </Col>
              <Col lg={6} md={6} className='bg-secondary p-0 d-flex flex-column align-content-center p-4'>
                <div className='my-auto'>
                  <h2 className="text-primary fw-semibold mb-3 reveal-element reveal-2 services-section__carousel__h2">{service.title}</h2>
                  <h3 className='text-white fw-bold fs-3 reveal-element reveal-3 services-section__carousel__h3'>{service.subtitle}</h3>
                  <p className='fw-light fs-6 text-white reveal-element reveal-4 services-section__carousel__p'>
                    {service.description}
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <button
        className="services-section__control services-section__control--prev reveal-element reveal-1"
        onClick={handlePrevClick}
        aria-label="Previous"
      >
        <FaArrowLeft className="fs-4 icon" />
      </button>

      <button
        className="services-section__control services-section__control--next reveal-element reveal-1"
        onClick={handleNextClick}
        aria-label="Next"
      >
        <FaArrowRight className="fs-4 icon" />
      </button>
    </Container>
  );
}

export default ServicesSection;
