import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About TRV (Trifecta Retail Ventures)</h3>
            <p>Trifecta is a holding company for innovative online retail operations.</p>
            <small>© Copyright Trifecta Retail Ventures</small>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/howitworks">How It Works</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  