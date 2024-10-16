import React from 'react';
import about2 from '../../assets/images/V1/about/2.jpg';
import about3 from '../../assets/images/V1/about/3.jpg';
import about4 from '../../assets/images/V1/about/4.jpg';
import about5 from '../../assets/images/V1/about/5.jpg';

const TeamSection = () =>{
    return (
        <div className='container-fluid m-0 p-0 reveal-section'>
          <div className='row m-0 '>
            <div className='col-lg-6 bg-secondary text-white d-flex align-items-center justify-content-center'>
              <div className='p-5 reveal-element reveal-1'>
                <h2 className='text-primary fw-bold display-6'>Meet Our Team</h2>
                <p className='fw-normal fs-1 '>
                  Ac feugiat sed lectus vest ibu lum mattis ull amcorper veli ti sed. Sol licitud in tempor id eu nisl nunc mi ipsum fau cibus vita niu mae.
                </p>
              </div>
            </div>
            <div className='col-lg-6  m-0 p-0 h-100'>
              <div className='row m-0 p-0 '>
                <div className='col-6 m-0 p-0 reveal-element reveal-2'>
                  <img src={about2} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
                <div className='col-6 m-0 p-0 reveal-element reveal-3'>
                  <img src={about3} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
              </div>
              <div className='row m-0 p-0'>
                <div className='col-6 m-0 p-0 reveal-element reveal-4'>
                  <img src={about4} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
                <div className='col-6 m-0 p-0 reveal-element reveal-5'>
                  <img src={about5} className='object-fit-cover w-100 h-100 background-image' alt='about1' />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default TeamSection;
