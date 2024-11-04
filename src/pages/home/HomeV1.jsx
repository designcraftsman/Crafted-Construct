import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/hero/HeroSection1'; // Import HeroSection component
import AboutSection from '../../components/about/AboutSection1'; // Import AboutSection component
import ServicesSection from '../../components/services/ServicesSection1'; // Import ServicesSection component
import PortfolioGrid from '../../components/portfolio/PortfolioGrid'; // Import PortfolioGrid component
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1'; // Import TestimonialsSection component
import BlogSection from '../../components/blog/BlogSection1'; // Import BlogSection component

function App() {
  return (
    <div className="App">
      <HeroSection /> {/* Render the hero section */}
      <AboutSection /> {/* Render the about section */}
      <ServicesSection /> {/* Render the services section */}
      <section className="latest-projects p-lg-5 p-2">
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2 className="fw-bolder fs-1 my-5">Our Latest Projects</h2> {/* Section title */}
          <Link to="/portfolio-v1" className="btn btn-dark hover-filled-slide-down d-lg-block d-none">
            <span>View All Projects</span> {/* Button to view all projects */}
          </Link>
        </div>
        
        <PortfolioGrid /> {/* Render the portfolio grid */}
        <button className="btn btn-dark hover-filled-slide-down d-lg-none d-block w-100 my-5">
          <span>View All Projects</span> {/* Button for mobile to view all projects */}
        </button>
      </section>
      <TestimonialsSection /> {/* Render the testimonials section */}
      <BlogSection /> {/* Render the blog section */}
    </div>
  );
}

export default App;