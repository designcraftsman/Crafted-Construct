import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import HomeV1 from './pages/home/HomeV1';
import PortfolioV1 from './pages/portfolio/PortfolioV1';
import ServicesV1 from './pages/services/ServicesV1';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<HomeV1 />} /> {/* Default to HomeV1 */}
          <Route path="/home-v1" element={<HomeV1 />} />
          <Route path="/portfolio-v1" element={<PortfolioV1 />} />
          <Route path="/services-v1" element={<ServicesV1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
