import React from 'react';
import { Container } from 'react-bootstrap'; // Import Bootstrap components
import header from '../../assets/images/services/header.jpg'; // Import header image

const ServicesHeader = () => {
    return (
        <Container fluid className='services-header p-0 m-0 position-relative'> {/* Full-width container for header */}
            <img src={header} className='services-header__image' alt="" /> {/* Display header image */}
            <h1 className='text-white display-3 services-header__text'>Our Services</h1> {/* Header text */}
        </Container>
    );
}

export default ServicesHeader;