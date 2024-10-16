import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import portfolio1 from '../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../assets/images/V1/home/portfolioSection/4.jpg';

const PortfolioSection2 = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);

    const portfolioItems = [
        { image: portfolio1, title: "Project 1", description: "Description for Project 1" },
        { image: portfolio2, title: "Project 2", description: "Description for Project 2" },
        { image: portfolio3, title: "Project 3", description: "Description for Project 3" },
        { image: portfolio4, title: "Project 4", description: "Description for Project 4" },
        { image: portfolio1, title: "Project 5", description: "Description for Project 5" },
        { image: portfolio2, title: "Project 6", description: "Description for Project 6" },
        { image: portfolio3, title: "Project 7", description: "Description for Project 7" },
    ];

    const groupedItems = [];
    for (let i = 0; i < portfolioItems.length; i += 3) {
        groupedItems.push(portfolioItems.slice(i, i + 3));
    }

    const totalSlides = groupedItems.length;

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isPaused, totalSlides]);

    useEffect(() => {
        const sectionElement = sectionRef.current; // Store the current value in a variable
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionElement.classList.add('active');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);

    return (
        <div className="container-fluid bg-secondary py-3 reveal-section" ref={sectionRef}
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
            <h2 className="text-primary fw-semibold  display-6 text-center reveal-element reveal-1">Latest Projects</h2>
            <h3 className="text-center  display-5 text-white reveal-element reveal-2">What We Built</h3>
            
            {/* Large screen carousel */}
            <Carousel 
                className="mt-5 portfolio-carousel-v2 reveal-element reveal-3 d-none d-md-block" 
                indicators={false} 
                controls={false} 
                activeIndex={index} 
                onSelect={handleSelect}
            >
                {groupedItems.map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex}>
                        <div className="row m-auto gap-3 p-4">
                            {group.map((item, itemIndex) => (
                                <a href="project-v1" key={itemIndex} className="col-3 m-auto p-0 projects-grid__figure">
                                    <img 
                                        src={item.image} 
                                        className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                        alt={`Portfolio ${groupIndex * 3 + itemIndex + 1}`} 
                                    />
                                    <figcaption className="projects-grid__figure__caption">
                                        <h1 className="projects-grid__figure__caption__h1">{item.title}</h1>
                                        <p className="projects-grid__figure__caption__p">{item.description}</p>
                                    </figcaption>
                                </a>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Small screen carousel */}
            <Carousel 
                className="mt-5 portfolio-carousel-v2 reveal-element reveal-3 d-md-none" 
                indicators={false} 
                controls={false} 
                activeIndex={index} 
                onSelect={handleSelect}
            >
                {portfolioItems.map((item, i) => (
                    <Carousel.Item key={i}>
                        <div className="row m-auto p-4">
                            <div className="col-12 m-auto p-0 projects-grid__figure">
                                <img 
                                    src={item.image} 
                                    className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                    alt={`Portfolio ${i + 1}`} 
                                />
                                <figcaption className="projects-grid__figure__caption">
                                    <h1 className="projects-grid__figure__caption__h1">{item.title}</h1>
                                    <p className="projects-grid__figure__caption__p">{item.description}</p>
                                </figcaption>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Navigation buttons for small screen */}
            <div className="testimonials-carousel__nav testimonials-carousel__small-screen text-center py-5 reveal-element reveal-6 d-md-none">
                {portfolioItems.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={index === i ? 'active' : ''}
                    />
                ))}
            </div>

            {/* Navigation buttons for large screen */}
            <div className="testimonials-carousel__nav testimonials-carousel__large-screen text-center py-5 reveal-element reveal-6 d-none d-md-block">
                {groupedItems.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={index === i ? 'active' : ''}
                    />
                ))}
            </div>
        </div>   
    );
}

export default PortfolioSection2;
