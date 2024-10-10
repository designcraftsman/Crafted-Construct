import React from 'react';
import about1 from '../../assets/images/V1/about/1.jpg';
import TeamSection from '../../components/about/TeamSection';
import ServicesAbout from '../../components/services/ServicesAbout';
import AboutSection from '../../components/about/AboutSection1';
import BlogSection from '../../components/blog/BlogSection1';
import TestimonialsSection from '../../components/testimonials/TestimonialsSection1';

function App() {
  return (
    <div className="App">
        <div className='container-fluid m-0 p-0'>
          <div className='row m-0  mb-5'>
            <div className='col-lg-6 col-12 bg-secondary text-white '>
                <div className='mt-5 p-5'>
                  <h1 className='fs-2 fw-normal mb-3 fade-1'>About </h1> 
                  <h2 className='display-1 fw-bolder fade-2'>Crafted</h2>
                  <h2 className='display-1 text-primary fw-bolder mb-5 fade-3'>Construct</h2>
                  <p className='fw-light fs-1 fade-4'>
                  We reach beyond established trends and apply new creative solutions. Right place for achieving top results.
                  </p>
                </div>
            </div>
            <div className='col-lg-6 col-12 m-0 p-0'>
              <img src={about1} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
            </div>
          </div>
        </div>
        <AboutSection className='my-5' />
        <TeamSection/>
        <ServicesAbout />
        <TestimonialsSection />
        <BlogSection />
    </div>
  );
}

export default App;
