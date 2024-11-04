import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import logoData from '../../data/logo.json'; // Import logo data

// Import logo dynamically
const importLogo = async (logoPath) => {
  const module = await import(`../../assets/${logoPath}`);
  return module.default;
};

// Logo Component
const Logo = ({ logo }) => (
  <Link className="navbar-brand order-1" to="/">
    <div className="d-flex align-items-center text-white fw-bolder fs-6">
      <img src={logo} alt="CraftedConstruct Logo" className="logo" />
    </div>
  </Link>
);

// ToggleButton Component
const ToggleButton = () => (
  <button className="navbar-toggler custom-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
    <CgMenuLeftAlt className="text-white fs-1" />
  </button>
);

// Dropdown Component
const Dropdown = ({ title, items, activeDropdown, toggleDropdown, dropdownMenuClass }) => (
  <li className={`nav-item dropdown ${activeDropdown === title.toLowerCase() ? 'show' : ''}`}>
    <Link 
      to="#"
      className="nav-link navbar-nav__link dropdown-toggle" 
      role='button' 
      onClick={(e) => toggleDropdown(e, title.toLowerCase())}
    >
      <span>{title} <IoIosArrowDown className="ms-1"/></span>
    </Link>
    <ul className={`dropdown-menu ${dropdownMenuClass} ${activeDropdown === title.toLowerCase() ? 'show' : ''}`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link className="dropdown-item text-white text-center" to={item.link}>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

// SearchBox Component
const SearchBox = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value.trim();
    if (searchQuery) {
      navigate(`/blog-v1/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="d-flex align-items-center order-2">
      <div className="search-box">
        <button type="submit" className="btn-search">
          <CiSearch className="search-icon text-white fs-2" />
        </button>
        <input type="text" name="search" className="input-search" placeholder="Type to Search..." aria-label="Search" />
      </div>
    </form>
  );
};

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');
  const [dropdownMenuClass, setDropdownMenuClass] = useState('dropdown-menu');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [logo, setLogo] = useState('');

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

  useEffect(() => {
    const loadLogo = async () => {
      const logoPath = await importLogo(logoData.logoLight);
      setLogo(logoPath);
    };

    loadLogo();
  }, []);

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownItems = {
    home: [{ label: 'Home 1', link: '/home-v1' }, { label: 'Home 2', link: '/home-v2' }],
    services: [{ label: 'Services 1', link: '/services-v1' }, { label: 'Services 2', link: '/services-v2' }],
    portfolio: [{ label: 'Portfolio 1', link: '/portfolio-v1' }, { label: 'Portfolio 2', link: '/portfolio-v2' }],
    blog: [{ label: 'Blog 1', link: '/blog-v1' }, { label: 'Blog 2', link: '/blog-v2' }],
  };

  return (
    <nav className={`navbar navbar-expand-lg px-3 m-0 p-0 fixed-top ${navbarClass}`}>
      <Logo logo={logo} />
      <ToggleButton />
      <div className="collapse navbar-collapse pullUp order-lg-2 w-100 m-0 order-3 border-lg-none rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto">
          {Object.keys(dropdownItems).map((key) => (
            <Dropdown 
              key={key} 
              title={key.charAt(0).toUpperCase() + key.slice(1)} 
              items={dropdownItems[key]} 
              activeDropdown={activeDropdown} 
              toggleDropdown={toggleDropdown} 
              dropdownMenuClass={dropdownMenuClass}
            />
          ))}
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/contact"><span>Contact</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-nav__link" to="/about"><span>About</span></Link>
          </li>
        </ul>
      </div>
      <SearchBox />
    </nav>
  );
};

export default NavigationBar;
