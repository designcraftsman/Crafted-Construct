import React, { useEffect, useRef, useState } from "react";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'; // Import React-Bootstrap components
import aboutData from '../../data/about/aboutSection2.json';

const iconMap = {
  MdOutlineHomeWork,
  RiTeamFill,
  FaBuilding,
  FaBusinessTime
};

const AboutSection2 = () => {
    const sectionRef = useRef(null);
    const [data] = useState(aboutData);

    useEffect(() => {
        // Counter function with requestAnimationFrame
        function startCounter(id, start, end, duration) {
            let obj = document.getElementById(id);
            if (!obj) return;  // Check if the element exists
        
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.textContent = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Intersection Observer API to detect when the component is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start the counters when the section is in view
                    data.counters.forEach((counter, index) => {
                        startCounter(`count${index + 1}`, 0, counter.count, 3000);
                    });
                    // Add the active class to trigger animations
                    entry.target.classList.add('active');
                    // Disconnect the observer once the animation starts
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        // Observe the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Start observing the section for visibility
        }

        // Cleanup function
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [data.counters]);

    return (
        <Container className="my-5 py-5 reveal-section" ref={sectionRef}>
            <Row>
                <Col lg={6} md={12} className="m-auto mb-4 reveal-element">
                    <h3 className="fs-1 fw-medium">{data.title}</h3>
                    <h4 className="fs-3 fw-normal">{data.subtitle}</h4>
                </Col>
                <Col lg={6} md={12} className="m-auto">
                    <Row className="justify-content-center">
                        <Col lg={10} md={8} sm={10}>
                            <Row className="row-cols-2 g-4">
                                {data.counters.map((counter, index) => {
                                    const Icon = iconMap[counter.icon];
                                    return (
                                        <Col key={index} className="text-center reveal-element">
                                            <div className="text-primary fw-lighter d-flex align-items-center justify-content-center">
                                                <Icon className="fs-1" />
                                                <span id={`count${index + 1}`} className="mx-2 fs-1">0</span>+
                                            </div>
                                            <hr className="my-2" />
                                            <h2 className="fs-5 fw-light mt-2">{counter.label}</h2>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection2;
