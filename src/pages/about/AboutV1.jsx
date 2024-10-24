import React from 'react';
import AboutHeader from '../../components/about/AboutHeader';
import TeamSection from '../../components/about/TeamSection';
import ServicesAbout from '../../components/services/ServicesAbout';
import AboutSection from '../../components/about/AboutSection1';
import BlogSection from '../../components/blog/BlogSection1';
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1';

function App() {
  return (
    <div className="App">
        <AboutHeader />
        <AboutSection className='my-5' />
        <TeamSection/>
        <ServicesAbout />
        <TestimonialsSection />
        <BlogSection />
    </div>
  );
}

export default App;
