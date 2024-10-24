import React from "react";
import Logo from "../../assets/logos/whiteLogo.webp"; 
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="justify-content-between ">
          <Col md={4} className="text-center text-md-start my-3">
            <div className='d-flex align-items-center justify-content-md-start justify-content-center m-auto text-white fw-bolder fs-6'>
                <img src={Logo} alt="CraftedConstruct" className="img-fluid" />
                <div className='d-flex flex-column ms-3 fs-6'>
                Crafted
                <span className='text-primary p-0 m-0'>Construct</span>
                </div>
            </div>
            <div className="social-icons mt-5 m-auto ">
              <FaFacebookF className="social-icon border p-1 fs-1 rounded" />
              <FaInstagram className="social-icon border p-1 fs-1 rounded" />
              <FaLinkedinIn className="social-icon border p-1 fs-1 rounded" />
              <FaTwitter className="social-icon border p-1 fs-1 rounded" />
            </div>
          </Col>

          <Col md={2} className="text-start mx-auto my-3 text-center  text-md-start">
            <h6 className="fs-5 fw-bold">Company</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/about-v1" className="text-white mb-5 link-fill-right text-decoration-none">About</Link></li>
              <li className="mb-3"><Link to="/contact-v1" className="text-white mb-5 link-fill-right text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          <Col md={2} className="text-start mx-auto my-3 text-center  text-md-start">
            <h6 className="fs-5 fw-bold">Get Help</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/faqs" className="text-white mb-5 link-fill-right text-decoration-none">FAQ</Link></li>
              <li className="mb-3"><Link to="/terms-conditions" className="text-white mb-5 link-fill-right text-decoration-none">Terms</Link></li>
              <li className="mb-3"><Link to="/privacy-policy" className="text-white mb-5 link-fill-right text-decoration-none">Privacy</Link></li>
            </ul>
          </Col>
          <Col md={2} className="text-start mx-auto my-3 text-center  text-md-start">
            <h6 className="fs-5 fw-bold">Community</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/blog-v1" className="text-white mb-5 link-fill-right text-decoration-none">Blog</Link></li>
              <li className="mb-3"><Link to="/about-v1" className="text-white mb-5 link-fill-right text-decoration-none">Team</Link></li>
            </ul>
          </Col>
        </Row>
        <hr className="border-3 my-5" />
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              Copyright © 2024 DesignCraftsMan All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
