import React from 'react';
import portfolio1 from '../../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../../assets/images/V1/home/portfolioSection/4.jpg';

const PortfolioSection = () => {
  return (
    <section className="latest-projects p-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bolder fs-1 my-5">Our Latest Projects</h2>
          <a href="#all-projects" className="btn btn-primary rounded-0 fw-bold fs-5">View All Projects</a>
        </div>
        <div className="grid-layout">
          <div className="grid-item-1">
            <img src={portfolio1} alt="Project 1" className="img-fluid project-image" />
          </div>
          <div className="grid-item-2">
            <img src={portfolio2} alt="Project 2" className="img-fluid project-image" />
          </div>
          <div className="grid-item-3">
            <img src={portfolio3} alt="Project 3" className="img-fluid project-image" />
          </div>
          <div className="grid-item-4">
            <img src={portfolio4} alt="Project 4" className="img-fluid project-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
