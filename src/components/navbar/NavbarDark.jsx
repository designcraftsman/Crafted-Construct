import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import logoData from '../../data/logo.json'; // Import logo data

// Import logo dynamically
const importLogo = async (logoPath) => {
  const module = await import(`../../assets/${logoPath}`);
  return module.default;
};

// Logo Component
const Logo = ({ logo }) => (
  <Link className="navbar-brand order-1" to="/">
    <div className="d-flex align-items-center text-dark fw-bolder fs-6">
      <img src={logo} alt="CraftedConstruct" className="logo" />
    </div>
  </Link>
);

// ToggleButton Component
const ToggleButton = () => (
  <button className="navbar-toggler custom-toggle border-0" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
    <CgMenuLeftAlt className="text-dark fs-1" />
  </button>
);

// NavLink Component
const NavLink = ({ to, children }) => (
  <li className="nav-item">
    <Link className="nav-link navbar-nav__link text-dark" to={to}>
      <span>{children}</span>
    </Link>
  </li>
);

// Dropdown Component
const Dropdown = ({ title, items }) => (
  <li className="nav-item dropdown">
    <Link className="nav-link navbar-nav__link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span>{title} <IoIosArrowDown className="ms-1" /></span>
    </Link>
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index}>
          <Link className="dropdown-item text-center" to={item.to}>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

// SearchBox Component
const SearchBox = () => (
  <div className="d-flex align-items-center order-2">
    <div className="search-box-dark">
      <button className="btn-search-dark">
        <CiSearch className="search-icon text-dark fs-2" />
      </button>
      <input type="text" className="input-search-dark" placeholder="Type to Search..." />
    </div>
  </div>
);

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarClass(scrollPosition > 50 ? 'navbar-light' : 'navbar-light');
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
      <Logo logo={logo} />
      <ToggleButton />
      <div className="collapse navbar-collapse pullUp order-lg-2 w-100 m-0 order-3 border-lg-none rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto border-lg-0 border-md border-sm">
          <Dropdown title="Home" items={[{ to: "/home-v1", label: "Home V1" }, { to: "/home-v2", label: "Home V2" }]} />
          <Dropdown title="Services" items={[{ to: "/services-v1", label: "Services V1" }, { to: "/services-v2", label: "Services V2" }]} />
          <Dropdown title="Portfolio" items={[{ to: "/portfolio-v1", label: "Portfolio V1" }, { to: "/portfolio-v2", label: "Portfolio V2" }]} />
          <Dropdown title="Blog" items={[{ to: "/blog-v1", label: "Blog V1" }, { to: "/blog-v2", label: "Blog V2" }]} />
          <NavLink to="/contact-v1">Contact</NavLink>
          <NavLink to="/about-v1">About</NavLink>
        </ul>
      </div>
      <SearchBox />
    </nav>
  );
};

export default NavigationBar;
