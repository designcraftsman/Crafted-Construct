import React from 'react';
import PortfolioList from '../../components/portfolio/PortfolioList';
 

function App() {
  return (
    <div className="App">
      <div className='container p-5 my-5'>
        {/* Pass a prop to control the visibility of the Show More button */}
        <PortfolioList showMoreButton={true} />
      </div>
    </div>
  );
}

export default App;
