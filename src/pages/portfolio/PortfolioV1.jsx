import React from 'react';
import PortfolioList from '../../components/portfolio/PortfolioGrid'; // Import PortfolioList component
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Portfolio - Crafted Construct</title> {/* Set the page title */}
        <meta name="description" content="Browse through our portfolio at Crafted Construct and discover a collection of exceptional architecture and interior design projects that showcase our creativity and experti" /> {/* Set the meta description */}
        <meta name="keywords" content="portfolio, architecture projects, interior design portfolio, Crafted Construct, design showcase, creative projects, residential and commercial design" />{/* Set the meta keywords */}
      </Helmet>
      <div className='latest-projects p-5 my-5'>
        {/* Pass a prop to control the visibility of the Show More button */}
        <PortfolioList showMoreButton={true} /> {/* Render the portfolio list with Show More button */}
      </div>
    </div>
  );
}

export default App;