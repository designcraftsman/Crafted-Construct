import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const PortfolioSection2 = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        const loadPortfolioItems = async () => {
            const loadedItems = await Promise.all(
                projectsData.portfolioItems.map(async (item) => ({
                    ...item,
                    image: await importImage(item.image)
                }))
            );
            setPortfolioItems(loadedItems);
        };
        loadPortfolioItems();
    }, []);

    const groupedItems = [];
    for (let i = 0; i < portfolioItems.length; i += 4) {
        groupedItems.push(portfolioItems.slice(i, i + 4));
    }

    // ... rest of the component code remains the same

    return (
        <div className="container-fluid bg-secondary px-5 py-4 reveal-section" ref={sectionRef}
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
            {/* ... existing JSX ... */}
            
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
                        <div className="d-flex justify-content-between align-items-center ">
                            {group.map((item, itemIndex) => (
                                <Link to="/project-v1" key={itemIndex} className="project-section-v2__figure  p-0   projects-grid__figure">
                                    <img 
                                        src={item.image} 
                                        className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                        alt={`Portfolio ${groupIndex * 3 + itemIndex + 1}`} 
                                    />
                                    <figcaption className="projects-grid__figure__caption">
                                        <h1 className="projects-grid__figure__caption__h1">{item.title}</h1>
                                        <p className="projects-grid__figure__caption__p">{item.description}</p>
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
                                    <h1 className="projects-grid__figure__caption__h1">{item.title}</h1>
                                    <p className="projects-grid__figure__caption__p">{item.description}</p>
                                </figcaption>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>   
    );
}

export default PortfolioSection2;
