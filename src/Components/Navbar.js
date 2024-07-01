import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth >= 1100);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeViewport(window.innerWidth >= 1100);
            if (window.innerWidth >= 768) {
                setMenuVisible(false);
            } else {
                setMenuVisible(false);
            }
        };

        const handleScroll = () => {
            if (window.innerWidth >= 1100) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        handleResize(); // Initialize state based on current viewport
        handleScroll(); // Set initial navbar position

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        if (window.innerWidth < 768) {
            setMenuVisible(prev => !prev);
        }
    };

    return (
        <nav className={`navbar ${isNavbarFixed ? 'navbar--fixed' : ''}`}>
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
                <NavLink to="/" exact className="menu-item" activeClassName="active" onMouseEnter={() => isLargeViewport && setHoveredItem('home')} onMouseLeave={() => isLargeViewport && setHoveredItem(null)}>Home</NavLink>
                <NavLink to="/howitworks" className="menu-item" activeClassName="active" onMouseEnter={() => isLargeViewport && setHoveredItem('howitworks')} onMouseLeave={() => isLargeViewport && setHoveredItem(null)}>How It Works</NavLink>
                <NavLink to="/services" className="menu-item" activeClassName="active" onMouseEnter={() => isLargeViewport && setHoveredItem('services')} onMouseLeave={() => isLargeViewport && setHoveredItem(null)}>Services</NavLink>
                <NavLink to="/aboutus" className="menu-item" activeClassName="active" onMouseEnter={() => isLargeViewport && setHoveredItem('aboutus')} onMouseLeave={() => isLargeViewport && setHoveredItem(null)}>About Us</NavLink>
                <NavLink to="/contact" className="menu-item" activeClassName="active" onMouseEnter={() => isLargeViewport && setHoveredItem('contact')} onMouseLeave={() => isLargeViewport && setHoveredItem(null)}>Contact</NavLink>
                {isLargeViewport && <div className={`underline ${hoveredItem ? hoveredItem : 'active'}`}></div>}
            </div>
        </nav>
    );
}

export default Navbar;
