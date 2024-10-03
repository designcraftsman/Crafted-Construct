import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/blackLogo.svg';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass('bg-white navbar-light');
      } else {
        setNavbarClass(' navbar-light');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg px-3 m-0 p-0 fixed-top ${navbarClass}`}>
      {/* Logo - Outside of Collapsing Nav */}
      <a className="navbar-brand  order-1" href=".">
        <div className="d-flex align-items-center text-dark fw-bolder fs-6">
          <img src={Logo} alt="CraftedConstruct" className="logo" />
          <div className="flex-column ms-3 d-lg-flex d-sm-flex d-none">
            Crafted
            <span className="text-primary p-0 m-0">Construct</span>
          </div>
        </div>
      </a>

      {/* Custom Toggle Button */}
      <button className="navbar-toggler custom-toggle border-0  " type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <CgMenuLeftAlt className="text-dark fs-1" />
      </button>

      {/* Collapsible Links */}
      <div className="collapse navbar-collapse pullUp order-lg-2 w-100 m-0  order-3 border-lg-none  rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto bg-white border-lg-0 border-md border-sm ">
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="."><span>Home</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="services-v1"><span>Services</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="portfolio-v1"><span>Portfolio</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="blog-v1"><span>Blog</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="contact-v1"><span>Contact</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link text-dark" href="about-v1"><span>About</span></a>
          </li>
        </ul>
      </div>

      {/* Search Icon - Outside of Collapsing Nav */}
      <div className="d-flex align-items-center order-2">
        <div className="search-box-dark">
          <button className="btn-search-dark">
            <CiSearch className="search-icon text-dark fs-2" />
          </button>
          <input type="text" className="input-search-dark" placeholder="Type to Search..." />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
