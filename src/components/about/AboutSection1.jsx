import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'; // Import React-Bootstrap components
import aboutData from '../../data/about/aboutSection1.json';

const iconMap = {
  MdOutlineHomeWork,
  RiTeamFill,
  FaBuilding,
  FaBusinessTime
};

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const WhyChooseUs = () => {
  const [data] = useState(aboutData);
  const [expertImages, setExpertImages] = useState([]);

  useEffect(() => {
    // Counter function with requestAnimationFrame
    function startCounter(id, start, end, duration) {
      let obj = document.getElementById(id);
      if (!obj) return;  // Check if the element exists
    
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    // Intersection Observer API to detect when the component is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the counters when the section is in view
          data.counters.forEach((counter, index) => {
            startCounter(`count${index + 1}`, 0, counter.count, 3000);
          });
          // Disconnect the observer once the animation starts
          observer.disconnect();
        }
      });
    });

    // Target the container with numbers to observe
    const target = document.querySelector(".why-choose-us");
    if (target) {
      observer.observe(target);
    }

    // Add reveal animation
    const revealSections = document.querySelectorAll('.reveal-section');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealSections.forEach(section => revealObserver.observe(section));

    // Load expert section images
    const loadExpertImages = async () => {
      // Load images dynamically based on the data
      const loadedImages = await Promise.all([
        importImage(data.expertSection.image1),
        importImage(data.expertSection.image2)
      ]);
      setExpertImages(loadedImages); // Set the loaded images to state
    };

    loadExpertImages();

    return () => {
      revealSections.forEach(section => revealObserver.unobserve(section));
    };
  }, [data.counters]);

  return (
    <Container className="text-start p-4 py-5 my-5 why-choose-us m-auto" role="region" aria-labelledby="why-choose-us">
      <Row className="reveal-section">
        <Col>
          <h2 id="why-choose-us" className="display-4 fw-semibold mb-5 reveal-element reveal-1">{data.title}</h2>
          <h3 className="display-6 text-muted col-lg-7 col-12 mb-5 reveal-element reveal-2">
            {data.subtitle}
          </h3>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between align-items-center py-5 reveal-section">
        {data.counters.map((counter, index) => {
          const Icon = iconMap[counter.icon];
          return (
            <Col key={index} lg={2} md={5} className="text-lg-start text-center my-5 reveal-element reveal-1">
              <span className="display-5 text-primary fw-lighter align-items-center">
                <Icon />
                <span id={`count${index + 1}`} className="mx-2">0</span>+
              </span>
              <hr />
              <h2 className="fs-5 fw-light">{counter.label}</h2>
            </Col>
          );
        })}
      </Row>
    
      <Row className='my-5 gap-3 py-5 reveal-section'>
        <Col lg={6} md={6} className="about-section m-auto reveal-element reveal-1">
          <Row className="gap-3">
            <Col className='col-lg-5 col-11 m-auto'>
              <img src={expertImages[0]} className=' about-section__image1' alt={`Expert section image 1`} />
            </Col>
            <Col className='col-lg-5 col-11 m-auto'>
              <img src={expertImages[1]} className='about-section__image2' alt={`Expert section image 2`} />
            </Col>
          </Row>
        </Col>
        <Col lg={5} md={5} className='col-11 m-auto reveal-element reveal-2'>
          <h2 className='fs-1 fw-semibold text-dark'>
            {data.expertSection.title}
          </h2>
          <p className='fs-6 fw-light'>
            {data.expertSection.description}
          </p>
          <Link to={data.expertSection.buttonLink} className="btn btn-dark hover-filled-slide-down slide-up border-radius-0">
            <span>{data.expertSection.buttonText}</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
