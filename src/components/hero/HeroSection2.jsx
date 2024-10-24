import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import heroData from '../../data/hero/heroSection2.json';

// Helper function to dynamically import images
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const HeroSection2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateContent, setAnimateContent] = useState(false);
    const [slides, setSlides] = useState([]);

    // Load images and set up slides
    useEffect(() => {
        const loadSlides = async () => {
            const loadedSlides = await Promise.all(
                heroData.slides.map(async (slide) => ({
                    ...slide,
                    image: await importImage(slide.image)
                }))
            );
            setSlides(loadedSlides);
        };
        loadSlides();
    }, []);

    // Handle slide selection
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
        setAnimateContent(false);
    };

    // Trigger animation on slide change
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateContent(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Render carousel item
    const renderCarouselItem = (slide) => (
        <Carousel.Item key={slide.title} className="hero-carousel-v2__item">
            <div className="row h-100">
                <div className={`hero-carousel-v2__item__caption col-lg-4 col-md-4 col-10 d-block m-0 ${animateContent ? 'staggered-animations' : ''}`}>
                    <h3 className="fs-1 fw-light">{slide.title}</h3>
                    <h4 className="fs-4 fw-light my-3">{slide.description}</h4>
                    <button className="btn btn-dark hover-filled-slide-down slide-up">
                        <span>{heroData.buttonText}</span>
                    </button>
                </div>
                <div className="col-5 text-dark m-0 hero-carousel-v2__item__content">
                </div>
                <div className="col-lg-7 col-md-7 col-12 p-0">
                    <img
                        className="d-block w-100 h-100 object-fit-cover"
                        src={slide.image}
                        alt={slide.title}
                    />
                </div>
            </div>
        </Carousel.Item>
    );

    // Render component only when slides are loaded
    if (slides.length === 0) return null;

    return (
        <div className="position-relative">
            <Carousel 
                fade
                controls={false}
                indicators={false}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                className="hero-carousel-v2 mt-5 pt-2">
                {slides.map(renderCarouselItem)}
            </Carousel>
            {/* Custom navigation dots */}
            <div className="hero-carousel__nav">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${activeIndex === index ? 'active' : ''} ${animateContent ? 'animate' : ''}`}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection2;
