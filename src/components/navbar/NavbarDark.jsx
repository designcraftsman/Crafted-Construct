import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import logoData from '../../data/logo.json'; // Import logo data

// Import logo dynamically
const importLogo = async (logoPath) => {
  const module = await import(`../../assets/${logoPath}`);
  return module.default;
};

// Logo Component
const Logo = ({ logo }) => (
  <Link className="navbar-brand order-1" to="/"> {/* Link to home page */}
    <div className="d-flex align-items-center text-dark fw-bolder fs-6">
      <img src={logo} alt="CraftedConstruct Logo" className="logo" /> {/* Improved alt text */}
    </div>
  </Link>
);

// ToggleButton Component
const ToggleButton = () => (
  <button className="navbar-toggler custom-toggle border-0" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
    <CgMenuLeftAlt className="text-dark fs-1" /> {/* Hamburger icon for toggling navbar */}
  </button>
);

// NavLink Component
const NavLink = ({ to, children }) => (
  <li className="nav-item"> {/* Navigation item */}
    <Link className="nav-link navbar-nav__link text-dark" to={to}> {/* Link to specified route */}
      <span>{children}</span> {/* Display link text */}
    </Link>
  </li>
);

// Dropdown Component
const Dropdown = ({ title, items }) => (
  <li className="nav-item dropdown"> {/* Dropdown item */}
    <Link className="nav-link navbar-nav__link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span>{title} <IoIosArrowDown className="ms-1" /></span> {/* Dropdown title with arrow */}
    </Link>
    <ul className="dropdown-menu"> {/* Dropdown menu */}
      {items.map((item, index) => (
        <li key={index}>
          <Link className="dropdown-item text-center" to={item.to}> {/* Link to dropdown item */}
            <span>{item.label}</span> {/* Display dropdown item label */}
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
    const searchQuery = event.target.elements.search.value.trim(); // Get search query
    if (searchQuery) {
      navigate(`/blog-v1/ /${encodeURIComponent(searchQuery)}`); // Navigate to search results
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="d-flex align-items-center order-2"> {/* Search form */}
      <div className="search-box-dark">
        <button type="submit" className="btn-search-dark"> {/* Search button */}
          <CiSearch className="search-icon text-dark fs-2" /> {/* Search icon */}
        </button>
        <input
          type="text"
          name="search"
          className="input-search-dark"
          placeholder="Type to Search..." // Placeholder text
          aria-label="Search" // Added aria-label for accessibility
        />
      </div>
    </form>
  );
};

const NavigationBar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar-light');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarClass(scrollPosition > 50 ? 'navbar-light' : 'navbar-light'); // Change navbar class based on scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadLogo = async () => {
      const logoPath = await importLogo(logoData.logoDark);
      setLogo(logoPath); // Set the loaded logo to state
    };

    loadLogo();
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-white px-3 m-0 p-0 fixed-top ${navbarClass}`}> {/* Navbar with dynamic class */}
      <Logo logo={logo} />
      <ToggleButton />
      <div className="collapse navbar-collapse pullUp order-lg-2 w-100 m-0 order-3 border-lg-none rounded p-2" id="basic-navbar-nav">
        <ul className="navbar-nav m-0 mx-auto border-lg-0 border-md border-sm"> {/* Navigation links */}
          <Dropdown title="Home" items={[{ to: "/home-v1", label: "Home 1" }, { to: "/home-v2", label: "Home 2" }]} />
          <Dropdown title="Services" items={[{ to: "/services-v1", label: "Services 1" }, { to: "/services-v2", label: "Services 2" }]} />
          <Dropdown title="Portfolio" items={[{ to: "/portfolio-v1", label: "Portfolio 1" }, { to: "/portfolio-v2", label: "Portfolio 2" }]} />
          <Dropdown title="Blog" items={[{ to: "/blog-v1", label: "Blog 1" }, { to: "/blog-v2", label: "Blog 2" }]} />
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </div>
      <SearchBox />
    </nav>
  );
};

export default NavigationBar;
