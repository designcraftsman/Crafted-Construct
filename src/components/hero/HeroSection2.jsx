import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../../assets/images/V1/home/heroSection/1.jpg';
import hero2 from '../../assets/images/V1/home/heroSection/2.jpg';

const HeroSection2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateContent, setAnimateContent] = useState(false);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
        setAnimateContent(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateContent(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    const renderCarouselItem = (image, title, description) => (
        <Carousel.Item className="hero-carousel-v2__item">
            <div className="row h-100">
                <div className="col-5 text-dark m-0 hero-carousel-v2__item__content">
                    <div className={`hero-carousel-v2__item__content__caption ${animateContent ? 'animate' : ''}`}>
                        <h3 className="fs-1 fw-light slide-in">{title}</h3>
                        <h4 className="fs-4 fw-light my-3 slide-in">{description}</h4>
                        <button className="btn btn-primary slide-in">Explore More</button>
                    </div>
                </div>
                <div className="col-7 p-0">
                    <img
                        className="d-block w-100 h-100 object-fit-cover"
                        src={image}
                        alt="Slide"
                    />
                </div>
            </div>
        </Carousel.Item>
    );

    return (
        <div className="position-relative">
            <Carousel 
                fade
                controls={false}
                indicators={false}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                className="hero-carousel-v2 mt-5 pt-2">
                {renderCarouselItem(hero1, "Crafting Structures with Precision and Artistry", "Building modern, sustainable, and innovative spaces that stand the test of time. From concept to creation, we bring your vision to life.")}
                {renderCarouselItem(hero2, "Crafting Structures", "Building modern, sustainable.")}
                {renderCarouselItem(hero1, "Crafting Structures with Precision and Artistry", "Building modern, sustainable, and innovative spaces that stand the test of time. From concept to creation, we bring your vision to life.")}
            </Carousel>
            <div className="hero-carousel__nav">
                {[0, 1, 2].map((index) => (
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