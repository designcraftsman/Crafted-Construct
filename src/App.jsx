import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Import your components
import HomeV1 from './pages/home/HomeV1';
import PortfolioV1 from './pages/portfolio/PortfolioV1';
import ServicesV1 from './pages/services/ServicesV1';
import ProjectV1 from './pages/project/ProjectV1';
import BlogV1 from './pages/blog/BlogV1';
import PostV1 from './pages/post/PostV1';
import AboutV1 from './pages/about/AboutV1';
import ContactV1 from './pages/contact/ContactV1';
import TermsConditions from './pages/Terms-Conditions';
import PrivacyPolicy from './pages/Privacy-Policy';
import FAQs from './pages/FAQs';
import NavbarLight from './components/navbar/navbar1/NavbarLight';
import NavbarDark from './components/navbar/navbar1/NavbarDark';
import Footer from './components/footer/Footer1';
import LoadingScreen from './components/Loading-screen';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  

  window.addEventListener('scroll', reveal);
  function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i=0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }else{
          reveals[i].classList.remove('active');
        }
      }
  }
  // Show loading screen on location change
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after the simulated loading duration
    }, 2000); // Simulate loading duration

    return () => clearTimeout(timer);
  }, [location]);

  // Conditionally render NavbarDark for specific paths
  const renderNavbar = () => {
    if (location.pathname === '/portfolio-v1' || location.pathname === '/project-v1' || location.pathname === '/post-v1' || location.pathname === '/blog-v1' || location.pathname === '/terms-conditions' || location.pathname === '/privacy-policy' || location.pathname === '/faqs') {
      return <NavbarDark />;
    } else {
      return <NavbarLight />;
    }
  };

  return (
    <div className={`App ${loading ? 'loading' : 'loaded'}`}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {renderNavbar()}
          <Routes>
            <Route path=" " element={<HomeV1 />} />
            <Route path="/" element={<HomeV1 />} />
            <Route path="/home-v1" element={<HomeV1 />} />
            <Route path="/portfolio-v1" element={<PortfolioV1 />} />
            <Route path="/services-v1" element={<ServicesV1 />} />
            <Route path="/project-v1" element={<ProjectV1 />} />
            <Route path="/blog-v1" element={<BlogV1 />} />
            <Route path="/post-v1" element={<PostV1 />} />
            <Route path="/about-v1" element={<AboutV1 />} />
            <Route path="/contact-v1" element={<ContactV1 />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default function RouterApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
