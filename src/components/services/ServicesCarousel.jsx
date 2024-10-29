import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import servicesData from '../../data/services/services.json';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const ServicesCarousel = () => {
    const [services, setServices] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const loadServices = async () => {
            const loadedServices = await Promise.all(
                servicesData.services.map(async (service) => ({
                    ...service,
                    image: await importImage(service.image1)
                }))
            );
            setServices(loadedServices);
        };
        loadServices();
    }, []);

    const handleSlideChange = () => {
        setActiveIndex(swiperRef.current.swiper.realIndex);
    };

    const goToSlide = (index) => {
        swiperRef.current.swiper.slideToLoop(index);
    };

    if (services.length === 0) return null;

    return (
        <Container fluid id="home-slider" className='p-0'>
            <div className="page-wrap">
                <Swiper
                    ref={swiperRef}
                    direction="vertical"
                    loop={true}
                    grabCursor={false}
                    speed={1000}
                    onSlideChange={handleSlideChange}
                    parallax={true}
                    autoplay={{ delay: 5000 }}
                    modules={[Parallax, Autoplay]}
                    className="swiper-container"
                    allowTouchMove={true}
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
                                            <img src={service.image} className="w-100 h-100 object-fit-cover swiper-container__slide__image-container__image background-image" alt="" />
                                            <div className="services__title">
                                                <h1 className="display-3 text-white">{service.title}</h1>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} className='swiper-container__slide__content-container position-relative h-100'>
                                            <Row className='h-100'>
                                                <Col lg={2} md={2} className="opacity-75 d-lg-block d-md-block d-none col-0 bg-primary"></Col>
                                                <Col lg={10} md={10} className="d-flex justify-content-center align-items-center bg-secondary">
                                                    <div className="text-white swiper-container__slide__content-container__content p-3">
                                                        <p className='fs-6'>{service.description}</p>
                                                        <Link to={`/service-details/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className='link-fill-right text-white fw-semibold fs-5'>Learn More</Link>
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

                <div className="custom-pagination d-flex flex-column justify-content-center">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={`custom-icon ${index === activeIndex ? 'active' : ''}`}
                        >
                            <span className='testimonials-carousel__nav'>
                                <button 
                                    className={index === activeIndex ? 'active' : ''}
                                    onClick={() => goToSlide(index)}
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
