import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logos/blackLogo.svg';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass('bg-white navbar-light');
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
    <nav className={`navbar navbar-expand-lg bg-white px-3 m-0 p-0 fixed-top ${navbarClass}`}>
      {/* Logo - Outside of Collapsing Nav */}
      <Link className="navbar-brand order-1" to="/"> {/* Change to Link */}
        <div className="d-flex align-items-center text-dark fw-bolder fs-6">
          <img src={Logo} alt="CraftedConstruct" className="logo" />
        </div>
      </Link>

      {/* Custom Toggle Button */}
      <button className="navbar-toggler custom-toggle border-0" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
        <CgMenuLeftAlt className="text-dark fs-1" />
      </button>

      {/* Collapsible Links */}
      <div className="collapse navbar-collapse pullUp  order-lg-2 w-100 m-0 order-3 border-lg-none rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto  border-lg-0 border-md border-sm">
          <li className="nav-item dropdown">
            <a className="nav-link navbar-nav__link text-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Home</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="/home-v1">Home V1</Link></li>
              <li><Link className="dropdown-item" to="/home-v2">Home V2</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link text-dark" to="/services-v1"><span>Services</span></Link> {/* Change to Link */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link navbar-nav__link dropdown-toggle text-dark" href="#" id="portfolioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Portfolio</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
              <li><Link className="dropdown-item" to="/portfolio-v1">Portfolio V1</Link></li>
              <li><Link className="dropdown-item" to="/portfolio-v2">Portfolio V2</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link navbar-nav__link dropdown-toggle text-dark" role='button' id='blogDropdown' data-bs-toggle='dropdown' aria-expanded='false'><span>Blog</span></a> 
            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
              <li><Link className="dropdown-item" to="/blog-v1">Blog V1</Link></li>
              <li><Link className="dropdown-item" to="/blog-v2">Blog V2</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link text-dark" to="/contact-v1"><span>Contact</span></Link> {/* Change to Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link text-dark" to="/about-v1"><span>About</span></Link> {/* Change to Link */}
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
