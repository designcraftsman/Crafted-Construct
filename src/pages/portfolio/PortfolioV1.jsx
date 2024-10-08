import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarDark';
import PortfolioList from '../../components/home/homeV1/PortfolioSection';
import Footer from '../../components/footer/FooterV1';  

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
