import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Skills.css';
import skillsImg from '../assets/img/skills.png';
import Skill from '../components/Skill';

const Skills = () => {
    const skillImgRef = useRef(null);
    const skillsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const skillImg = skillImgRef.current;
        const skills = skillsRef.current;

        skillImg.classList.remove('visible-img');
        skills.classList.remove('visible-skills');
        
        setTimeout(() => {
            skillImg.classList.add('visible-img');
            skills.classList.add('visible-skills');
        }, 100);
    }, [location.pathname]);
    return (
        <div className='sk'>
            <h3>Expertise and Abilities</h3>
            <p>In my journey, I've cultivated a diverse skill set that enables me to excel in web development</p>
            <div className="skills">
                <div className="skill-img" ref={skillImgRef}>
                    <img src={skillsImg} alt="My Skills" />
                </div>
                <Skill forwardedRef={skillsRef} />
            </div>
        </div>
    );
}

export default Skills;
