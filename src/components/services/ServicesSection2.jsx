import React, { useEffect, useRef } from "react";
import servicesData from '../../data/services/services.json';
import { MdOutlineBuild, MdArchitecture, MdEngineering, MdHomeRepairService, MdLandscape, MdSecurity } from "react-icons/md";

const iconMap = {
    MdOutlineBuild,
    MdArchitecture,
    MdEngineering,
    MdHomeRepairService,
    MdLandscape,
    MdSecurity
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

    const services = servicesData.servicesSection2.map(service => ({
        ...service,
        icon: iconMap[service.icon]
    }));

    return(
        <div className="container my-5 reveal-section" ref={sectionRef}>
            <h2 className="text-primary fw-semibold display-6 reveal-element reveal-1">Our services</h2>
            <h3 className="text-dark fw-medium display-5 reveal-element reveal-2">What We Offer</h3>
            <div className="row my-5 gy-4">
                {services.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className={`bg-white border text-center p-3 rounded reveal-element reveal-${(index % 3) + 3} service-card h-100`}>
                            <service.icon className="display-3 text-primary service-card__icon" />
                            <h4 className="fw-bold my-3 service-card__title">
                                {service.title}
                            </h4>
                            <p className="fs-6">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection2;
