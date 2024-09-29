import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../assets/logos/blackLogo.svg';
import { CiSearch } from "react-icons/ci";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-light px-3 m-0 p-0 fixed-top border-bottom border-1">
      
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
          <Nav className="mx-auto"> 
            <Nav.Link className='text-dark' href=".">Home</Nav.Link>
            <Nav.Link className='text-dark' href="#services">Services</Nav.Link>
            <Nav.Link className='text-dark' href="portfolio-v1">Portfolio</Nav.Link>
            <Nav.Link className='text-dark' href="#blog">Blog</Nav.Link>
            <Nav.Link className='text-dark' href="#contact">Contact</Nav.Link>
            <Nav.Link className='text-dark' href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <div>
          <CiSearch className='search-icon text-dark fs-2' />
        </div>
      
    </Navbar>
  );
};

export default NavigationBar;
