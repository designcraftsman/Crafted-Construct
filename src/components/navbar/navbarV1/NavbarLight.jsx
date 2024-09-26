import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../assets/logos/whiteLogo.webp';
import { CiSearch } from "react-icons/ci";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-light px-3 m-0 p-0 fixed-top border-bottom border-1">
      
        <Navbar.Brand href="#home">
          <div className='d-flex align-items-center text-white fw-bolder fs-6'>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <div>
          <CiSearch className='search-icon text-white fs-2' />
        </div>
      
    </Navbar>
  );
};

export default NavigationBar;
