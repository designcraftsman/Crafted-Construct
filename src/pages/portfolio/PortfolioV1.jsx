import React from 'react';
import PortfolioList from '../../components/portfolio/PortfolioGrid';
 

function App() {
  return (
    <div className="App">
      <div className='latest-projects p-5 my-5'>
        {/* Pass a prop to control the visibility of the Show More button */}
        <PortfolioList showMoreButton={true} />
      </div>
    </div>
  );
}

export default App;
