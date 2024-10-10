import React from 'react';
import { PiHandshakeThin } from "react-icons/pi";

const ServicesAbout = () =>{
    return(
        <div className='container'>
                <div className='row my-5'>
                    <div className="col-6 ">
                        <h2 className='display-5'>
                        What sets us apart from the rest is our visionary goal & truly unique designs curated to perfection.
                        </h2>
                    </div>
                    <div className='col-6 m-auto'>
                        <p className='text-center'>
                            <PiHandshakeThin className='display-1 text-primary' />
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default ServicesAbout;