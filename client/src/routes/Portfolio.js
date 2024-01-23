import React from 'react';
import '../assets/styles/Portfolio.css';
import MyWorks from '../components/MyWorks';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h3>My Works</h3>
            <p className='portfolio-p'>Explore a curated selection of projects that showcase my skills, creativity, and dedication as a web developer</p>
            <MyWorks />
        </div>
    );
}

export default Portfolio;
