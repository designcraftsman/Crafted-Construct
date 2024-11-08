import React from 'react';
import ServicesHeader from '../../components/common/header'; // Import ServicesHeader component
import ServicesAbout2 from '../../components/services/ServicesAbout2'; // Import ServicesAbout2 component
import ServicesAbout1 from '../../components/services/ServicesAbout1'; // Import ServicesAbout1 component
import ServicesCarousel from '../../components/services/ServicesCarousel'; // Import ServicesCarousel component
import ContactSection from '../../components/contact/ContactSection'; // Import ContactSection component
import header from '../../assets/images/services/header.jpg'; // Import header image
import Helmet from 'react-helmet';

const Services = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Services - Crafted Construct</title> {/* Set the page title */}
                <meta name="description" content="Explore the comprehensive services offered by Crafted Construct, including residential architecture, commercial design, and custom interior solutions. Transform your space with our expertise!" /> {/* Set the meta description */}
                <meta name="keywords" content="architecture services, interior design services, residential design, commercial architecture, custom interiors, Crafted Construct, design solutions" />{/* Set the meta keywords */}
            </Helmet>
            <ServicesHeader headerImage={header} headerTitle="Our Services"/> {/* Render the services header */}
            <ServicesAbout1/> {/* Render the first about section */}
            <ServicesCarousel/> {/* Render the services carousel */}
            <ServicesAbout2/> {/* Render the second about section */}
            <ContactSection/> {/* Render contact section */}
        </React.Fragment>
    );
};

export default Services;