import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <TransitionGroup>
                <CSSTransition
                    key={images[currentImageIndex]}
                    timeout={1000}
                    classNames="fade"
                >
                    <img
                        src={images[currentImageIndex]}
                        alt="Carousel"
                        className="carousel-image"
                    />
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default ImageCarousel;
