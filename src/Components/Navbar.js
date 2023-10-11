import './Navbar.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                TRV Car Concierge
            </div>
            <motion.div 
                className="navbar__hamburger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`navbar__hamburger--lines ${isOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </motion.div>
            {isOpen && (
                <div className="navbar__menu">
                    {/* Your menu items go here */}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
