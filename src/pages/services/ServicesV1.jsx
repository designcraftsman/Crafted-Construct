import React from 'react';
import service1 from '../../assets/images/V1/services/1.jpg';
import header from '../../assets/images/V1/services/header.jpg';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import Footer from '../../components/footer/FooterV1';  

const ServicesSection = () => {
    const services = [
      {
        title: "Custom Residential Construction",
        description: "At CraftedConstruct, we specialize in building custom homes tailored to each client's vision. Whether it's a modern minimalist design or a traditional family home, our team ensures that you stay front-of-mind. We take you from initial design to the final phase with precision and care.",
        image: service1,
      },
      {
        title: "Commercial Building Construction",
        description: "At CraftedConstruct, we specialize in building custom homes tailored to each client's vision. Whether it's a modern minimalist design or a traditional family home, our team ensures that you stay front-of-mind. We take you from initial design to the final phase with precision and care.",
        image: service1,
      },
      {
        title: "Custom Residential Construction",
        description: "At CraftedConstruct, we specialize in building custom homes tailored to each client's vision. Whether it's a modern minimalist design or a traditional family home, our team ensures that you stay front-of-mind. We take you from initial design to the final phase with precision and care.",
        image: service1,
      },
      {
        title: "Commercial Building Construction",
        description: "At CraftedConstruct, we specialize in building custom homes tailored to each client's vision. Whether it's a modern minimalist design or a traditional family home, our team ensures that you stay front-of-mind. We take you from initial design to the final phase with precision and care.",
        image: service1,
      },
    ];
  
    return (
    <React.Fragment>
      <NavigationBar />
        <div className='container-fluid services-header p-0 m-0 position-relative'>
            <img src={header} className=' services-header__image' alt="" />
            <h1 className='text-white fw-bold display-3 services-header__text'>Our Services</h1>
        </div>
      <section className="services-section p-3 my-5">
        <div className="services-list container">
          {services.map((service, index) => (
            <div className="service-item row my-5 py-5" key={index}>
              <div className={`col-md-6 service-item__image-container   m-auto ${index % 2 === 0 ? 'order-md-1 border ps-0 pb-3 pe-3 border-primary' : 'order-md-2 order-md-1 border ps-3 pb-3 pe-0 border-primary'}`}>
                <img src={service.image} alt={service.title} className=" service-image img-fluid" />
              </div>
              <div className={`col-md-5 m-auto ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                <div className="service-content">
                  <h3 className="service-title fw-bold">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      </React.Fragment>
    );
  };
  
  export default ServicesSection;
  
