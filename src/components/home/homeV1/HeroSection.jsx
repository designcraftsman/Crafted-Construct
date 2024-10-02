import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../assets/images/V1/home/heroSection/1.jpg';
import image2 from '../../../assets/images/V1/home/heroSection/2.jpg';
import image3 from '../../../assets/images/V1/home/heroSection/1.jpg';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const slides = [
    {
      image: image1,
      title: "Crafting Structures with Precision and Artistry",
      text: "Building modern, sustainable, and innovative spaces that stand the test of time. From concept to creation, we bring your vision to life.",
      buttonText: "Explore Our Projects"
    },
    {
      image: image2,
      title: "Innovative Designs for Modern Living",
      text: "Experience the perfect blend of functionality and aesthetics with our bespoke designs.",
      buttonText: "Explore Our Projects"
    },
    {
      image: image3,
      title: "Transforming Ideas into Reality",
      text: "From sketches to final construction, we ensure a seamless journey from start to finish.",
      buttonText: "Explore Our Projects"
    }
  ];

  return (
    <div
      className="custom-hero-carousel"  // Scoped class for this carousel
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        fade={true}
      >
        {slides.map((slide, i) => (
          <Carousel.Item
            key={i}
            className={`carousel-item-custom image${i + 1}`} // Add unique class for each image
            style={{ backgroundImage: `url(${slide.image})` }} // Set background image dynamically
          >
            <div className="carousel-caption staggered-animations">
              <h1 className="display-3 slide-up">{slide.title}</h1>
              <h2 className="fs-4 fw-light mb-3 slide-up">{slide.text}</h2>
              <button className="btn btn-dark hover-filled-slide-down slide-up">
                <span>{slide.buttonText}</span>
              </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={index === i ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
