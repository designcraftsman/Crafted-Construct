import React, { useState, useEffect } from 'react';
import aboutHeaderData from '../../data/about/aboutHeader.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const AboutHeader = () => {
    const { title, companyName, description, imagePath } = aboutHeaderData;
    const [headerImage, setHeaderImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const loadedImage = await importImage(imagePath);
            setHeaderImage(loadedImage);
        };

        loadImage();
    }, [imagePath]);

    return (
        <div className='container-fluid m-0 p-0'>
          <div className='row m-0  mb-5'>
            <div className='col-lg-6 col-12 bg-secondary text-white '>
                <div className='mt-5 p-5'>
                  <h1 className='fs-2 fw-normal mb-3 fade-1'>{title}</h1> 
                  <h2 className='display-1 fw-bolder fade-2'>{companyName.first}</h2>
                  <h2 className='display-1 text-primary fw-bolder mb-5 fade-3'>{companyName.second}</h2>
                  <p className='fw-light fs-1 fade-4'>
                    {description}
                  </p>
                </div>
            </div>
            <div className='col-lg-6 col-12 m-0 p-0'>
              {headerImage && (
                <img src={headerImage} className='object-fit-cover w-100 vh-100 background-image' alt='about1' />
              )}
            </div>
          </div>
        </div>
    );
};

export default AboutHeader;
