import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/whiteLogo.webp';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { IoIosArrowDown } from "react-icons/io";

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');
  const [dropdownMenuClass, setDropdownMenuClass] = useState('dropdown-menu');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass('bg-dark navbar-light navbar-scrolled');
        setDropdownMenuClass('bg-dark');
      } else {
        setNavbarClass('navbar-light');
        setDropdownMenuClass('dropdown-menu');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

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
          <li className={`nav-item dropdown ${activeDropdown === 'home' ? 'show' : ''}`}>
            <a 
              href="#"
              className="nav-link navbar-nav__link dropdown-toggle" 
              role='button' 
              onClick={(e) => toggleDropdown(e, 'home')}
            >
              <span>Home <IoIosArrowDown className="ms-1"/></span>
            </a>
            <ul className={`dropdown-menu ${dropdownMenuClass} ${activeDropdown === 'home' ? 'show' : ''}`}>
              <li><Link className="dropdown-item text-white text-center" to="/home-v1"><span>Home V1</span></Link></li>
              <li><Link className="dropdown-item text-white text-center" to="/home-v2"><span>Home V2</span></Link></li>
            </ul>
          </li>
          <li className={`nav-item dropdown ${activeDropdown === 'services' ? 'show' : ''}`}>
            <a 
              href="#"
              className="nav-link navbar-nav__link dropdown-toggle" 
              role='button' 
              onClick={(e) => toggleDropdown(e, 'services')}
            >
              <span>Services <IoIosArrowDown className="ms-1"/></span>
            </a>
            <ul className={`dropdown-menu ${dropdownMenuClass} ${activeDropdown === 'services' ? 'show' : ''}`}>
              <li><Link className="dropdown-item text-white text-center" to="/services-v1"><span>Services V1</span></Link></li>
              <li><Link className="dropdown-item text-white text-center" to="/services-v2"><span>Services V2</span></Link></li>
            </ul>
          </li>
          <li className={`nav-item dropdown ${activeDropdown === 'portfolio' ? 'show' : ''}`}>
            <a 
              href="#"
              className="nav-link navbar-nav__link dropdown-toggle" 
              role='button' 
              onClick={(e) => toggleDropdown(e, 'portfolio')}
            >
              <span>Portfolio <IoIosArrowDown className="ms-1"/></span>
            </a>
            <ul className={`dropdown-menu ${dropdownMenuClass} ${activeDropdown === 'portfolio' ? 'show' : ''}`}>
              <li><Link className="dropdown-item text-white text-center" to="/portfolio-v1"><span>Portfolio V1</span></Link></li>
              <li><Link className="dropdown-item text-white text-center" to="/portfolio-v2"><span>Portfolio V2</span></Link></li>
            </ul>
          </li>
          <li className={`nav-item dropdown ${activeDropdown === 'blog' ? 'show' : ''}`}>
            <a 
              href="#"
              className="nav-link navbar-nav__link dropdown-toggle" 
              role='button' 
              onClick={(e) => toggleDropdown(e, 'blog')}
            >
              <span>Blog <IoIosArrowDown className="ms-1"/></span>
            </a>
            <ul className={`dropdown-menu ${dropdownMenuClass} ${activeDropdown === 'blog' ? 'show' : ''}`}>
              <li><Link className="dropdown-item text-white text-center" to="/blog-v1"><span>Blog V1</span></Link></li>
              <li><Link className="dropdown-item text-white text-center" to="/blog-v2"><span>Blog V2</span></Link></li>
            </ul>
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
