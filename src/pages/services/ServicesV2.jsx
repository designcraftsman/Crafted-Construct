import React from 'react';
import AboutSection2 from '../../components/about/AboutSection2';
import ServicesSection2 from '../../components/services/ServicesSection2';
import ContactSection from '../../components/contact/ContactSection';





const Services = () => {
    return (
        <React.Fragment>
            <div className='container mt-5 pt-5'>
                <ServicesSection2/>
                <AboutSection2/>
        </div>
        <ContactSection/>
        </React.Fragment>
    );
};

export default Services;
