import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFile, FaGlobe, FaTachometerAlt } from 'react-icons/fa';

const Service = () => {
    const serviceRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const service = serviceRef.current;

        service.classList.remove('visible-service');

        setTimeout(() => {
            service.classList.add('visible-service');
        }, 100);
    }, [location.pathname]);

    const services = [
        {
            id: 1,
            icon: <FaGlobe />,
            title: 'Web development',
            description: 'I specialize in creating user-friendly websites, breathing life into designs with a robust blend of HTML, CSS, JavaScript, React JS and PHP',
        },
        {
            id: 2,
            icon: <FaFile />,
            title: 'Seamless responsive design',
            description: 'I bring expertise in crafting websites that effortlessly adapt to diverse devices and screen sizes, guaranteeing a uniform and impeccable user experience',
        },
        {
            id: 3,
            icon: <FaTachometerAlt />,
            title: 'Proactive Website Maintenance',
            description: 'My commitment extends beyond the initial build. I provide ongoing website maintenance and updates to keep your digital presence secure and functional',
        },
    ];

    return (
        <div className='services' ref={serviceRef}>
            {services.map(service => (
                <div className="service" key={service.id}>
                    <div className="service-icon">
                        {service.icon}
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Service;
