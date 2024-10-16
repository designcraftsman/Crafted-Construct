import React, { useEffect, useRef } from "react";
import { MdOutlineBuild, MdArchitecture, MdEngineering, MdHomeRepairService, MdLandscape, MdSecurity } from "react-icons/md";

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

    const services = [
        {
            icon: MdOutlineBuild,
            title: "Construction",
            description: "Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality."
        },
        {
            icon: MdArchitecture,
            title: "Architecture",
            description: "Crafting innovative and functional designs that reflect your vision. Our architects blend aesthetics with practicality to create stunning structures."
        },
        {
            icon: MdEngineering,
            title: "Engineering",
            description: "Providing expert engineering solutions for complex projects. We ensure structural integrity and efficiency in every build."
        },
        {
            icon: MdHomeRepairService,
            title: "Renovation",
            description: "Transforming existing spaces into modern, functional areas. We breathe new life into old structures with our renovation expertise."
        },
        {
            icon: MdLandscape,
            title: "Landscaping",
            description: "Creating beautiful outdoor spaces that complement your property. From gardens to hardscaping, we enhance your exterior environment."
        },
        {
            icon: MdSecurity,
            title: "Security Systems",
            description: "Implementing cutting-edge security solutions to protect your property. We integrate advanced technology for your peace of mind."
        }
    ];

    return(
        <div className="container my-5 reveal-section" ref={sectionRef}>
        <h2 className="text-primary fw-semibold  display-6 reveal-element reveal-1">Our services</h2>
        <h3 className="text-dark fw-medium  display-5 reveal-element reveal-2">What We Offer</h3>
        <div className="row my-5 gap-3 d-flex justify-content-between">
            {services.map((service, index) => (
                <div key={index} className={`col-3 bg-white border text-center p-3 rounded reveal-element reveal-${(index % 3) + 3} service-card`}>
                    <service.icon className="display-3 text-primary service-card__icon" />
                    <h4 className="fw-bold my-3 service-card__title">
                    {service.title}
                    </h4>
                    <p className="fs-6">
                    {service.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default ServicesSection2;
