import React from 'react';
import header from '../../assets/images/contact/header.jpg'; // Import header image for contact page
import ContactForm from '../../components/contact/ContactForm'; // Import ContactForm component
import Map from '../../components/contact/Map'; // Import Map component

const ContactSection = () => {
    return (
    <React.Fragment>
        <div className='container-fluid contact-header p-0 m-0 position-relative'> {/* Full-width header container */}
            <img src={header} className='contact-header__image' alt="Contact Us Header" /> {/* Improved alt text */}
            <h1 className='text-white display-3 contact-header__text'>Contact Us</h1> {/* Header text */}
        </div>
        
        <ContactForm/> {/* Render the contact form */}
        <Map /> {/* Render the map component */}
    </React.Fragment>
    );
};
  
export default ContactSection;