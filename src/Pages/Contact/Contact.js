import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
            formData,             // Form data to be sent
            'YOUR_USER_ID'        // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message. Please try again later.');
        });

        // Clear the form
        setFormData({
            name: '',
            company: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-section">
            <div className="contact-content">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">Do you need more information? Contact Trifecta here! Or you can reach us at <a href="mailto:info@trifecta.vc">info@trifecta.vc</a></p>
                <div className="form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name (required)</label>
                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company Name (required)</label>
                            <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email (required)</label>
                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="contact-button">Send</button>
                    </form>
                    <div className="social-media-container">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719252631/Facebook_yfxop3.png" alt="Facebook" className="social-media-logo" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719252545/X_Twitter_m4kbsj.png" alt="Twitter" className="social-media-logo" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719251960/Linkedin_africe.png" alt="LinkedIn" className="social-media-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
