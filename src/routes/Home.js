import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Home.css';
import heroImg from '../assets/img/hero-img.png';

const Home = () => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>Hello, I am a</p>
                <h3 style={{ color: 'blue' }}>Web Developer</h3>
                <p>Welcome to my digital playground, where innovation meets design and user experience. I specialize in translating visions into interactive and visually stunning web solutions</p>
                <ul className="social-media">
                    <li><Link target='_blank' to="https://www.facebook.com/profile.php?id=100073669704664"><FaFacebook /></Link></li>
                    <li><Link target='_blank' to="https://www.instagram.com/timothyolude/"><FaInstagram /></Link></li>
                    <li><Link target='_blank' to="https://github.com/Oludefiyinfoluwa06/"><FaGithub /></Link></li>
                    <li><Link target='_blank' to="https://www.linkedin.com/in/olude-fiyinfoluwa-089634259/"><FaLinkedin /></Link></li>
                </ul>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="Hero" />
            </div>
        </div>
    );
}

export default Home;
