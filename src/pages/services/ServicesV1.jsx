import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
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
            description: "Our expertise extends beyond residential projects. CraftedConstruct has a proven track record in commercial construction, helping businesses build office spaces, retail outlets, and more. We prioritize client collaboration to deliver spaces that are functional, aesthetically pleasing, and sustainable.",
            image: service1,
        },
        {
            title: "Renovation and Remodeling",
            description: "From small upgrades to full home renovations, we handle all aspects of remodeling projects. Our team transforms outdated spaces into modern, functional environments while staying on budget and on schedule.",
            image: service1,
        },
        {
            title: "Interior Design Consulting",
            description: "CraftedConstruct also offers interior design services to complement our construction projects. We work closely with clients to select finishes, fixtures, and furniture that align with their taste and lifestyle.",
            image: service1,
        },
    ];

    return (
        <React.Fragment>
            <NavigationBar />
            <div id="home-slider">
            <div className="page-wrap">
                <Swiper
                    direction="vertical"
                    loop={true}
                    grabCursor={true}
                    speed={1000}
                    pagination={{ clickable: true }}
                    parallax={true}
                    autoplay={{ delay: 5000 }}
                    modules={[Pagination, Parallax, Autoplay]}
                    className="swiper-container"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index} className='swiper-wrapper'>
                            <div className="swiper-slide swiper-slide-one vh-100">
    <div className="container-fluid h-100">
        <div className="row h-100">
            {/* Left column - Title */}
            <div className="col-6 d-flex justify-content-center align-items-center m-0 p-0 ">
                <img src={service1} className="w-100 h-100 object-fit-cover" alt="" />
                <div className="text-left  position-absolute">
                    <h1 className="display-1 text-white">Construction</h1>
                </div>
            </div>

            {/* Right column - Description */}
            <div className="col-6 d-flex justify-content-center align-items-center bg-secondary">
                <div className="text-right">
                    <p className="paragraph">
                        A light metal structure is one designed to be both strong and lightweight, often using metals like aluminum or titanium. Aluminum, for instance, is commonly used in aerospace and automotive industries due to its excellent strength-to-weight ratio. Titanium is another example, known for its high strength and low density, making it ideal for high-performance applications. These materials enable the construction of durable and efficient structures.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default ServicesSection;
