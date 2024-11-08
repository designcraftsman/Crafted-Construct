import React from 'react';
import header from '../../assets/images/contact/header.jpg'; // Import header image for contact page
import ContactForm from '../../components/contact/ContactForm'; // Import ContactForm component
import Map from '../../components/contact/Map'; // Import Map component
import Helmet from 'react-helmet';

const ServicesSection = () => {
    return (
    <React.Fragment>
        <Helmet>
                <title>Contact - Crafted Construct</title> {/* Set the page title */}
                <meta name="description" content="Reach out to Crafted Construct for inquiries about our architecture and interior design services. We’re here to help you create your dream space!" /> {/* Set the meta description */}
                <meta name="keywords" content="contact Crafted Construct, architecture inquiries, interior design inquiries, get in touch, consultation request, design services" />{/* Set the meta keywords */}
        </Helmet>
        <div className='container-fluid services-header p-0 m-0 position-relative'> {/* Full-width header container */}
            <img src={header} className='services-header__image' alt="" /> {/* Display header image */}
            <h1 className='text-white display-3 services-header__text'>Contact Us</h1> {/* Header text */}
        </div>
        
        <ContactForm/> {/* Render the contact form */}
        <Map /> {/* Render the map component */}
    </React.Fragment>
    );
};
  
export default ServicesSection;