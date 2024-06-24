import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-section">
            <div className="services-content">
                <h1 className="services-title">Our Services</h1>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-title">
                            <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719097025/Pen_obpjd9.png" alt="Service 1" className="step-image" />
                            Service 1
                        </h2>
                        <p className="step-description">Description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt dui, a efficitur nisi euismod in.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719097696/Magnifying_Glass_ocgfcy.png" alt="Service 2" className="step-image step-image-sourcing" />Service 2</h2>
                        <p className="step-description">Description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt dui, a efficitur nisi euismod in.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719098386/Clipboard_ob0oej.png" alt="Service 3" className="step-image" />Service 3</h2>
                        <p className="step-description">Description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt dui, a efficitur nisi euismod in.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719098590/Finalisation_h1qjry.png" alt="Service 4" className="step-image step-image-finalisation" />Service 4</h2>
                        <p className="step-description">Description of Service 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt dui, a efficitur nisi euismod in.</p>
                    </div>
                    <div className="step">
                    <h2 className="step-title">
                    <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1719099033/Truck_ts9heg.png" alt="Service 5" className="step-image step-image-finalisation" />Service 5</h2>
                        <p className="step-description">Description of Service 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt dui, a efficitur nisi euismod in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
