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
                        <h2 className='display-6 mb-4'>{serviceInfo.subtitle}</h2>
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
                        <h3 className='h4 mb-3'>Service Overview</h3>
                        <p className='mb-4'>{serviceInfo.shortDescription}</p>
                        <h3 className='h4 mb-3'>Why Choose Us for {serviceInfo.title}</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'>✓ Expert team with years of experience</li>
                            <li className='mb-2'>✓ Customized solutions to meet your specific needs</li>
                            <li className='mb-2'>✓ Commitment to quality and customer satisfaction</li>
                            <li className='mb-2'>✓ Use of latest technologies and best practices</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ContactSection />
        </React.Fragment>
    );
};

export default ServiceDetails;
