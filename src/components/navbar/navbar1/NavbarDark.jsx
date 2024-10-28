import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import logoData from '../../../data/logo.json'; // Import logo data

// Import logo dynamically
const importLogo = async (logoPath) => {
  const module = await import(`../../../assets/${logoPath}`);
  return module.default;
};

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setNavbarClass(' navbar-light');
      } else {
        setNavbarClass('navbar-light');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadLogo = async () => {
      const logoPath = await importLogo(logoData.logoDark);
      setLogo(logoPath);
    };

    loadLogo();
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-white px-3 m-0 p-0 fixed-top ${navbarClass}`}>
      {/* Logo - Outside of Collapsing Nav */}
      <Link className="navbar-brand order-1" to="/">
        <div className="d-flex align-items-center text-dark fw-bolder fs-6">
          <img src={logo} alt="CraftedConstruct" className="logo" />
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
            <Link className="nav-link navbar-nav__link text-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Home <IoIosArrowDown className="ms-1"/></span>
            </Link>
            <ul className="dropdown-menu  navbar-dark__dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item text-center" to="/home-v1"><span>Home V1</span></Link></li>
              <li><Link className="dropdown-item text-center" to="/home-v2"><span>Home V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link navbar-nav__link text-dark dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Services <IoIosArrowDown className="ms-1"/></span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><Link className="dropdown-item text-center" to="/services-v1"><span>Services V1</span></Link></li>
              <li><Link className="dropdown-item text-center" to="/services-v2"><span>Services V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link navbar-nav__link dropdown-toggle text-dark" href="#" id="portfolioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span>Portfolio <IoIosArrowDown className="ms-1" /></span>   
            </Link>
            <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
              <li><Link className="dropdown-item text-center" to="/portfolio-v1"><span>Portfolio V1</span></Link></li>
              <li><Link className="dropdown-item text-center" to="/portfolio-v2"><span>Portfolio V2</span></Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link href="#" className="nav-link navbar-nav__link dropdown-toggle text-dark" role='button' id='blogDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
              <span>Blog <IoIosArrowDown className="ms-1" /></span>
            </Link> 
            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
              <li><Link className="dropdown-item text-center" to="/blog-v1"><span>Blog V1</span></Link></li>
              <li><Link className="dropdown-item text-center" to="/blog-v2"><span>Blog V2</span></Link></li>
              </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link text-dark" to="/contact-v1"><span>Contact</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link text-dark" to="/about-v1"><span>About</span></Link>
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
