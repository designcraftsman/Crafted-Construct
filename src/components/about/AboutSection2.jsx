import React, { useEffect, useRef } from "react";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";

const AboutSection2 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Counter function with requestAnimationFrame
        function counter(id, start, end, duration) {
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
                    counter("count1", 0, 15, 3000); // Projects
                    counter("count2", 0, 200, 3000); // Team Members
                    counter("count3", 0, 15, 3000); // Buildings
                    counter("count4", 0, 40, 3000); // Years of Experience
                    // Add the active class to trigger animations
                    entry.target.classList.add('active');
                    // Disconnect the observer once the animation starts
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        // Observe the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Add reveal animation classes
        const revealElements = sectionRef.current.querySelectorAll('.reveal-element');
        revealElements.forEach((el, index) => {
            el.classList.add(`reveal-${index + 1}`);
        });

        const currentRef = sectionRef.current;
        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); // Empty dependency array to run once on component mount

    return (
        <div className="container my-5 py-5 reveal-section" ref={sectionRef}>
            <div className="row">
                <div className="col-lg-6 col-md-12 m-auto mb-4 reveal-element">
                    <h3 className="fs-1 fw-medium">
                        Let's Get Started We Are Now Constructing A Dream
                    </h3>
                    <h4 className="fs-3 fw-normal">
                        Building homes that are a perfect blend of comfort, design, and durability. From custom homes to renovations, we make your dream home a reality.
                    </h4>
                </div>
                <div className="col-lg-6 col-md-12 m-auto">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-8 col-sm-10">
                            <div className="row row-cols-2 g-4">
                                <div className="col text-center reveal-element">
                                    <div className="text-primary fw-lighter d-flex align-items-center justify-content-center">
                                        <MdOutlineHomeWork className="fs-1" />
                                        <span id="count1" className="mx-2 fs-1">0</span>+
                                    </div>
                                    <hr className="my-2" />
                                    <h2 className="fs-5 fw-light mt-2">Projects</h2>
                                </div>
                                <div className="col text-center reveal-element">
                                    <div className="text-primary fw-lighter d-flex align-items-center justify-content-center">
                                        <FaBuilding className="fs-1" />
                                        <span id="count3" className="mx-2 fs-1">0</span>+
                                    </div>
                                    <hr className="my-2" />
                                    <h2 className="fs-5 fw-light mt-2">Buildings</h2>
                                </div>
                                <div className="col text-center reveal-element">
                                    <div className="text-primary fw-lighter d-flex align-items-center justify-content-center">
                                        <RiTeamFill className="fs-1" />
                                        <span id="count2" className="mx-2 fs-1">0</span>+
                                    </div>
                                    <hr className="my-2" />
                                    <h2 className="fs-5 fw-light mt-2">Team Members</h2>
                                </div>
                                <div className="col text-center reveal-element">
                                    <div className="text-primary fw-lighter d-flex align-items-center justify-content-center">
                                        <FaBusinessTime className="fs-1" />
                                        <span id="count4" className="mx-2 fs-1">0</span>+
                                    </div>
                                    <hr className="my-2" />
                                    <h2 className="fs-5 fw-light mt-2">Years Experience</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection2;