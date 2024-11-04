import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default); // Dynamically import image
};

const PortfolioList = ({ showMoreButton }) => {
  const [visibleItems, setVisibleItems] = useState(8); // State for number of visible items
  const [portfolioItems, setPortfolioItems] = useState([]); // State for portfolio items

  useEffect(() => {
    const loadPortfolioItems = async () => {
      const loadedItems = await Promise.all(
        projectsData.portfolioItems.map(async (item) => ({
          ...item,
          img: await importImage(item.image1) // Load image dynamically
        }))
      );
      setPortfolioItems(loadedItems); // Set loaded items to state
    };
    loadPortfolioItems();
  }, []);

  // Function to handle "Show More" button click
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8); // Increase visible items
  };

  return (
    <>
      <div className="d-flex flex-wrap "> {/* Flex container for portfolio items */}
        {portfolioItems.slice(0, visibleItems).map((item, index) => (
          <Link to={`/project/${item.id}`} key={index} className="col-lg-4 col-md-6 col-sm-12"> {/* Link to project details */}
            <figure className="projects-grid__figure m-3"> {/* Figure for project */}
              <img src={item.img} className="w-100 object-fit-cover projects-grid__figure__image" alt={`Project: ${item.title}`} /> {/* Improved alt text */}
              <figcaption className='projects-grid__figure__caption'> {/* Caption for project */}
                <h1 className="display-6 text-center projects-grid__figure__caption__h1">{item.title}</h1> {/* Project title */}
                <p className="text-center projects-grid__figure__caption__p">5 July, 2021</p> {/* Project date */}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>

      {/* Conditionally render the Show More button if prop is true */}
      {showMoreButton && visibleItems < portfolioItems.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={showMoreItems}>
            Show More {/* Button to show more items */}
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioList;
