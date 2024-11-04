import React from 'react';
import AboutHeader from '../../components/about/AboutHeader'; // Import AboutHeader component
import TeamSection from '../../components/about/TeamSection'; // Import TeamSection component
import ServicesAbout from '../../components/services/ServicesAbout1'; // Import ServicesAbout component
import AboutSection from '../../components/about/AboutSection1'; // Import AboutSection component
import BlogSection from '../../components/blog/BlogSection1'; // Import BlogSection component
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1'; // Import TestimonialsSection component

function App() {
  return (
    <div className="App">
        <AboutHeader /> {/* Render the header for the About page */}
        <AboutSection className='my-5' /> {/* Render the main About section */}
        <TeamSection/> {/* Render the team section */}
        <ServicesAbout /> {/* Render the services section */}
        <TestimonialsSection /> {/* Render the testimonials section */}
        <BlogSection /> {/* Render the blog section */}
    </div>
  );
}

export default App;