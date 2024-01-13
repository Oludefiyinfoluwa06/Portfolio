import React from 'react';
import logo from '../assets/img/OFTO.png';
import { Link } from 'react-router-dom';

const NavMenu = ({ openMenu }) => {
    return (
        <div className='nav-menu'>
            <div className={openMenu === true ? 'menu-img' : 'menu-img hidden'}>
                <img src={logo} alt="Logo" />
            </div>
            <ul className={openMenu === true ? 'menu-item' : 'menu-item hidden'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavMenu;
