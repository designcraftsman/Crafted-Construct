import React, { useState, useRef, useEffect } from 'react';
import portfolio1 from '../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../assets/images/V1/home/portfolioSection/4.jpg';
import { Link } from 'react-router-dom';

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
  const sectionRef = useRef(null);

  // Function to handle "Show More" button click
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

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
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="portfolio-section reveal-section" ref={sectionRef}>
      <div className="grid-layout projects-grid">
        {portfolioItems.slice(0, visibleItems).map((item, index) => (
          <Link to="/project-v1" key={index} className={`${getGridClass(index)} reveal-element reveal-${(index % 5) + 1}`}>
            <figure className="project-image projects-grid__figure">
              <img src={item.img} className="w-100 h-100 object-fit-cover projects-grid__figure__image" alt="image-grid" />
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
        <div className="text-center mt-4 reveal-element reveal-1">
          <button className="btn btn-primary" onClick={showMoreItems}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
