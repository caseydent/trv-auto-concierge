import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import './Navbar.css';

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Directly control the visibility based on viewport width
            if (window.innerWidth >= 768) {
                setMenuVisible(false); // Ensures no 'active' or 'show' classes are needed
            } else {
                setMenuVisible(false); // Ensure it starts as false on smaller screens
            }
        };

        // Set up and clean up the resize event listener
        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize state based on current viewport

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        // Only allow toggling if under 768px
        if (window.innerWidth < 768) {
            setMenuVisible(prev => !prev);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697825004/TRV_Logo_icon_mqwg0a.png" alt="TRV Logo" className="navbar__logo" />
                <div className="navbar__headings">
                    <h1 className="navbar__heading">TRV-VEHICLE</h1>
                    <h1 className="navbar__heading">CONCIERGE</h1>
                </div>
            </div>
            <div className={`icon-burger${isMenuVisible ? ' active' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`menu-container${isMenuVisible ? ' show' : ''}`}>
                <NavLink to="/" exact className="menu-item" activeClassName="active" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/how-it-works" className="menu-item" activeClassName="active" onClick={toggleMenu}>How It Works</NavLink>
                <NavLink to="/services" className="menu-item" activeClassName="active" onClick={toggleMenu}>Services</NavLink>
                <NavLink to="/about-us" className="menu-item" activeClassName="active" onClick={toggleMenu}>About Us</NavLink>
                <NavLink to="/contact" className="menu-item" activeClassName="active" onClick={toggleMenu}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
