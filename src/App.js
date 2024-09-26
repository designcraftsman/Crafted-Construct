import React from 'react';
import NavigationBar from './components/navbar/navbarV1/NavbarLight';
import HeroSection from './components/home/homeV1/HeroSection';
import AboutSection from './components/home/homeV1/AboutSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
