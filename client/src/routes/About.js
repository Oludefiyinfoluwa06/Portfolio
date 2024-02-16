import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import myself from '../assets/img/myself.jpg';
import resume from '../assets/doc/Olude_Fiyinfoluwa_Resume.pdf';
import '../assets/styles/About.css';

const About = () => {
    const aboutImgRef = useRef(null);
    const aboutTextRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const aboutImg = aboutImgRef.current;
        const aboutText = aboutTextRef.current;

        aboutImg.classList.remove('visible-img');
        aboutText.classList.remove('visible-text');
        
        setTimeout(() => {
            aboutImg.classList.add('visible-img');
            aboutText.classList.add('visible-text');
        }, 100);
    }, [location.pathname]);
    return (
        <div className='about'>
            <div className="about-img" ref={aboutImgRef}>
                <img src={myself} alt="Myself" />
            </div>
            <div className="about-text" ref={aboutTextRef}>
                <h3>About Me</h3>
                <p>My name is Olude Fiyinfoluwa. I am a dedicated web developer and my journey has been shaped by an unwavering commitment to excellence, refined by a robust portfolio of personal and academic projects, showcasing my expertise in creating outstanding web solutions</p>
                <br />
                <p>I breathe life into ideas through code and creativity. With a strong foundation in web development and a commitment to crafting exceptional digital experiences, I'm on a mission to make the web a more engaging and user-friendly place.</p>
                <br />
                <a href={resume} target='_blank' rel='noreferrer' download><button>Download Resume</button></a>
            </div>
        </div>
    );
}

export default About;
