import React from 'react';
import '../assets/styles/Services.css';
import Service from '../components/Service';

const Services = () => {
    return (
        <div className='my-services'>
            <h3>Services</h3>
            <p>I offer a range of services designed to elevate your online presence</p>
            <Service />
        </div>
    );
}

export default Services;
