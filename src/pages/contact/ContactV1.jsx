import React from 'react';
import header from '../../assets/images/contact/header.jpg'; // Import header image for contact page
import ContactForm from '../../components/contact/ContactForm1'; // Import ContactForm component
import Map from '../../components/contact/Map'; // Import Map component

const ServicesSection = () => {
    return (
    <React.Fragment>
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