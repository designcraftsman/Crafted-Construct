import React from 'react';
import termsData from '../data/terms.json'; // Import the JSON data

const TermsConditions = () => {
    return (
        <div className='container my-5 py-5'>
            <h1 className='text-center fw-bold my-5'>Terms <span className='text-primary'>&</span> Conditions</h1>
            <p>Welcome to Craft Construct!</p>

            <p>
                These terms and conditions outline the rules and regulations for the use of Craft Construct's website and services.
            </p>

            {/* Map through the terms data */}
            {termsData.terms.map((term, index) => (
                <div key={index}>
                    <h2>{term.title}</h2>
                    <p>{term.content}</p>
                </div>
            ))}
        </div>
    );
};

export default TermsConditions;