import React, { useEffect } from "react";
import { FaBuilding, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";

const WhyChooseUs = () => {
  useEffect(() => {
    // Counter function with requestAnimationFrame
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id);
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
    <div className="container text-start px-5 py-5 my-5 why-choose-us">
      <h2 className="display-4 fw-semibold mb-5">Why Choose Us?</h2>
      <h3 className=" display-6 text-muted col-lg-7 col-12 mb-5">
        At CraftedConstruct, we merge expertise with artistry to create exceptional spaces.
      </h3>

      <div className="row p-3 d-flex justify-content-between align-items-center">
        <div className="col-lg-2 text-lg-start text-center my-5">
          <span className="display-5 text-primary fw-bold align-items-center">
            <MdOutlineHomeWork />
            <span id="count1">0</span>+
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Projects</h2>
        </div>
        <div className="col-lg-2 text-lg-start text-center my-5">
          <span className="display-5 text-primary fw-bold align-items-center">
            <RiTeamFill />
            <span id="count2">0</span>
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Team Members</h2>
        </div>
        <div className="col-lg-2 text-lg-start text-center my-5">
          <span className="display-5 text-primary fw-bold align-items-center">
            <FaBuilding />
            <span id="count3">0</span>+
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Agencies</h2>
        </div>
        <div className="col-lg-2 text-lg-start text-center my-5">
          <span className="display-5 text-primary fw-bold align-items-center">
            <FaBusinessTime />
            <span id="count4">0</span>
          </span>
          <hr />
          <h2 className="fs-5 fw-light">Years of Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
