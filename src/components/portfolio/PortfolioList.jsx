import React, { useState } from 'react';
import portfolio1 from '../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../assets/images/V1/home/portfolioSection/4.jpg';

const portfolioItems = [
  { img: portfolio1, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio2, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio2, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio1, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio2, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio2, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio3, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio1, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
  { img: portfolio4, title: 'Modern Residential Home', location: 'Lakeview Estates, California', scope: 'Multi-unit residential construction', description: 'CraftedConstruct developed a luxury apartment complex...' },
];

const PortfolioList = ({ showMoreButton }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  // Function to handle "Show More" button click
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <>
      <div className="d-flex flex-wrap ">
        {portfolioItems.slice(0, visibleItems).map((item, index) => (
          <a href="project-v1" key={index} className="col-lg-4 col-md-6 col-sm-12">
            <figure className="projects-grid__figure m-3">
              <img src={item.img} className="w-100  object-fit-cover projects-grid__figure__image" alt="image-grid" />
              <figcaption className='projects-grid__figure__caption'>
                <h1 className="display-6 text-center projects-grid__figure__caption__h1">{item.title}</h1>
                <p className="text-center projects-grid__figure__caption__p">5 July, 2021</p>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>

      {/* Conditionally render the Show More button if prop is true */}
      {showMoreButton && visibleItems < portfolioItems.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={showMoreItems}>
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioList;
