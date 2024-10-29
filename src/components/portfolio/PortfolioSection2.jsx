import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import portfolio1 from '../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../assets/images/V1/home/portfolioSection/4.jpg';
import { Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components

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
        <Container fluid className="bg-secondary px-5 py-4 reveal-section" ref={sectionRef}
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
            <Row className="justify-content-between align-items-end">
                <Col>
                    <h2 className="text-primary fw-semibold display-6 reveal-element reveal-1">Latest Projects</h2>
                    <h3 className="display-5 text-white reveal-element reveal-2 fw-medium">What We Built</h3>
                </Col>
                <Col className="text-end">
                    <Link to="/portfolio-v2" className='link-fill-right reveal-element reveal-4 text-white fw-bold fs-4'>Check All Projects</Link>
                </Col>
            </Row>

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
                        <Row className="justify-content-between align-items-center">
                            {group.map((item, itemIndex) => (
                                <Col key={itemIndex} className="project-section-v2__figure p-0 projects-grid__figure">
                                    <Link to="/project-v1">
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
                                </Col>
                            ))}
                        </Row>
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
                        <Row className="m-auto">
                            <Col className="m-auto p-0 projects-grid__figure">
                                <img 
                                    src={item.image} 
                                    className="w-100 portfolio-carousel-v2__image projects-grid__figure__image" 
                                    alt={`Portfolio ${i + 1}`} 
                                />
                                <figcaption className="projects-grid__figure__caption">
                                    <h1 className="projects-grid__figure__caption__h1">{item.title}</h1>
                                    <p className="projects-grid__figure__caption__p">{item.description}</p>
                                </figcaption>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default PortfolioSection2;
