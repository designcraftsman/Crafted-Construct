import React from 'react';
import HeroSection from '../../components/hero/HeroSection2'; // Import HeroSection component
import ServicesSection from '../../components/services/ServicesSection2'; // Import ServicesSection component
import PortfolioSection2 from '../../components/portfolio/PortfolioSection2'; // Import PortfolioSection2 component
import AboutSection2 from '../../components/about/AboutSection2'; // Import AboutSection2 component
import TestimonialsSection2 from '../../components/testimonials/TestimonialsSection2'; // Import TestimonialsSection2 component
import BlogSection from '../../components/blog/BlogSection2'; // Import BlogSection component
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Crafted Construct</title> {/* Set the page title */}
        <meta name="description" content="Discover Crafted Construct, your premier destination for innovative architecture and interior design solutions. We blend creativity with functionality to create spaces that inspire and transform." /> {/* Set the meta description */}
        <meta name="keywords" content="architecture, interior design, innovative design, Crafted Construct, sustainable architecture, creative spaces, residential design, commercial design" />{/* Set the meta keywords */}
      </Helmet>
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