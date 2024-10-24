import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
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
      const loadedImages = await Promise.all(
        data.expertSection.images.map(imagePath => importImage(imagePath))
      );
      setExpertImages(loadedImages);
    };

    loadExpertImages();

    return () => {
      revealSections.forEach(section => revealObserver.unobserve(section));
    };
  }, [data.counters]);

  return (
    <React.Fragment>
      <div className="container text-start p-4 py-5 my-5 why-choose-us m-auto">
        <div className="reveal-section">
          <h2 className="display-4 fw-semibold mb-5 reveal-element reveal-1">{data.title}</h2>
          <h3 className="display-6 text-muted col-lg-7 col-12 mb-5 reveal-element reveal-2">
            {data.subtitle}
          </h3>
        </div>

        <div className="row d-flex justify-content-between align-items-center py-5 reveal-section">
          {data.counters.map((counter, index) => {
            const Icon = iconMap[counter.icon];
            return (
              <div key={index} className="col-lg-2 col-md-5 col-12 text-lg-start text-center my-5 reveal-element reveal-1">
                <span className="display-5 text-primary fw-lighter align-items-center">
                  <Icon />
                  <span id={`count${index + 1}`} className="mx-2">0</span>+
                </span>
                <hr />
                <h2 className="fs-5 fw-light">{counter.label}</h2>
              </div>
            );
          })}
        </div>
    
        <div className='row my-5 gap-3 py-5 reveal-section'>
          <div className="col-lg-6 col-md-6 col-12 about-section m-auto reveal-element reveal-1">
            <div className="row">
              {expertImages.map((image, index) => (
                <img key={index} src={image} className='img-fluid col-6' alt={`Expert section image ${index + 1}`} />
              ))}
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-12 m-auto reveal-element reveal-2'>
            <h2 className='fs-1 fw-semibold text-dark'>
              {data.expertSection.title}
            </h2>
            <p className='fs-6 fw-light'>
              {data.expertSection.description}
            </p>
            <Link to={data.expertSection.buttonLink} className="btn btn-dark hover-filled-slide-down slide-up border-radius-0">
              <span>{data.expertSection.buttonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyChooseUs;
