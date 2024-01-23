import React from 'react';
import '../assets/styles/Skills.css';
import skillsImg from '../assets/img/skills.png';
import Skill from '../components/Skill';

const Skills = () => {
    return (
        <div className='sk'>
            <h3>Expertise and Abilities</h3>
            <p>In my journey, I've cultivated a diverse skill set that enables me to excel in web development</p>
            <div className="skills">
                <div className="skill-img">
                    <img src={skillsImg} alt="My Skills" />
                </div>
                <Skill />
            </div>
        </div>
    );
}

export default Skills;
