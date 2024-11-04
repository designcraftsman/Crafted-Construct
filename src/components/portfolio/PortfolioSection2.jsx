import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import projectsData from '../../data/portfolio/projects.json'; // Import the JSON data

// Import images dynamically
const importImage = (imagePath) => {
    return import(`../../assets/${imagePath}`).then(module => module.default); // Dynamically import image
};

const PortfolioSection2 = () => {
    const [index, setIndex] = useState(0); // State for current slide index
    const [isPaused, setIsPaused] = useState(false); // State for pause status
    const sectionRef = useRef(null); // Reference for the section
    const [portfolioItems, setPortfolioItems] = useState([]); // State for portfolio items

    useEffect(() => {
        const loadPortfolioItems = async () => {
            const loadedItems = await Promise.all(
                projectsData.portfolioItems.map(async (item) => ({
                    id: item.id,
                    image: await importImage(item.image1), // Use the importImage function
                    title: item.title,
                    description: item.description
                }))
            );
            setPortfolioItems(loadedItems); // Set loaded items to state
        };
        loadPortfolioItems();
    }, []);

    const groupedItems = [];
    for (let i = 0; i < portfolioItems.length; i += 3) {
        groupedItems.push(portfolioItems.slice(i, i + 3)); // Group items for carousel
    }

    const totalSlides = groupedItems.length; // Total number of slides

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex); // Set selected slide index
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1)); // Auto-slide functionality
            }, 5000);

            return () => clearInterval(interval); // Cleanup interval
        }
    }, [isPaused, totalSlides]);

    useEffect(() => {
        const sectionElement = sectionRef.current; // Store the current value in a variable
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionElement.classList.add('active'); // Add active class when in view
                }
            },
            { threshold: 0.1 }
        );

        if (sectionElement) {
            observer.observe(sectionElement); // Observe the section
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement); // Cleanup observer
            }
        };
    }, []);

    // Handler for going to the previous slide
    const handlePrevClick = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1)); // Go to previous slide
    };

    // Handler for going to the next slide
    const handleNextClick = () => {
        setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1)); // Go to next slide
    };

    return (
        <div className="container-fluid bg-secondary px-5 py-4 reveal-section position-relative" ref={sectionRef}
             onMouseEnter={() => setIsPaused(true)} // Pause on mouse enter
             onMouseLeave={() => setIsPaused(false)}> 
            <div className="d-flex justify-content-between flex-wrap align-items-end">
                <div>
                    <h2 className="text-primary fw-semibold display-6 reveal-element reveal-1">Latest Projects</h2> {/* Section title */}
                    <h3 className="display-5 text-white reveal-element reveal-2 fw-medium">What We Built</h3> {/* Section subtitle */}
                </div>
                <div>
                    <Link to="/portfolio-v2" className='btn btn-dark hover-filled-slide-down reveal-element reveal-4 text-white fw-bold'>
                        <span>Check All Projects</span> {/* Button to view all projects */}
                    </Link>
                </div>
            </div>

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
                        <div className="d-flex justify-content-evenly align-items-center ">
                            {group.map((item, itemIndex) => (
                                <Link to={`/project-v1/${item.id}`} key={itemIndex} className="project-section-v2__figure p-0 projects-grid__figure">
                                    <img 
                                        src={item.image} 
                                        className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                        alt={`Portfolio ${groupIndex * 3 + itemIndex + 1}`} 
                                    />
                                    <figcaption className="projects-grid__figure__caption">
                                        <h1 className="projects-grid__figure__caption__h1">{item.title}</h1> {/* Project title */}
                                        <p className="projects-grid__figure__caption__p">{item.description}</p> {/* Project description */}
                                    </figcaption>
                                </Link>
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
                        <div className="row m-auto ">
                            <div className="col-12 m-auto p-0 projects-grid__figure">
                                <img 
                                    src={item.image} 
                                    className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                    alt={`Portfolio ${i + 1}`} 
                                />
                                <figcaption className="projects-grid__figure__caption">
                                    <h1 className="projects-grid__figure__caption__h1">{item.title}</h1> {/* Project title */}
                                    <p className="projects-grid__figure__caption__p">{item.description}</p> {/* Project description */}
                                </figcaption>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <button
                className="project-section-v2__control project-section-v2__control--prev reveal-element reveal-1"
                onClick={handlePrevClick}
                aria-label="Previous" // Accessibility label
            >
                <FaChevronLeft className="fs-2 icon" /> {/* Previous slide icon */}
            </button>

            <button
                className="project-section-v2__control project-section-v2__control--next reveal-element reveal-1"
                onClick={handleNextClick}
                aria-label="Next" // Accessibility label
            >
                <FaChevronRight className="fs-2 icon" /> {/* Next slide icon */}
            </button>
        </div>   
    );
}

export default PortfolioSection2;
