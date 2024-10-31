import React from 'react';
import contact from '../../assets/images/services/contact.jpg';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ContactSection = () => {
    return (
        <Container fluid className='contact-section p-0 m-0 position-relative'>
            <img src={contact} className='contact-section__image' alt="" />
            <div className='contact-section__text'>
                <h2 className='text-white display-4'>Do You Have Any Question? Feel Free To Contact Us</h2>
                <Link to="/contact-v1" className='btn btn-dark hover-filled-slide-down slide-up'>
                    <span>Contact Us</span>
                </Link>
            </div>
        </Container>
    );
}

export default ContactSection;