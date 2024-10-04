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
            <div className="container-fluid services-header p-0 m-0 position-relative">
                <img src={header} className="services-header__image" alt="Services Header" />
                <h1 className="text-white fw-bold display-3 services-header__text">Our Services</h1>
            </div>
            <section className="services-section p-3 my-5">
                <div className="projcard-container">
                    <div className="projcard projcard-blue">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src={service1} alt="Cupping Therapy" />
                            <div className="projcard-textbox">
                                <div className="projcard-title">Construction</div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">
                                A light metal structure is one designed to be both strong and lightweight, often using metals like aluminum or titanium. Aluminum, for instance, is commonly used in aerospace and automotive industries due to its excellent strength-to-weight ratio. Titanium is another example, known for its high strength and low density, making it ideal for high-performance applications. These materials enable the construction of durable and efficient structures.
                                </div>
                                <div >
                                    <button className='btn btn-primary btn-lg'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-red">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1080" alt="Energy Healing" />
                            <div className="projcard-textbox">
                                <div className="projcard-title">Energy Healing Sessions</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more fulfilling life."</div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Our energy healing sessions focus on balancing the body's energy centers to promote physical, emotional, and spiritual well-being. Through gentle touch and energy manipulation, our practitioners help restore harmony and vitality to your energy system, leaving you feeling refreshed and renewed.</div>
                                <div className="projcard-tagbox">
                                    <button><a href="#">Contact</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-green">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=1039" alt="Guided Meditation" />
                            <div className="projcard-textbox">
                                <div className="projcard-title">Guided Meditation</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more fulfilling life."</div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Join us for guided meditation sessions that offer a peaceful retreat from the stresses of daily life. Our experienced meditation guides will lead you through calming visualizations and breathing exercises to promote relaxation, clarity, and inner peace.</div>
                                <div className="projcard-tagbox">
                                    <button><a href="#">Contact</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projcard projcard-customcolor" style={{ "--projcard-color": "#F5AF41" }}>
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="https://picsum.photos/800/600?image=943" alt="Stress Relief Workshops" />
                            <div className="projcard-textbox">
                                <div className="projcard-title">Stress Relief Workshops</div>
                                <div className="projcard-subtitle">"Unlocking the power of the mind for a brighter, more fulfilling life."</div>
                                <div className="projcard-bar"></div>
                                <div className="projcard-description">Our stress relief workshops provide practical tools and techniques for managing stress and enhancing resilience. From mindfulness practices to holistic healing modalities, our workshops empower you to take control of your well-being and find balance in your life.</div>
                                <div className="projcard-tagbox">
                                    <button><a href="#">Contact</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default ServicesSection;
