import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/whiteLogo.webp';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass('bg-dark navbar-dark');
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
    <nav className={`navbar navbar-expand-lg px-3 m-0 p-0 fixed-top ${navbarClass}`}>
      {/* Logo - Outside of Collapsing Nav */}
      <a className="navbar-brand  order-1" href=".">
        <div className="d-flex align-items-center text-white fw-bolder fs-6">
          <img src={Logo} alt="CraftedConstruct" className="logo" />
          <div className="flex-column ms-3 d-lg-flex d-sm-flex d-none">
            Crafted
            <span className="text-primary p-0 m-0">Construct</span>
          </div>
        </div>
      </a>

      {/* Custom Toggle Button */}
      <button className="navbar-toggler custom-toggle  " type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <CgMenuLeftAlt className="text-white fs-1" />
      </button>

      {/* Collapsible Links */}
      <div className="collapse navbar-collapse pullUp order-lg-2 order-3  rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav mx-auto lightGreen">
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="."><span>Home</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="services-v1"><span>Services</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="portfolio-v1"><span>Portfolio</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="blog-v1"><span>Blog</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="contact-v1"><span>Contact</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-nav__link" href="about-v1"><span>About</span></a>
          </li>
        </ul>
      </div>

      {/* Search Icon - Outside of Collapsing Nav */}
      <div className="d-flex align-items-center order-2">
        <div className="search-box">
          <button className="btn-search">
            <CiSearch className="search-icon text-white fs-2" />
          </button>
          <input type="text" className="input-search" placeholder="Type to Search..." />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
