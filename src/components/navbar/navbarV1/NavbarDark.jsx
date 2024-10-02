import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../assets/logos/blackLogo.svg';
import { CiSearch } from "react-icons/ci";

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) { // Adjust this value based on when you want the class to be applied
        setNavbarClass('bg-white navbar-light shadow-sm');
      } else {
        setNavbarClass('navbar-light');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`px-3 m-0 p-0  fixed-top border-bottom border-1 ${navbarClass}`}>
      <Navbar.Brand href=".">
        <div className='d-flex align-items-center text-dark fw-bolder fs-6'>
          <img src={Logo} alt="CraftedConstruct" className="logo" />
          <div className='d-flex flex-column ms-3'>
            Crafted
            <span className='text-primary p-0 m-0'>Construct</span>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="mx-auto lightGreen pullUp navbar-nav">
          <Nav.Link href="." className="navbar-nav__link text-dark"><span>Home</span></Nav.Link>
          <Nav.Link href="services-v1" className="navbar-nav__link text-dark"><span>Services</span></Nav.Link>
          <Nav.Link href="portfolio-v1" className="navbar-nav__link text-dark"><span>Portfolio</span></Nav.Link>
          <Nav.Link href="blog-v1" className="navbar-nav__link text-dark"><span>Blog</span></Nav.Link>
          <Nav.Link href="contact-v1" className="navbar-nav__link text-dark"><span>Contact</span></Nav.Link>
          <Nav.Link href="about-v1" className="navbar-nav__link text-dark"><span>About</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div>
        
        <div class="search-box-dark">
        <button class="btn-search-dark">
          <CiSearch className='search-icon text-dark fs-2' />
        </button>
        <input type="text" class="input-search-dark" placeholder="Type to Search..."/>
      </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
