import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/hero/HeroSection1';
import AboutSection from '../../components/about/AboutSection1';
import ServicesSection from '../../components/services/ServicesSection1';
import PortfolioGrid from '../../components/portfolio/PortfolioGrid';
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1';
import BlogSection from '../../components/blog/BlogSection2';

function App() {

  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <section className="latest-projects p-lg-5 p-2 " >
   
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2 className="fw-bolder fs-1 my-5">Our Latest Projects</h2>
          <Link to="/portfolio-v1" className="btn btn-dark  hover-filled-slide-down d-lg-block d-none  ">
            <span>View All Projects</span>
          </Link>
        </div>
        
        <PortfolioGrid />
        <button  className="btn btn-dark  hover-filled-slide-down d-lg-none d-block w-100 my-5  ">
            <span>View All Projects</span>
            </button>
      </section>
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}

export default App;
