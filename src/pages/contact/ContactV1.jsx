import React from 'react';
import header from '../../assets/images/V1/contact/header.jpg';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import Footer from '../../components/footer/FooterV1';  
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'; 

const ServicesSection = () => {
    return (
    <React.Fragment>
      <NavigationBar />
        <div className='container-fluid services-header p-0 m-0 position-relative'>
            <img src={header} className=' services-header__image' alt="" />
            <h1 className='text-white  display-3 services-header__text'>Contact Us</h1>
        </div>
        
    <div className="container contact-section my-5">
      <div className="row gap-5">
        {/* Form Section */}
        <div className="col-lg-8">
          <h4 className="contact-heading text-decoration-underline">GET IN TOUCH</h4>
          <p>
            Our objective at Woodenx is to bring together our visitor's societies
            and spirits with our own, communicating enthusiasm and liberality in
            the food we share.
          </p>
          <form className='custom-form'>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Comment *"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info fw-bolder me-auto submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="col-lg-3 contact-info m-auto">
          <ul className="list-unstyled fs-5">
            <li className="mb-3">
                <div className='d-flex align-items-center gap-3'>
              <FaMapMarkerAlt className='text-muted fs-1 ' /> 
              <span className='fs-5'>9989 Hilldale Rd.
              Los Angeles, CA 90004
              </span>
              </div>
            </li>
            <li className="mb-3">
            <div className='d-flex align-items-center gap-3'>
              <FaPhoneAlt className='text-muted fs-1 ' /> 
              <span className='fs-5'>9989 Hilldale Rd.
              Los Angeles, CA 90004
              </span>
              </div>
            </li>
            <li className="mb-3">
            <div className='d-flex align-items-center gap-3'>
              <FaClock className='text-muted fs-1 ' /> 
              <span className='fs-5'>Monday – Friday 6 am to 8 pm EST
              </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <Footer />
      </React.Fragment>
    );
  };
  
  export default ServicesSection;
  
