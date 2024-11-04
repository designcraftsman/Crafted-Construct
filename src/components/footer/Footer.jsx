import React, { useState, useEffect } from "react";
import logoData from "../../data/logo.json";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"; 
import { Link } from 'react-router-dom';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const Footer = () => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const loadLogo = async () => {
      const logoImage = await importImage(logoData.logoLight);
      setLogo(logoImage);
    };
    loadLogo();
  }, []);

  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="justify-content-between ">
          <Col md={4} className="text-center text-md-start my-3">
            <div className='d-flex align-items-center footer-brand justify-content-md-start justify-content-center m-auto text-white fw-bolder fs-6'>
                {logo && <img src={logo} alt="CraftedConstruct Logo" className="logo" />}
            </div>
            <div className="social-icons mt-5 m-auto">
              <Link to="//www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-2" aria-label="Facebook">
                <FaFacebookF className="social-icon border p-1 fs-1 rounded" />
              </Link>
              <Link to="//www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-2" aria-label="Instagram">
                <FaInstagram className="social-icon border p-1 fs-1 rounded" />
              </Link>
              <Link to="//www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2" aria-label="LinkedIn">
                <FaLinkedinIn className="social-icon border p-1 fs-1 rounded" />
              </Link>
              <Link to="//www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-2" aria-label="Twitter">
                <FaTwitter className="social-icon border p-1 fs-1 rounded" />
              </Link>
            </div>
          </Col>

          <Col md={2} className="text-start mx-auto my-3 text-center text-md-start">
            <h6 className="fs-5 fw-bold">Company</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/about" className="text-white mb-5 link-fill-right text-decoration-none">About</Link></li>
              <li className="mb-3"><Link to="/contact" className="text-white mb-5 link-fill-right text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          <Col md={2} className="text-start mx-auto my-3 text-center text-md-start">
            <h6 className="fs-5 fw-bold">Get Help</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/faqs" className="text-white mb-5 link-fill-right text-decoration-none">FAQs</Link></li>
              <li className="mb-3"><Link to="/terms-conditions" className="text-white mb-5 link-fill-right text-decoration-none">Terms</Link></li>
              <li className="mb-3"><Link to="/privacy-policy" className="text-white mb-5 link-fill-right text-decoration-none">Privacy</Link></li>
            </ul>
          </Col>
          <Col md={2} className="text-start mx-auto my-3 text-center text-md-start">
            <h6 className="fs-5 fw-bold">Community</h6>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><Link to="/blog-v1" className="text-white mb-5 link-fill-right text-decoration-none">Blog</Link></li>
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
