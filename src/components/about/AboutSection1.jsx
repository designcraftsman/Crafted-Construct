import React, { useEffect } from "react";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import service3 from '../../assets/images/V1/services/4.jpg';
import service1 from '../../assets/images/V1/services/1.jpg';

const WhyChooseUs = () => {
  useEffect(() => {
    // Counter function with requestAnimationFrame
    function counter(id, start, end, duration) {
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
          counter("count1", 0, 15, 3000); // Projects
          counter("count2", 0, 200, 3000); // Team Members
          counter("count3", 0, 15, 3000); // Agencies
          counter("count4", 0, 40, 3000); // Years of Experience
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
  }, []); // Empty dependency array to run once on component mount

  return (
    <React.Fragment>
    <div className="container text-start p-4 py-5 my-5 why-choose-us m-auto">
      <h2 className="display-4 fw-semibold mb-5 reveal">Why Choose Us?</h2>
      <h3 className=" display-6 text-muted col-lg-7 col-12 mb-5 reveal">
        At CraftedConstruct, we merge expertise with artistry to create exceptional spaces.
      </h3>

      <div className="row  d-flex justify-content-between align-items-center py-5">
        <div className="col-lg-2 col-md-5 col-12 text-lg-start text-center my-5 reveal">
          <span className="display-5 text-primary fw-lighter align-items-center">
            <MdOutlineHomeWork />
            <span id="count1" className="mx-3">0</span>+
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Projects</h2>
        </div>
        <div className="col-lg-2 col-md-5 col-12 text-lg-start text-center my-5 reveal">
          <span className="display-5 text-primary fw-lighter align-items-center">
            <RiTeamFill />
            <span id="count2" className="mx-3">0</span>
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Team Members</h2>
        </div>
        <div className="col-lg-2 col-md-5 col-12 text-lg-start text-center my-5 reveal">
          <span className="display-5 text-primary fw-lighter align-items-center">
            <FaBuilding />
            <span id="count3" className="mx-3">0</span>+
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Agencies</h2>
        </div>
        <div className="col-lg-2 col-md-5 col-12 text-lg-start text-center my-5 reveal">
          <span className="display-5  text-primary fw-lighter align-items-center">
            <FaBusinessTime />
            <span id="count4" className="mx-3">0</span>
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Years of Experience</h2>
        </div>
      </div>
    
    
     <div className='row my-5 gap-3 py-5'>
         <div className="col-lg-6 col-md-6 col-12 about-section  m-auto reveal">
            <div className="row">
              <img src={service3} className='img-fluid col-6 ' alt="" />
              <img src={service1} className="img-fluid col-6" alt="" />
            </div>
         </div>
         <div className='col-lg-5 col-md-5 col-12 m-auto reveal'>
             <h2 className='fs-1 fw-semibold  text-dark'>
             Expert Construction Solutions Tailored to Your Needs             
             </h2>
             <p className='fs-6 fw-light'>
             At CraftConstruct, we take pride in delivering high-quality construction services, from concept to completion. Whether you're planning residential, commercial, or industrial projects, our experienced team is committed to providing customized solutions that meet your goals and exceed expectations. With a focus on precision, safety, and sustainability, we ensure every project is built to last. Trust us to bring your vision to life with expertise, dedication, and attention to detail.
             </p>
             <button className="btn  btn-dark  hover-filled-slide-down slide-up border-radius-0">
              <span>Check Our Work</span>
            </button>
         
     </div>
     </div>
 </div>
 </React.Fragment>
  );
};

export default WhyChooseUs;
