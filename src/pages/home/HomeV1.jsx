import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import HeroSection from '../../components/home/homeV1/HeroSection';
import AboutSection from '../../components/home/homeV1/AboutSection';
import ServicesSection from '../../components/home/homeV1/ServicesSection';
import PortfolioSection from '../../components/home/homeV1/PortfolioSection';
import TestimonialsSection from '../../components/home/homeV1/TestimonialsSection';
import BlogSection from '../../components/home/homeV1/BlogSection';
import Footer from '../../components/footer/FooterV1';  

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
