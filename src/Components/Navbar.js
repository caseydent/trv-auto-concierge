import './Navbar.css';
import React, { useEffect } from 'react';

const Navbar = () => {

    function toggleMenu() {
        const hamburgerMenu = document.querySelector('.icon-burger');
        const menuContainer = document.querySelector('.menu-container');
        
        hamburgerMenu.classList.toggle('active');
        
        if (hamburgerMenu.classList.contains('active')) {
            menuContainer.style.display = 'block';
            setTimeout(() => {
                menuContainer.style.opacity = '1';
            }, 10);
        } else {
            menuContainer.style.opacity = '0';
            setTimeout(() => {
                menuContainer.style.display = 'none';
            }, 500);
        }
    }

    function handleOutsideClick(event) {
        const hamburgerMenu = document.querySelector('.icon-burger');
        const menuContainer = document.querySelector('.menu-container');

        if (!hamburgerMenu.contains(event.target) && !menuContainer.contains(event.target) && hamburgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

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
