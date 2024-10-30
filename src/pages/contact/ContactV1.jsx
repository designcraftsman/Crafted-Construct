import React from 'react';
import header from '../../assets/images/V1/contact/header.jpg';
import ContactForm from '../../components/contact/ContactForm1';
import Map from '../../components/contact/Map'


const ServicesSection = () => {
    return (
    <React.Fragment>
        <div className='container-fluid services-header p-0 m-0 position-relative'>
            <img src={header} className=' services-header__image' alt="" />
            <h1 className='text-white  display-3 services-header__text'>Contact Us</h1>
        </div>
        
    <ContactForm/>
    <Map />
    </React.Fragment>
    );
};
  
export default ServicesSection;
  
