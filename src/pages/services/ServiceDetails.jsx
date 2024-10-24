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
            const service = servicesData.servicesCarousel.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);
            if (service) {
                const image = await importImage(service.image);
                setServiceInfo({
                    ...service,
                    image: image
                });
            }
        };
        loadServiceInfo();
    }, [serviceId]);

    if (!serviceInfo) return null;

    return (
        <React.Fragment>
            <Header headerImage={serviceInfo.image} headerTitle={serviceInfo.title} />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='display-6 mb-4'>Nothing requires the architect's care more than the due proportions of buildings.</h2>
                        <p className='mb-5'>{serviceInfo.description}</p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-12'>
                        <img src={serviceInfo.image} alt={serviceInfo.title} className='mb-3 single-service-image' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mb-5'>{serviceInfo.description}</p>
                    </div>
                </div>
            </div>
            <ContactSection />
        </React.Fragment>
    );
};

export default ServiceDetails;
