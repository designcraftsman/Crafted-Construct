import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

// Function to dynamically import images
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const PortfolioList = ({ showMoreButton }) => {
  const [visibleItems, setVisibleItems] = useState(8); // State to manage the number of visible items
  const sectionRef = useRef(null); // Reference to the section element
  const [portfolioItems, setPortfolioItems] = useState([]); // State to hold the portfolio items

  useEffect(() => {
    const loadPortfolioItems = async () => {
      const loadedItems = await Promise.all(
        projectsData.portfolioItems.map(async (item) => ({
          ...item,
          img: await importImage(item.image1) // Dynamically load the image for each item
        }))
      );
      setPortfolioItems(loadedItems); // Update the state with loaded items
    };
    loadPortfolioItems(); // Call the function to load portfolio items
  }, []);

  // Function to handle the "Show More" button click
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8); // Increase the number of visible items
  };

  // Function to determine the grid class based on the item index
  const getGridClass = (index) => {
    const classes = [
      'grid-item-1',
      'grid-item-2',
      'grid-item-3',
      'grid-item-4',
      'grid-item-5',
      'grid-item-6',
      'grid-item-7',
      'grid-item-8',
    ];
    return classes[index % 8]; // Cycle through classes for every 8 items
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Add active class when the element is in view
        }
      });
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef); // Observe the section element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Stop observing the section element
      }
    };
  }, []);

  return (
    <div className="portfolio-section reveal-section" ref={sectionRef}>
      <div className="grid-layout projects-grid">
        {portfolioItems.slice(0, visibleItems).map((item, index) => (
          <Link to={`/project/${item.id}`} key={index} className={`${getGridClass(index)} reveal-element reveal-${(index % 5) + 1}`}>
            <figure className="project-image projects-grid__figure">
              <img src={item.img} className="w-100 h-100 object-fit-cover projects-grid__figure__image" alt="image-grid" />
              <figcaption className='projects-grid__figure__caption'>
                <h1 className="display-6 text-center projects-grid__figure__caption__h1">{item.title}</h1>
                <p className="text-center projects-grid__figure__caption__p">{item.date}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>

      {/* Conditionally render the Show More button if prop is true */}
      {showMoreButton && visibleItems < portfolioItems.length && (
        <div className="text-center mt-4 reveal-element reveal-1">
          <button className="btn btn-dark hover-filled-slide-down slide-up" onClick={showMoreItems}>
            <span>Show More</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
