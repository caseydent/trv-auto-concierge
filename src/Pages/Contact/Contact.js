import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-content">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">Do you need more information? Contact Trifecta here! Or you can reach us at <a href="mailto:info@trifecta.vc">info@trifecta.vc</a></p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name (required)</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company Name (required)</label>
                        <input type="text" id="company" name="company" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email (required)</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="contact-button">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
