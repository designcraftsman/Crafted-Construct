import React from 'react';
import HeroSection from '../../components/hero/HeroSection2'; // Import HeroSection component
import ServicesSection from '../../components/services/ServicesSection2'; // Import ServicesSection component
import PortfolioSection2 from '../../components/portfolio/PortfolioSection2'; // Import PortfolioSection2 component
import AboutSection2 from '../../components/about/AboutSection2'; // Import AboutSection2 component
import TestimonialsSection2 from '../../components/testimonials/TestimonialsSection2'; // Import TestimonialsSection2 component
import BlogSection from '../../components/blog/BlogSection2'; // Import BlogSection component

function App() {
  return (
    <div className="App">
      <HeroSection /> {/* Render the hero section */}
      <ServicesSection /> {/* Render the services section */}
      <PortfolioSection2 /> {/* Render the portfolio section */}
      <AboutSection2 /> {/* Render the about section */}
      <TestimonialsSection2 /> {/* Render the testimonials section */}
      <BlogSection /> {/* Render the blog section */}
    </div>
  );
}

export default App;