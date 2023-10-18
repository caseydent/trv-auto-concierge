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
            <div className="navbar__logo-container">
                <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697624567/p8efqixdqmiqydahbl4x.png" alt="TRV Logo" className="navbar__logo" />
                <h1 className="navbar__heading">AUTO CONCIERGE</h1> {/* New textual heading */}
            </div>
            <div className="icon-burger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}

export default Navbar;
