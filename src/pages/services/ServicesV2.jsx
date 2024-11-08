import React from 'react';
import AboutSection2 from '../../components/about/AboutSection2'; // Import AboutSection2 component
import ServicesSection2 from '../../components/services/ServicesSection2'; // Import ServicesSection2 component
import ContactSection from '../../components/contact/ContactSection'; // Import ContactSection component
import Helmet from 'react-helmet';

const Services = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Services - Crafted Construct</title> {/* Set the page title */}
                <meta name="description" content="Explore the comprehensive services offered by Crafted Construct, including residential architecture, commercial design, and custom interior solutions. Transform your space with our expertise!" /> {/* Set the meta description */}
                <meta name="keywords" content="architecture services, interior design services, residential design, commercial architecture, custom interiors, Crafted Construct, design solutions" />{/* Set the meta keywords */}
            </Helmet>
            <div className='container mt-5 pt-5'>
                <ServicesSection2/> {/* Render the services section */}
                <AboutSection2/> {/* Render the about section */}
            </div>
            <ContactSection/> {/* Render contact section */}
        </React.Fragment>
    );
};

export default Services;