// Navbar.js
import './Navbar.css';
import React from 'react';

const Navbar = () => {

    function toggleMenu() {
        const hamburgerMenu = document.querySelector('.icon-burger');
        hamburgerMenu.classList.toggle('active');
    }

    return (
        <nav className="navbar">
            <div className="icon-burger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="navbar__logo">
                {/* Your logo goes here */}
                TRV Car Concierge
            </div>
        </nav>
    );
}

export default Navbar;
