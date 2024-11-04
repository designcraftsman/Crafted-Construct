import React, { useState, useEffect } from 'react';
import data from '../../data/services/servicesAbout2.json';

const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const ServicesAbout2 = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            const img = await importImage(data.image);
            setImage(img);
        };
        loadImage();
    }, []);

    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-lg-5 col-md-5 col-12 m-auto'>
                    <h2 className='fs-2 fw-semibold text-primary'>
                        {data.title}
                    </h2>
                    <p className='fs-6 fw-lighter'>
                        {data.description}
                    </p>
                </div>
                <div className="col-lg-5 col-md-5 col-12 m-auto">
                    <img src={image} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServicesAbout2;