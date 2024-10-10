import React from 'react';
import contact from '../../assets/images/V1/services/contact.jpg';

const ContactSection = () =>{
    return (
    <div className='container-fluid contact-section p-0 m-0 position-relative'>
        <img src={contact} className=' contact-section__image' alt="" />
        <div className='contact-section__text '>
            <h2 className='text-white  display-4 '>Do You Have Any Question? Feel Free To Contact Us</h2>
            <button className='btn btn-lg btn-dark hover-filled-slide-down slide-up'><span>Contact Us</span></button>
        </div>
    </div>
    )
}
export default ContactSection;