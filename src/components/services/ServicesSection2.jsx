import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import servicesData from '../../data/services/services.json';
import * as MdIcons from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const ServicesSection2 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const currentRef = sectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const services = servicesData.services.map(service => ({
        ...service,
        icon: MdIcons[service.icon] || MdIcons.MdOutlineBuild, // Fallback icon if not found
        slug: service.title.toLowerCase().replace(/\s+/g, '-')
    }));

    return (
        <Container className="my-5 reveal-section" ref={sectionRef}>
            <h2 className="text-primary fw-semibold display-6 reveal-element reveal-1">Our services</h2>
            <h3 className="text-dark fw-medium display-5 reveal-element reveal-2">What We Offer</h3>
            <Row className="my-5 gy-4 justify-content-center">
                {services.map((service, index) => (
                    <Col key={index} lg={4} md={6} sm={12}>
                        <Link to={`/service-details/${service.slug}`} className="text-decoration-none">
                            <div className={`bg-white border text-center p-3 rounded reveal-element reveal-${(index % 3) + 3} service-card h-100`}>
                                <service.icon className="display-3 text-primary service-card__icon" aria-label={`${service.title} icon`} />
                                <h4 className="fw-bold my-3 service-card__title text-dark">
                                    {service.title}
                                </h4>
                                <p className="fs-6 text-secondary">
                                    {service.shortDescription}
                                </p>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ServicesSection2;
