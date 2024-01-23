import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import logo from '../assets/img/OFTO.png';
import NavMenu from './NavMenu';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handletoggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <label>Olude Fiyinfoluwa</label>
                </div>
                <div className="menu-bar" onClick={handletoggleMenu}>
                    <RiMenu3Line />
                </div>
            </nav>
            <NavMenu openMenu={isMenuOpen} closeMenu={handleCloseMenu} />
        </>
    );
}

export default Navbar;
