import React from 'react';

const Header = ({ headerImage, headerTitle }) => {
    return (
        <div className='container-fluid services-header p-0 m-0 position-relative'>
            <img src={headerImage} className='services-header__image' alt="Services header" />
            <h1 className='text-white display-3 services-header__text'>{headerTitle}</h1>
        </div>
    );
};

export default Header;
