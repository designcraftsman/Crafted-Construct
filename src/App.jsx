import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomeV1 from './pages/home/HomeV1';
import PortfolioV1 from './pages/portfolio/PortfolioV1';
import ServicesV1 from './pages/services/ServicesV1';
import ProjectV1 from './pages/project/ProjectV1';
import BlogV1 from './pages/blog/BlogV1';
import PostV1 from './pages/post/PostV1';
import AboutV1 from './pages/about/AboutV1';
import ContactV1 from './pages/contact/ContactV1';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<HomeV1 />} /> {/* Default to HomeV1 */}
          <Route path="/home-v1" element={<HomeV1 />} />
          <Route path="/portfolio-v1" element={<PortfolioV1 />} />
          <Route path="/services-v1" element={<ServicesV1 />} />
          <Route path="/project-v1" element={<ProjectV1 />} />
          <Route path="/blog-v1" element={<BlogV1 />} />
          <Route path="/post-v1" element={<PostV1 />} />
          <Route path="/about-v1" element={<AboutV1 />} />
          <Route path="/contact-v1" element={<ContactV1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
