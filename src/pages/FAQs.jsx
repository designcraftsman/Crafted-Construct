import React, { useState } from 'react';
import faqsData from '../data/faqs.json'; // Import the JSON data
import ContactSection  from '../components/contact/ContactSection';
import {Helmet} from 'react-helmet';

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState(null); // State to track which panel is open

  // Function to toggle the panel (collapsible logic)
  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId); // Toggle between open and closed
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>FAQs - Crafted Construct </title> {/* Set the page title */}
        <meta name="description" content="Explore FAQs for Crafted Construct, your trusted partner in construction, architecture, and interior design. Discover answers to common questions about our residential and commercial design services." /> {/* Set the meta description */}
        <meta name="keywords" content="Crafted Construct, architecture services, interior design, construction, residential design, commercial architecture, custom interiors, construction solutions, design consulting, building projects" /> {/* Set the meta keywords */}
      </Helmet>
      <div className='container my-5 py-5 ' id="accordion">
        {/* Main Accordion Panel */}
        <h1 className='text-center fw-bold my-5'>FAQS</h1>
        
        {/* Map through the FAQs data */}
        {faqsData.faqs.map(faq => (
          <div className="card my-3" key={faq.id}>
            <div className="card-header">
              <h3 onClick={() => togglePanel(faq.id)}>
                {faq.question} <span className={`fa ${openPanel === faq.id ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
              </h3>
            </div>
            <div className={`collapse ${openPanel === faq.id ? 'show' : ''}`}>
              <div className="card-block p-3">
                <p className='fs-6 fw-light'>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactSection />
    </React.Fragment>
  );
};

export default Accordion;