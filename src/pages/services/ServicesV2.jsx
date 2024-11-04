import React from 'react';
import AboutSection2 from '../../components/about/AboutSection2'; // Import AboutSection2 component
import ServicesSection2 from '../../components/services/ServicesSection2'; // Import ServicesSection2 component
import ContactSection from '../../components/contact/ContactSection'; // Import ContactSection component

const Services = () => {
    return (
        <React.Fragment>
            <div className='container mt-5 pt-5'>
                <ServicesSection2/> {/* Render the services section */}
                <AboutSection2/> {/* Render the about section */}
            </div>
            <ContactSection/> {/* Render contact section */}
        </React.Fragment>
    );
};

export default Services;