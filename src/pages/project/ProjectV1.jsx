import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarDark';
import Footer from '../../components/footer/FooterV1';  
import image1 from '../../assets/images/V1/project/1.jpg';
import image2 from '../../assets/images/V1/project/2.jpg';
import image3 from '../../assets/images/V1/project/3.jpg';
import image4 from '../../assets/images/V1/project/4.jpg';

function App() {
  return (
    <div className="App">
      <NavigationBar />
            <div className='container my-5 py-5'> 
                <div className='row m-auto'>
                    <div className='col-7'>
                        <img src={image1}  className='img-fluid' alt="" />
                    </div>
                    <div className='col-5 bg-secondary rounded text-white p-4'>
                       <h1 className='fw-bold fs-1 mb-5'>
                       Modern Residential Home
                       </h1>
                       <h2 className='fs-4 text-decoration-underline fw-semibold'>
                        Location:
                       </h2>
                       <p className='fs-5 fw-light'>
                       Lakeview Estates, California
                       </p>
                       <h2 className='fs-4 text-decoration-underline fw-semibold'>
                       Project Scope:
                       </h2>
                       <p className='fs-5 fw-light'>
                       Multi-unit residential construction
                       </p>
                       <h2 className='fs-4 text-decoration-underline fw-semibold'>
                       Description
                       </h2>
                       <p className='fs-5 fw-light'>
                       CraftedConstruct developed a luxury apartment complex with 150 units, featuring resort-style amenities, including a pool, fitness center, and outdoor lounge areas. Each unit was designed with high-end materials, smart home integration, and energy-efficient appliances, catering to upscale clientele in the Miami area.
                       </p>
                    </div>
                    <div className='col-12 my-5'>
                        <img src={image2} className='img-fluid' alt="" />
                    </div>
                    <div className='col-6 my-5'>
                        <img src={image3} className='img-fluid' alt="" />
                    </div>
                    <div className='col-6 my-5'>
                        <img src={image4} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
      <Footer />
    </div>
  );
}

export default App;
