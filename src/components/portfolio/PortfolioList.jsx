import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const PortfolioList = ({ showMoreButton }) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const loadPortfolioItems = async () => {
      const loadedItems = await Promise.all(
        projectsData.portfolioItems.map(async (item) => ({
          ...item,
          img: await importImage(item.image)
        }))
      );
      setPortfolioItems(loadedItems);
    };
    loadPortfolioItems();
  }, []);

  // Function to handle "Show More" button click
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <>
      <div className="d-flex flex-wrap ">
        {portfolioItems.slice(0, visibleItems).map((item, index) => (
          <Link to="/project-v1" key={index} className="col-lg-4 col-md-6 col-sm-12">
            <figure className="projects-grid__figure m-3">
              <img src={item.img} className="w-100 object-fit-cover projects-grid__figure__image" alt="image-grid" />
              <figcaption className='projects-grid__figure__caption'>
                <h1 className="display-6 text-center projects-grid__figure__caption__h1">{item.title}</h1>
                <p className="text-center projects-grid__figure__caption__p">5 July, 2021</p>
              </figcaption>
            </figure>
          </Link>
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
