import React, { useEffect } from 'react';
import './Aboutus.css';

const Aboutus = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="aboutus-section">
            <div className="aboutus-content">
                <h1 className="aboutus-title">About Us</h1>
                <div className="aboutus-description">
                    <p>Our company is dedicated to providing the best service to our customers. We have a rich history of excellence and a commitment to quality.</p>
                    <p>Founded in [Year], we have grown to become a leader in the industry. Our team of experts works tirelessly to ensure customer satisfaction.</p>
                    <p>We believe in innovation, integrity, and customer-centricity. Join us on our journey to make the world a better place, one customer at a time.</p>
                </div>
                <div className="aboutus-image">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719222541/Team_f8mphm.png" alt="About Us" />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
