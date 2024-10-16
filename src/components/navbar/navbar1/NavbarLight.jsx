import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/whiteLogo.webp';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { IoIosArrowDown } from "react-icons/io";

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
          <li className="nav-item dropdown">
            <Link className="nav-link navbar-nav__link dropdown-toggle" to="#" id="navbarDropdownMenuLink">
              <span>Home <IoIosArrowDown className="ms-1"/></span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="/home-v1"><span>Home V1</span></Link></li>
              <li><Link className="dropdown-item" to="/home-v2"><span>Home V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link navbar-nav__link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Services <IoIosArrowDown className="ms-1"/></span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><Link className="dropdown-item" to="/services-v1"><span>Services V1</span></Link></li>
              <li><Link className="dropdown-item" to="/services-v2"><span>Services V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link navbar-nav__link dropdown-toggle"  id="portfolioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Portfolio <IoIosArrowDown className="ms-1"/></span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
              <li><Link className="dropdown-item" to="/portfolio-v1"><span>Portfolio V1</span></Link></li>
              <li><Link className="dropdown-item" to="/portfolio-v2"><span>Portfolio V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link  className="nav-link navbar-nav__link dropdown-toggle " role='button' id='blogDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
              <span>Blog <IoIosArrowDown className="ms-1"/></span>
            </Link> 
            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
              <li><Link className="dropdown-item " to="/blog-v1"><span>Blog V1</span></Link></li>
              <li><Link className="dropdown-item" to="/blog-v2"><span>Blog V2</span></Link></li>
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
