import React from 'react';
import { Container } from 'react-bootstrap'; // Import Bootstrap components
import header from '../../assets/images/V1/services/header.jpg';

const ServicesHeader = () => {
    return (
        <Container fluid className='services-header p-0 m-0 position-relative'>
            <img src={header} className='services-header__image' alt="" />
            <h1 className='text-white display-3 services-header__text'>Our Services</h1>
        </Container>
    );
}

export default ServicesHeader;