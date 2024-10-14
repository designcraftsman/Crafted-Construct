import React, { useEffect, useRef } from "react";
import { MdOutlineBuild } from "react-icons/md";

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return(
        <div className="container my-5 reveal-section" ref={sectionRef}>
        <h2 className="text-primary fw-semibold text-center fs-4 reveal-element reveal-1">Our services</h2>
        <h3 className="text-dark fw-medium text-center fs-2 reveal-element reveal-2">What We Offer</h3>
        <div className="row my-5 gap-3 d-flex justify-content-evenly">
            {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className={`col-3 bg-white border text-center p-3 rounded reveal-element reveal-${(index % 3) + 3} service-card`}>
                    <MdOutlineBuild className="display-3 text-primary service-card__icon" />
                    <h4 className="fw-bold my-3 service-card__title">
                    Construction
                    </h4>
                    <p className="fs-6">
                    Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality. 
                    </p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default ServicesSection2;