import React, { useState } from 'react';
import contact from '../assets/images/services/contact.jpg'

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState(null);

  // Function to toggle the panel (collapsible logic)
  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId); // Toggle between open and closed
  };

  return (
    <React.Fragment>
    <div className='container my-5 py-5 ' id="accordion">
      {/* Main Accordion Panel 1 */}
      <h1 className='text-center fw-bold my-5'>FAQS</h1>
      
      {/* Card 1 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseOne')}>
            What are the payment options? <span className={`fa ${openPanel === 'collapseOne' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseOne' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              We accept payments through credit cards, PayPal, and bank transfers. Payment is processed securely using SSL encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseTwo')}>
            What services do you provide? <span className={`fa ${openPanel === 'collapseTwo' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseTwo' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              We offer architectural design, project management, construction, and interior design services. Our expertise spans residential, commercial, and industrial spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseThree')}>
            What is the estimated project timeline? <span className={`fa ${openPanel === 'collapseThree' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseThree' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              The timeline depends on the complexity of the project. A typical residential project may take 6 to 12 months, while larger commercial projects could take up to 18 months or more.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseFour')}>
            Can I make changes to the design once it's started? <span className={`fa ${openPanel === 'collapseFour' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseFour' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              Yes, we allow changes during the design phase, but modifications during construction may result in additional costs and time delays.
            </p>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseFive')}>
            Do you provide post-construction services? <span className={`fa ${openPanel === 'collapseFive' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseFive' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              Yes, we offer post-construction services including maintenance and troubleshooting. Our team can assist with any issues that arise after the completion of the project.
            </p>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseSix')}>
            What is the process to get started? <span className={`fa ${openPanel === 'collapseSix' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseSix' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              To start a project, simply contact us for an initial consultation. We’ll discuss your requirements, timeline, and budget, and create a custom proposal based on your vision.
            </p>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="card my-3">
        <div className="card-header">
          <h3 onClick={() => togglePanel('collapseSeven')}>
            Do you have a portfolio? <span className={`fa ${openPanel === 'collapseSeven' ? 'fa-caret-up' : 'fa-caret-down'}`}></span>
          </h3>
        </div>
        <div className={`collapse ${openPanel === 'collapseSeven' ? 'show' : ''}`}>
          <div className="card-block p-3">
            <p className='fs-6 fw-light'>
              Yes, we have an extensive portfolio available on our website. It showcases various residential, commercial, and mixed-use projects we've completed.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid contact-section p-0 m-0 position-relative'>
    <img src={contact} className=' contact-section__image' alt="" />
    <div className='contact-section__text '>
        <h2 className='text-white  display-4 '>Do You Have Any Question? Feel Free To Contact Us</h2>
        <button className='btn btn-lg btn-dark hover-filled-slide-down slide-up'><span>Contact Us</span></button>
    </div>
</div>
</React.Fragment>
  );
};

export default Accordion;
