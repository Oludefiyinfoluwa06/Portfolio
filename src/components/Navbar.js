import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import logo from '../assets/img/OFTO.png';
import NavMenu from './NavMenu';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <label>Olude Fiyinfoluwa</label>
                </div>
                <div className="menu-bar" onClick={handleOpenMenu}>
                    <RiMenu3Line />
                </div>
            </nav>
            <NavMenu openMenu={isMenuOpen} />
        </>
    );
}

export default Navbar;
