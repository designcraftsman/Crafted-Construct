import React from 'react';
import AboutHeader from '../../components/about/AboutHeader'; // Import AboutHeader component
import TeamSection from '../../components/about/TeamSection'; // Import TeamSection component
import ServicesAbout from '../../components/services/ServicesAbout1'; // Import ServicesAbout component
import AboutSection from '../../components/about/AboutSection1'; // Import AboutSection component
import BlogSection from '../../components/blog/BlogSection1'; // Import BlogSection component
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1'; // Import TestimonialsSection component
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>About Crafted Construct</title> {/* Set the page title */}
          <meta name="description" content="Learn about Crafted Construct, where passion for architecture and interior design meets innovative solutions. Our team is dedicated to creating unique spaces that reflect your style and vision.at inspire and transform." /> {/* Set the meta description */}
          <meta name="keywords" content="about Crafted Construct, architecture, interior design, design philosophy, innovative solutions, unique spaces, passionate design team" />{/* Set the meta keywords */}
        </Helmet>
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