import './Navbar.css';
import React, { useEffect, useCallback } from 'react';

const Navbar = () => {

    function toggleMenu() {
        const hamburgerMenu = document.querySelector('.icon-burger');
        const menuContainer = document.querySelector('.menu-container');
        
        hamburgerMenu.classList.toggle('active');
        
        if (hamburgerMenu.classList.contains('active')) {
            menuContainer.style.display = 'block';
            setTimeout(() => {
                menuContainer.style.opacity = '1';
            }, 10); // This slight delay ensures the fade-in transition works as expected
        } else {
            menuContainer.style.opacity = '0';
            setTimeout(() => {
                menuContainer.style.display = 'none';
            }, 500); // This delay matches the CSS transition duration
        }
    }

    const handleOutsideClick = useCallback((event) => { // Wrapped with useCallback
        const hamburgerMenu = document.querySelector('.icon-burger');
        const menuContainer = document.querySelector('.menu-container');

        if (!hamburgerMenu.contains(event.target) && !menuContainer.contains(event.target) && hamburgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }, []); // Empty dependency array for useCallback

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]); // Added handleOutsideClick to the dependency array

    return (
        <nav className="navbar">
            <div className="navbar__logo-container">
                <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697624567/p8efqixdqmiqydahbl4x.png" alt="TRV Logo" className="navbar__logo" />
                <h1 className="navbar__heading">AUTO CONCIERGE</h1>
            </div>
            <div className="icon-burger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="menu-container">
                <div className="menu-item">Home</div>
                <div className="menu-item">Process</div>
                <div className="menu-item">Getting Started</div>
                <div className="menu-item">About Us</div>
                <div className="menu-item">Contact</div>
            </div>
        </nav>
    );
}

export default Navbar;
