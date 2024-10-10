import React from 'react';

import ServicesHeader from '../../components/services/ServicesHeader';
import service1 from '../../assets/images/V1/services/1.jpg';
import ServicesAbout from '../../components/services/ServicesAbout';
import ServicesCarousel from '../../components/services/ServicesCarousel';
import ContactSection from '../../components/contact/ContactSection';




const Services = () => {
    return (
        <React.Fragment>
            <ServicesHeader/>
            <ServicesAbout/>
            <ServicesCarousel/>

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-lg-5 col-md-5 col-12 m-auto'>
                        <h2 className='fs-2 fw-semibold text-primary'>
                        Expert Construction Solutions Tailored to Your Needs             
                        </h2>
                        <p className='fs-6 fw-lighter'>
                        At CraftConstruct, we take pride in delivering high-quality construction services, from concept to completion. Whether you're planning residential, commercial, or industrial projects, our experienced team is committed to providing customized solutions that meet your goals and exceed expectations. With a focus on precision, safety, and sustainability, we ensure every project is built to last. Trust us to bring your vision to life with expertise, dedication, and attention to detail.
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12  m-auto">
                        <img src={service1} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <ContactSection/>
        </React.Fragment>
    );
};

export default Services;
