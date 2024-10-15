import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import portfolio1 from '../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../assets/images/V1/home/portfolioSection/4.jpg';

const PortfolioSection2 = () => {
    const [index, setIndex] = useState(0);
    const sectionRef = useRef(null);

    const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio1, portfolio2, portfolio3];

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const renderCarouselItems = () => {
        const items = [];
        for (let i = 0; i < portfolioImages.length; i++) {
            items.push(
                <Carousel.Item key={i}>
                    <div className="row m-0">
                        {[...Array(4)].map((_, j) => (
                            <div key={j} className="col-3 p-0 projects-grid__figure ">
                                <img 
                                    src={portfolioImages[(i + j) % portfolioImages.length]} 
                                    className="w-100 portfolio-carousel-v2__image  projects-grid__figure__image " 
                                    alt={`Portfolio ${(i + j) % portfolioImages.length + 1}`} 
                                />
                                <figcaption className="projects-grid__figure__caption">
                                    <h1 className="projects-grid__figure__caption__h1">Project Title</h1>
                                    <p className="projects-grid__figure__caption__p">Project Description</p>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            );
        }
        return items;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('active');
                }
            },
            { threshold: 0.1 }
        );

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
        <div className="container-fluid bg-secondary p-0 pt-5 reveal-section" ref={sectionRef}>
            <h2 className="text-primary fw-semibold fs-4 text-center reveal-element reveal-1">Latest Projects</h2>
            <h3 className="text-center fw-medium fs-2 text-white reveal-element reveal-2">What We Built</h3>
            <Carousel 
                className="mt-5 portfolio-carousel-v2 reveal-element reveal-3" 
                indicators={false} 
                controls={false} 
                activeIndex={index} 
                onSelect={handleSelect}
                interval={5000}
            >
                {renderCarouselItems()}
            </Carousel>
        </div>   
    );
}

export default PortfolioSection2;