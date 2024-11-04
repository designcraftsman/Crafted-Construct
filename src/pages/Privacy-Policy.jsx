import React from 'react';
import privacyData from '../data/privacy.json'; // Import the JSON data

const PrivacyPolicy = () => {
    return (
        <div className='container my-5 py-5'>
            <h1 className='text-center fw-bold my-5'>Privacy Policy</h1>
            <p>Welcome to Craft Construct!</p>

            <p>
                These terms and conditions outline the rules and regulations for the use of Craft Construct's website and services.
            </p>

            {/* Map through the privacy data */}
            {privacyData.privacy.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    {item.title === "Intellectual Property Rights" && (
                        <ul>
                            <li>Republish material from Craft Construct</li>
                            <li>Sell, rent or sub-license material from Craft Construct</li>
                            <li>Reproduce, duplicate or copy material from Craft Construct</li>
                            <li>Redistribute content from Craft Construct (unless content is specifically made for redistribution)</li>
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PrivacyPolicy;