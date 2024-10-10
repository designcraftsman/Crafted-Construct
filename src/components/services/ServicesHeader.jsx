import React from 'react';
import header from  '../../assets/images/V1/services/header.jpg';

const ServicesHeader = () =>{
    return(
        <div className='container-fluid services-header p-0 m-0 position-relative'>
                <img src={header} className=' services-header__image' alt="" />
                <h1 className='text-white  display-3 services-header__text'>Our Services</h1>
        </div>
    )
}

export default ServicesHeader;