import React from 'react';
import termsData from '../data/terms.json'; // Import the JSON data
import { Helmet } from 'react-helmet';

const TermsConditions = () => {
    return (
        <div className='container my-5 py-5'>
            <Helmet>
                <title>Terms and Conditions - Crafted Construct</title> {/* Set the page title */}
                <meta name="description" content="Review the Terms and Conditions for Crafted Construct to understand the guidelines, rights, and responsibilities for using our construction, architecture, and interior design services." /> {/* Set the meta description */}
                <meta name="keywords" content="Crafted Construct terms and conditions, service terms, user guidelines, architecture services terms, interior design policy, construction service agreement, terms of use" /> {/* Set the meta keywords */}
            </Helmet>

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