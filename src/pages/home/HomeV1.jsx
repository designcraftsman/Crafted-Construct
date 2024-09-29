import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import HeroSection from '../../components/home/homeV1/HeroSection';
import AboutSection from '../../components/home/homeV1/AboutSection';
import ServicesSection from '../../components/home/homeV1/ServicesSection';
import PortfolioList from '../../components/home/homeV1/PortfolioSection';
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
      <section className="latest-projects p-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bolder fs-1 my-5">Our Latest Projects</h2>
          <a href="#all-projects" className="btn btn-primary rounded-0 fw-bold fs-5">View All Projects</a>
        </div>
        </div>
        <PortfolioList />
      </section>
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
