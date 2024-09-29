import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarDark';
import PortfolioList from '../../components/home/homeV1/PortfolioSection';
import Footer from '../../components/footer/FooterV1';  

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='latest-projects p-5 my-5'>
      <PortfolioList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
