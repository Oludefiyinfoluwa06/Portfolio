import React from 'react';
import logo from '../assets/img/OFTO.png';
import { Link } from 'react-router-dom';

const NavMenu = ({ openMenu, closeMenu }) => {
    const handleCloseMenu = () => {
        closeMenu();
    }
    
    return (
        <div className='nav-menu'>
            <div className={openMenu ? 'menu-img' : 'menu-img hidden'}>
                <img src={logo} alt="Logo" />
            </div>
            <ul className={openMenu ? 'menu-item' : 'menu-item hidden'}>
                <li><Link to="/" onClick={handleCloseMenu}>Home</Link></li>
                <li><Link to="/about" onClick={handleCloseMenu}>About</Link></li>
                <li><Link to="/skills" onClick={handleCloseMenu}>Skills</Link></li>
                <li><Link to="/services" onClick={handleCloseMenu}>Services</Link></li>
                <li><Link to="/portfolio" onClick={handleCloseMenu}>Portfolio</Link></li>
                <li><Link to="/contact" onClick={handleCloseMenu}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavMenu;
