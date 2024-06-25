import React, { useEffect } from 'react';
import './Howitworks.css';

const Howitworks = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="howitworks-section">
            <div className="howitworks-content">
                <h1 className="howitworks-title">How It Works</h1>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-title">
                            <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719097025/Pen_obpjd9.png" alt="Consultation" className="step-image" />
                            Step 1: Consultation
                        </h2>
                        <p className="step-description">We start with a thorough consultation to understand your vehicle needs and preferences.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719097696/Magnifying_Glass_ocgfcy.png" alt="Sourcing" className="step-image step-image-sourcing" />Step 2: Sourcing</h2>
                        <p className="step-description">Our team searches for the best options that match your criteria from our extensive network.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719098386/Clipboard_ob0oej.png" alt="Presentation" className="step-image" />Step 3: Presentation</h2>
                        <p className="step-description">We present you with a curated list of vehicles, including detailed information and pricing.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719098590/Finalisation_h1qjry.png" alt="Finalisation" className="step-image step-image-finalisation" />Step 4: Finalization</h2>
                        <p className="step-description">Once you choose a vehicle, we handle all the paperwork and logistics to ensure a smooth process.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719099033/Truck_ts9heg.png" alt="Delivery" className="step-image step-image-finalisation" />Step 5: Delivery</h2>
                        <p className="step-description">Your vehicle is delivered to your doorstep, ready for you to enjoy.</p>
                    </div>
                </div>
                <div className="howitworks-bottom-image">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719219481/Cadillac_Front_ykjemc.png" alt="Cadillac 2024" />
                </div>
            </div>
        </div>
    );
}

export default Howitworks;
