import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import Footer from '../../components/footer/FooterV1';  
import about1 from '../../assets/images/V1/about/1.jpg';
import about2 from '../../assets/images/V1/about/2.jpg';
import about3 from '../../assets/images/V1/about/3.jpg';
import about4 from '../../assets/images/V1/about/4.jpg';
import about5 from '../../assets/images/V1/about/5.jpg';
import AboutSection from '../../components/home/homeV1/AboutSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
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
        <div className='container-fluid m-0 p-0'>
          <div className='row m-0 '>
          <div className='col-lg-6 bg-secondary text-white d-flex align-items-center justify-content-center'>
                
                    <p className='fw-normal fs-1 p-5'>
                        Ac feugiat sed lectus vest ibu lum mattis ull amcorper veli ti sed. Sol licitud in tempor id eu nisl nunc mi ipsum fau cibus vita niu mae.
                    </p>
                
            </div>
            <div className='col-lg-6  m-0 p-0 h-100'>
              <div className='row m-0 p-0 '>
                <div className='col-6 m-0 p-0'>
                  <img src={about2} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
                <div className='col-6 m-0 p-0'>
                  <img src={about3} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
              </div>
              <div className='row m-0 p-0'>
                <div className='col-6 m-0 p-0'>
                  <img src={about4} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
                <div className='col-6 m-0 p-0'>
                  <img src={about5} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
