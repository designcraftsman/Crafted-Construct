import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import service1 from '../../assets/images/V1/services/1.jpg';
import service2 from '../../assets/images/V1/services/2.jpg';
import service3 from '../../assets/images/V1/services/3.jpg';
import service4 from '../../assets/images/V1/services/4.jpg';
import service5 from '../../assets/images/V1/services/5.jpg';

const ServicesCarousel =() =>{
    const services = [
        {
            title: "Custom Residential Construction",
            description: "At CraftedConstruct, we specialize in building custom homes tailored to each client's vision. Whether it's a modern minimalist design or a traditional family home, our team ensures that you stay front-of-mind. We take you from initial design to the final phase with precision and care.",
            image: service5,
        },
        {
            title: "Commercial Building Construction",
            description: "Our expertise extends beyond residential projects. CraftedConstruct has a proven track record in commercial construction, helping businesses build office spaces, retail outlets, and more. We prioritize client collaboration to deliver spaces that are functional, aesthetically pleasing, and sustainable.",
            image: service2,
        },
        {
            title: "Renovation and Remodeling",
            description: "From small upgrades to full home renovations, we handle all aspects of remodeling projects. Our team transforms outdated spaces into modern, functional environments while staying on budget and on schedule.",
            image: service3,
        },
        {
            title: "Interior Design Consulting",
            description: "CraftedConstruct also offers interior design services to complement our construction projects. We work closely with clients to select finishes, fixtures, and furniture that align with their taste and lifestyle.",
            image: service4,
        },
        {
            title: "Interior Design Consulting",
            description: "CraftedConstruct also offers interior design services to complement our construction projects. We work closely with clients to select finishes, fixtures, and furniture that align with their taste and lifestyle.",
            image: service1,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide
    const swiperRef = useRef(null); // Reference to Swiper

    const handleSlideChange = () => {
        setActiveIndex(swiperRef.current.swiper.realIndex); // Update active slide index
    };

    const goToSlide = (index) => {
        swiperRef.current.swiper.slideToLoop(index); // Navigate to the desired slide
    };

    return (
        <div id="home-slider">
                <div className="page-wrap">
                    <Swiper
                        ref={swiperRef}
                        direction="vertical"
                        loop={true}
                        grabCursor={true}
                        speed={1000}
                        onSlideChange={handleSlideChange}
                        parallax={true}
                        autoplay={{ delay: 5000 }}
                        modules={[Parallax, Autoplay]}
                        className="swiper-container"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="swiper-wrapper">
                                <div className="swiper-slide ">
                                    <div className="container-fluid h-100">
                                        <div className="row h-100 swiper-container__slide">
                                            {/* Left column - Title */}
                                            <div className="col-lg-6 col-md-6 col-12  swiper-container__slide__image-container position-relative d-flex justify-content-center align-items-center m-0 p-0 ">
                                                <img src={service.image} className="w-100 h-100  object-fit-cover swiper-container__slide__image-container__image background-image" alt="" />
                                                <div className=" services__title ">
                                                    <h1 className="display-3 text-white ">{service.title}</h1>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-12 swiper-container__slide__content-container position-relative h-100'>
                                                <div className='row h-100'>
                                                    <div className='col-lg-2 col-md-2 opacity-75 d-lg-block d-md-block d-none  col-0 bg-primary'></div>
                                                    {/* Right column - Description */}
                                                    <div className="col-lg-10 col-md-10 col-12 d-flex justify-content-center align-items-center bg-secondary">
                                                        <div className="text-white swiper-container__slide__content-container__content p-3">
                                                            <p className='fs-4' >
                                                                {service.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination    d-flex flex-column justify-content-center ">
                                                    {services.map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`custom-icon ${index === activeIndex ? 'active' : ''}`}
                                                        >
                                                            {/* Use any icon here, like SVG or custom HTML */}
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
            </div>
    )
}

export default ServicesCarousel;