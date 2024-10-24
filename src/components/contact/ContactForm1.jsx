import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'; 
import contactInfoData from '../../data/contact/contact-info.json';

const ContactForm1 = () =>{

    return (
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
            {contactInfoData.contactInfo.map((info, index) => (
              <li key={index} className="mb-3">
                <div className='d-flex align-items-center gap-3'>
                  {info.icon === 'FaMapMarkerAlt' && <FaMapMarkerAlt className='text-muted fs-1' />}
                  {info.icon === 'FaPhoneAlt' && <FaPhoneAlt className='text-muted fs-1' />}
                  {info.icon === 'FaClock' && <FaClock className='text-muted fs-1' />}
                  <span className='fs-5'>{info.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
}

export default ContactForm1;
