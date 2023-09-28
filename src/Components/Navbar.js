// Navbar.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                {/* Your logo goes here */}
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
                {!isOpen ? (
                    <div className="navbar__hamburger--lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className="navbar__hamburger--cross">X</div>
                )}
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
