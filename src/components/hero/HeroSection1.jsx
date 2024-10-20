import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import heroData from '../../data/hero/heroSection1.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    setIndex(selectedIndex);
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused && slides.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  // Render component only when slides are loaded
  if (slides.length === 0) return null;

  return (
    <div
      className="hero-carousel"
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
            className={`hero-carousel__item image${i + 1}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-carousel__item__caption staggered-animations">
              <h1 className="display-3 slide-up">{slide.title}</h1>
              <h2 className="fs-4 fw-light mb-3 slide-up">{slide.text}</h2>
              <button className="btn btn-dark hover-filled-slide-down slide-up">
                <span>{slide.buttonText}</span>
              </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Custom navigation dots */}
      <div className="hero-carousel__nav">
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
