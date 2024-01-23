import React from 'react';
import { FaFile, FaGlobe, FaTachometerAlt } from 'react-icons/fa';

const Service = () => {
    const services = [
        {
            id: 1,
            icon: <FaGlobe />,
            title: 'Web development',
            description: 'I specialize in creating user-friendly websites, breathing life into designs with a robust blend of HTML, CSS, JavaScript, React JS and PHP. With a deep commitment to delivering top-notch web solutions, I bring your digital vision to reality.',
        },
        {
            id: 2,
            icon: <FaFile />,
            title: 'Seamless responsive design',
            description: 'I bring expertise in crafting websites that effortlessly adapt to diverse devices and screen sizes, guaranteeing a uniform and impeccable user experience. Your audience will enjoy a flawless journey across all platforms.',
        },
        {
            id: 3,
            icon: <FaTachometerAlt />,
            title: 'Proactive Website Maintenance',
            description: 'My commitment extends beyond the initial build. I provide ongoing website maintenance and updates to keep your digital presence secure, functional, and contemporary. Trust me to safeguard your online assets.',
        },
    ];

    return (
        <div className='services'>
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
