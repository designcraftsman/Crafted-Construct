import React from 'react';
import HeroSection from '../../components/hero/HeroSection2';
import ServicesSection from '../../components/services/ServicesSection2';
import PortfolioSection2 from '../../components/portfolio/PortfolioSection2';
import AboutSection2 from '../../components/about/AboutSection2';
import TestimonialsSection2 from '../../components/testimonials/TestimonialsSection2';
import BlogSection from '../../components/blog/BlogSection2';

function App() {

  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection2 />
      <AboutSection2 />
      <TestimonialsSection2 />
      <BlogSection />
    </div>
  );
}

export default App;
