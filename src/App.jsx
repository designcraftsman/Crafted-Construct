import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import useLoading from './components/Use-loading'; // Import the custom loading hook
import LoadingScreen from './components/Loading-screen'; // Import the existing LoadingScreen component

// Import your components
import HomeV1 from './pages/home/HomeV1';
import HomeV2 from './pages/home/HomeV2';
import PortfolioV1 from './pages/portfolio/PortfolioV1';
import PortfolioV2 from './pages/portfolio/PortfolioV2';
import ServicesV1 from './pages/services/ServicesV1';
import ServicesV2 from './pages/services/ServicesV2';
import ServiceDetails from './pages/services/ServiceDetails';
import ProjectV1 from './pages/project/ProjectV1';
import BlogV1 from './pages/blog/BlogV1';
import BlogV2 from './pages/blog/BlogV2';
import PostV1 from './pages/post/PostV1';
import AboutV1 from './pages/about/AboutV1';
import ContactV1 from './pages/contact/ContactV1';
import TermsConditions from './pages/Terms-Conditions';
import PrivacyPolicy from './pages/Privacy-Policy';
import FAQs from './pages/FAQs';
import NavbarLight from './components/navbar/NavbarLight';
import NavbarDark from './components/navbar/NavbarDark';
import Footer from './components/footer/Footer1';
import RevealAnimation from './components/RevealAnimation';

function App() {
  const loading = useLoading(); // Use the custom loading hook
  const location = useLocation();  

  // Conditionally render NavbarDark for specific paths
  const renderNavbar = () => {
    const darkPaths = [
      '/home-v2',
      '/services-v2',
      '/portfolio-v1',
      '/portfolio-v2',
      '/project-v1',
      '/blog-v1',
      '/blog-v2',
      '/terms-conditions',
      '/privacy-policy',
      '/faqs'
    ];

    // Check if the current path matches any of the dark paths or the /post-v1/:postId pattern
    if (darkPaths.includes(location.pathname) || /^\/post-v1\/[^/]+$/.test(location.pathname) || /^\/project-v1\/[^/]+$/.test(location.pathname) || /^\/blog-v1\/[^/]*$/.test(location.pathname) || /^\/blog-v2\/[^/]*$/.test(location.pathname)) {
      return <NavbarDark />; // Render dark navbar for specific paths
    } else {
      return <NavbarLight />; // Render light navbar for other paths
    }
  };

  RevealAnimation(); // Call the reveal animation function

  return (
    <div className={`App ${loading ? 'loading' : 'loaded'}`}>
      {loading ? (
        <LoadingScreen /> // Show the loading screen when loading is true
      ) : (
        <>
          {renderNavbar()} {/* Render the appropriate navbar */}
          <Routes>
            {/* Define application routes */}
            <Route path="" element={<HomeV1 />} />
            <Route path="/" element={<HomeV1 />} />
            <Route path="/home-v1" element={<HomeV1 />} />
            <Route path="/home-v2" element={<HomeV2 />} />
            <Route path="/portfolio-v1" element={<PortfolioV1 />} />
            <Route path="/portfolio-v2" element={<PortfolioV2 />} />
            <Route path="/services-v1" element={<ServicesV1 />} />
            <Route path="/services-v2" element={<ServicesV2 />} />
            <Route path="/service-details/:serviceId" element={<ServiceDetails />} />
            <Route path="/project-v1/:projectId" element={<ProjectV1 />} />
            <Route path="/blog-v1/:query?" element={<BlogV1 />} />
            <Route path="/blog-v2/:query?" element={<BlogV2 />} />
            <Route path="/post-v1/:postId" element={<PostV1 />} />
            <Route path="/about-v1" element={<AboutV1 />} />
            <Route path="/contact-v1" element={<ContactV1 />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
          <Footer /> {/* Render the footer */}
        </>
      )}
    </div>
  );
}

export default function RouterApp() {
  return (
    <Router>
      <App /> {/* Wrap the App component with Router for routing functionality */}
    </Router>
  );
}