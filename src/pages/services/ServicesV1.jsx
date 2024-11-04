import React from 'react';
import ServicesHeader from '../../components/services/ServicesHeader'; // Import ServicesHeader component
import ServicesAbout2 from '../../components/services/ServicesAbout2'; // Import ServicesAbout2 component
import ServicesAbout1 from '../../components/services/ServicesAbout1'; // Import ServicesAbout1 component
import ServicesCarousel from '../../components/services/ServicesCarousel'; // Import ServicesCarousel component
import ContactSection from '../../components/contact/ContactSection'; // Import ContactSection component

const Services = () => {
    return (
        <React.Fragment>
            <ServicesHeader/> {/* Render the services header */}
            <ServicesAbout1/> {/* Render the first about section */}
            <ServicesCarousel/> {/* Render the services carousel */}
            <ServicesAbout2/> {/* Render the second about section */}
            <ContactSection/> {/* Render contact section */}
        </React.Fragment>
    );
};

export default Services;