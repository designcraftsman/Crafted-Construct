import React from "react";
import Logo from "../../assets/logos/whiteLogo.webp"; 
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"; 


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
              <li className="mb-3"><a href="about-v1" className="text-white mb-5 link-fill-right text-decoration-none opacity-75">About</a></li>
              <li className="mb-3"><a href="contact-v1" className="footer-link opacity-75">Contact</a></li>
            </ul>
          </Col>

          <Col md={2} className="text-start mx-auto my-3 text-center  text-md-start">
            <h6 className="fs-5 fw-bold">Get Help</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><a href="faqs" className="footer-link mb-5 opacity-75">FAQ</a></li>
              <li className="mb-3"><a href="terms-conditions" className="footer-link opacity-75 ">Terms</a></li>
              <li className="mb-3"><a href="privacy-policy" className="footer-link  opacity-75">Privacy</a></li>
            </ul>
          </Col>
          <Col md={2} className="text-start mx-auto my-3 text-center  text-md-start">
            <h6 className="fs-5 fw-bold">Community</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><a href="blog-v1" className="footer-link mb-5 opacity-75">Blog</a></li>
              <li className="mb-3"><a href="about-v1" className="footer-link opacity-75 ">Team</a></li>
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
