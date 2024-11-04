import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Parallax, Autoplay } from 'swiper/modules'; // Import Swiper modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/parallax'; // Import Parallax styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import servicesData from '../../data/services/services.json'; // Import services data
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default); // Dynamically import image
};

const ServicesCarousel = () => {
    const [services, setServices] = useState([]); // State for services
    const [activeIndex, setActiveIndex] = useState(0); // State for active slide index
    const swiperRef = useRef(null); // Reference for Swiper

    useEffect(() => {
        const loadServices = async () => {
            const loadedServices = await Promise.all(
                servicesData.services.map(async (service) => ({
                    ...service,
                    image: await importImage(service.image1) // Load image dynamically
                }))
            );
            setServices(loadedServices); // Set loaded services to state
        };
        loadServices();
    }, []);

    const handleSlideChange = () => {
        setActiveIndex(swiperRef.current.swiper.realIndex); // Update active index on slide change
    };

    const goToSlide = (index) => {
        swiperRef.current.swiper.slideToLoop(index); // Go to specified slide
    };

    if (services.length === 0) return null; // Return null if no services

    return (
        <Container fluid id="home-slider" className='p-0'> {/* Full-width container for carousel */}
            <div className="page-wrap">
                <Swiper
                    ref={swiperRef}
                    direction="vertical" // Vertical slide direction
                    loop={true} // Enable looping
                    grabCursor={false}
                    speed={1000} // Slide transition speed
                    onSlideChange={handleSlideChange} // Handle slide change
                    parallax={true} // Enable parallax effect
                    autoplay={{ delay: 5000 }} // Autoplay settings
                    modules={[Parallax, Autoplay]} // Swiper modules
                    className="swiper-container"
                    allowTouchMove={true} // Allow touch movement
                    touchStartPreventDefault={false}
                    simulateTouch={false}
                    resistance={false}
                    preventInteractionOnTransition={true}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide">
                                <Container fluid className="h-100">
                                    <Row className="h-100 swiper-container__slide">
                                        <Col lg={6} md={6} className="swiper-container__slide__image-container position-relative d-flex justify-content-center align-items-center m-0 p-0">
                                            <img src={service.image} className="w-100 h-100 object-fit-cover swiper-container__slide__image-container__image background-image" alt="" /> {/* Service image */}
                                            <div className="services__title">
                                                <h1 className="display-3 text-white">{service.title}</h1> {/* Service title */}
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} className='swiper-container__slide__content-container position-relative h-100'>
                                            <Row className='h-100'>
                                                <Col lg={2} md={2} className="opacity-75 d-lg-block d-md-block d-none col-0 bg-primary"></Col>
                                                <Col lg={10} md={10} className="d-flex justify-content-center align-items-center bg-secondary">
                                                    <div className="text-white swiper-container__slide__content-container__content p-3">
                                                        <p className='fs-6'>{service.description}</p> {/* Service description */}
                                                        <Link to={`/service-details/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className='link-fill-right text-white fw-semibold fs-5'>Learn More</Link> {/* Link to service details */}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-pagination d-flex flex-column justify-content-center"> {/* Custom pagination */}
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={`custom-icon ${index === activeIndex ? 'active' : ''}`} // Active class for current slide
                        >
                            <span className='testimonials-carousel__nav'>
                                <button 
                                    className={index === activeIndex ? 'active' : ''} // Active class for button
                                    onClick={() => goToSlide(index)} // Go to slide on click
                                ></button>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default ServicesCarousel;