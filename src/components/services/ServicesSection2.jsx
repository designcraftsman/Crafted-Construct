import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import servicesData from '../../data/services/services.json';
import { MdHome, MdBusiness, MdBuildCircle, MdDesignServices, MdEco } from "react-icons/md";

const iconMap = {
    "Custom Residential Construction": MdHome,
    "Commercial Building Construction": MdBusiness,
    "Renovation and Remodeling": MdBuildCircle,
    "Interior Design Consulting": MdDesignServices,
    "Sustainable Building Practices": MdEco
};

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

    const services = servicesData.servicesCarousel.map(service => ({
        ...service,
        icon: iconMap[service.title],
        slug: service.title.toLowerCase().replace(/\s+/g, '-')
    }));

    return(
        <div className="container my-5 reveal-section" ref={sectionRef}>
            <h2 className="text-primary fw-semibold display-6 reveal-element reveal-1">Our services</h2>
            <h3 className="text-dark fw-medium display-5 reveal-element reveal-2">What We Offer</h3>
            <div className="row my-5 gy-4 justify-content-center">
                {services.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <Link to={`/service-details/${service.slug}`} className="text-decoration-none">
                            <div className={`bg-white border text-center p-3 rounded reveal-element reveal-${(index % 3) + 3} service-card h-100`}>
                                <service.icon className="display-3 text-primary service-card__icon" />
                                <h4 className="fw-bold my-3 service-card__title text-dark">
                                    {service.title}
                                </h4>
                                <p className="fs-6 text-secondary">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection2;
