import React from 'react';
import portfolio1 from '../../../assets/images/V1/home/portfolioSection/1.jpg';
import portfolio2 from '../../../assets/images/V1/home/portfolioSection/2.jpg';
import portfolio3 from '../../../assets/images/V1/home/portfolioSection/3.jpg';
import portfolio4 from '../../../assets/images/V1/home/portfolioSection/4.jpg';

const portfolioItems = [
  {
    img: portfolio1,
    title: 'Modern Residential Home',
    location: 'Lakeview Estates, California',
    scope: 'Multi-unit residential construction',
    description: 'CraftedConstruct developed a luxury apartment complex with 150 units, featuring resort-style amenities, including a pool, fitness center, and outdoor lounge areas. Each unit was designed with high-end materials, smart home integration, and energy-efficient appliances, catering to upscale clientele in the Miami area.',
  },
  {
    img: portfolio2,
    title: 'Modern Residential Home',
    location: 'Lakeview Estates, California',
    scope: 'Multi-unit residential construction',
    description: 'CraftedConstruct developed a luxury apartment complex with 150 units, featuring resort-style amenities, including a pool, fitness center, and outdoor lounge areas. Each unit was designed with high-end materials, smart home integration, and energy-efficient appliances, catering to upscale clientele in the Miami area.',
  },
  {
    img: portfolio3,
    title: 'Modern Residential Home',
    location: 'Lakeview Estates, California',
    scope: 'Multi-unit residential construction',
    description: 'CraftedConstruct developed a luxury apartment complex with 150 units, featuring resort-style amenities, including a pool, fitness center, and outdoor lounge areas. Each unit was designed with high-end materials, smart home integration, and energy-efficient appliances, catering to upscale clientele in the Miami area.',
  },
  {
    img: portfolio4,
    title: 'Modern Residential Home',
    location: 'Lakeview Estates, California',
    scope: 'Multi-unit residential construction',
    description: 'CraftedConstruct developed a luxury apartment complex with 150 units, featuring resort-style amenities, including a pool, fitness center, and outdoor lounge areas. Each unit was designed with high-end materials, smart home integration, and energy-efficient appliances, catering to upscale clientele in the Miami area.',
  },
  
];

const PortfolioList = () => {
  return (
    <div className="grid-layout">
      {portfolioItems.map((item, index) => (
        <a href="project-v1" key={index} className={`grid-item-${index + 1}`}>
          <figure className="snip1440 project-image">
            <img src={item.img} className="w-100 h-100 object-fit-cover" alt="sample54" />
            <figcaption>
              <h1 className="m-auto display-6">{item.title}</h1>
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  );
};

export default PortfolioList;
