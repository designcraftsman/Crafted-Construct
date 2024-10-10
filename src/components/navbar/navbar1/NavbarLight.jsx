import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/whiteLogo.webp';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass('bg-dark navbar-light navbar-scrolled');
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
      <Link className="navbar-brand order-1" to="/">
        <div className="d-flex align-items-center text-white fw-bolder fs-6">
          <img src={Logo} alt="CraftedConstruct" className="logo" />
        </div>
      </Link>

      {/* Custom Toggle Button */}
      <button className="navbar-toggler custom-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <CgMenuLeftAlt className="text-white fs-1" />
      </button>

      {/* Collapsible Links */}
      <div className="collapse navbar-collapse pullUp order-lg-2 w-100 m-0 order-3 border-lg-none rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto">
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/"><span>Home</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/services-v1"><span>Services</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/portfolio-v1"><span>Portfolio</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/blog-v1"><span>Blog</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/contact-v1"><span>Contact</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/about-v1"><span>About</span></Link>
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
