import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/header';
import ContactSection from '../../components/contact/ContactSection';
import servicesData from '../../data/services/services.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const ServiceDetails = () => {
    const [serviceInfo, setServiceInfo] = useState(null);
    const { serviceId } = useParams();

    useEffect(() => {
        const loadServiceInfo = async () => {
            const service = servicesData.services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);
            if (service) {
                const images = await Promise.all([
                    importImage(service.image1),
                    importImage(service.image2),
                    importImage(service.image3),
                    importImage(service.image4)
                ]);
                setServiceInfo({
                    ...service,
                    images: images
                });
            }
        };
        loadServiceInfo();
    }, [serviceId]);

    if (!serviceInfo) return null;

    return (
        <React.Fragment>
            <Header headerImage={serviceInfo.images[0]} headerTitle={serviceInfo.title} />
            <div className='container mt-5 px-lg-5 p-3'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='fs-1 fw-semibold mb-4'>{serviceInfo.subtitle}</h2>
                        <p className='mb-5 fs-6'>{serviceInfo.description}</p>
                    </div>
                </div>
                <div className='row mb-5 justify-content-between'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={serviceInfo.images[1]} alt={serviceInfo.title} className='mb-3 single-service-image' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 ' >
                        <img src={serviceInfo.images[2]} className='mb-3 single-service-image' alt="" />
                    </div>
                </div>
                        <h3 className='fs-1 fw-semibold mb-3'>Service Overview</h3>
                        <p className='mb-5'>{serviceInfo.shortDescription}</p>
                        <div className='row my-5'>
                            <div className='col-lg-7 col-md-7 col-12 my-auto'>
                                <h3 className='fs-1 fw-semibold mb-3'>Why Choose Us for {serviceInfo.title}</h3>
                                <ul className='list-unstyled'>
                                    <li className='mb-2'><span className='text-primary fw-bold fs-4'>✓</span> Expert team with years of experience</li>
                                    <li className='mb-2'><span className='text-primary fw-bold fs-4'>✓</span> Customized solutions to meet your specific needs</li>
                                    <li className='mb-2'><span className='text-primary fw-bold fs-4'>✓</span> Commitment to quality and customer satisfaction</li>
                                    <li className='mb-2'><span className='text-primary fw-bold fs-4'>✓</span> Use of latest technologies and best practices</li>
                                </ul>
                            </div>
                        <div className='col-lg-4 col-md-5 col-12 m-auto'>
                            <img src={serviceInfo.images[3]} alt="" className='single-service-image' />
                        </div>
                </div>
                
                
            </div>
            <ContactSection />
        </React.Fragment>
    );
};

export default ServiceDetails;
