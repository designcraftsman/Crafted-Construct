import React from 'react';
import PortfolioList from '../../components/portfolio/PortfolioList'; // Import PortfolioList component

function App() {
  return (
    <div className="App">
      <div className='container p-5 my-5'>
        {/* Pass a prop to control the visibility of the Show More button */}
        <PortfolioList showMoreButton={true} /> {/* Render the portfolio list with Show More button */}
      </div>
    </div>
  );
}

export default App;