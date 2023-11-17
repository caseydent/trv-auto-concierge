import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      refs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= 0 &&
          !animatedElements.includes(index)
        ) {
          setAnimatedElements((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [animatedElements]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="home-section">
        <img
          src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697653393/ghscei35o2lourbtubg6.jpg"
          alt="Landrover"
          className="full-width-image"
        />
        <div className="home-text">
          <h1 className="home-heading">
            YOUR PERSONAL VEHICLE PROCUREMENT PARTNER
          </h1>
          <p className="home-subheading">
            Simplifying the Journey<br></br>from Choice to Chassis
          </p>
        </div>
      </div>

      <div
        ref={(el) => (refs.current[0] = el)}
        className={`info-section ${
          animatedElements.includes(0) ? "fade-in-final" : "fade-in-initial"
        }`}
      >
        <div className="info-content">
          <h2 className="info-title">WHAT WE DO</h2>
          <p className="info-text">
            At TRV Auto Concierge, we specialize in sourcing and delivering a
            wide range of vehicles tailored to your preferences. With over five
            years in the industry, we're your trusted partner in procuring cars,
            recreational vehicles, boats, and motorcycles.
          </p>
          <div className="info-content-additional">
            <h2 className="info-title">WHAT WE PROCURE</h2>
            <p className="info-text">
              Your Dream Ride, Delivered: Whether you’re in the market for a
              sleek new car, a fun recreational vehicle, a sturdy boat, or a
              swift motorcycle, we've got you covered. Our extensive experience
              ensures you get the best deal on your desired vehicle.
            </p>
          </div>
        </div>
      </div>

      <div className="customer-showcase">
        <h2 className="showcase-title">OUR HAPPY CUSTOMERS</h2>
        <div className="image-container">
        <div
          ref={(el) => (refs.current[1] = el)}
          className={`showcase-item ${
            animatedElements.includes(1) ? "fade-in-final" : "fade-in-initial"
          }`}
        >
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169178/A30600050_nonwgc.jpg"
              alt="Jimmy Cornelius"
              className="full-width-image-cs"
            />
          </div>
          <h3 className="customer-name">
            Jimmy - 2023 Bayliner Element M17 Boat
          </h3>
          <p className="customer-testimonial">
            "Enjoying the Bayliner Element M17 on the water at Tampa Bay, FL"
          </p>
        </div>

        <div
          ref={(el) => (refs.current[2] = el)}
          className={`showcase-item ${
            animatedElements.includes(2) ? "fade-in-final" : "fade-in-initial"
          }`}
        >
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169607/A30688127_qmxpz1.jpg"
              alt="Christine Knatz"
              className="full-width-image-cs"
            />
          </div>
          <h3 className="customer-name">
            Christine - 2023 Yamaha Kodiak EPS 700 - Tactical Black
          </h3>
          <p className="customer-testimonial">
            "The 4 wheeler exceeded my expectations. From the handling to
            terrain it's truly an amazing machine. I love how easy it is to
            start, maneuver due to power steering to the ease of going into
            reverse. I can now go into trails with steep incline and use my
            winch to remove trees in my way."
          </p>
        </div>

        <div
          ref={(el) => (refs.current[3] = el)}
          className={`showcase-item ${
            animatedElements.includes(3) ? "fade-in-final" : "fade-in-initial"
          }`}
        >
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169935/Danny_fviind.png"
              alt="Danny Carr"
              className="full-width-image-cs"
            />
          </div>
          <h3 className="customer-name">Danny - 2022 Ford EcoSport S</h3>
          <p className="customer-testimonial">
            "I am very happy with my EcoSport...At the dealership, I gave them
            my drivers license and insurance card, they gave me my Key! Easiest
            transaction ever"
          </p>
        </div>

        <div
          ref={(el) => (refs.current[4] = el)}
          className={`showcase-item ${
            animatedElements.includes(4) ? "fade-in-final" : "fade-in-initial"
          }`}
        >
          <div className="image-wrapper">
            <img
              src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698170114/Jimmy_g4borv.png"
              alt="Jimmy Cornelius"
              className="full-width-image-cs"
            />
          </div>
          <h3 className="customer-name">
            Jimmy - 2023 Ford F-150 Lariat 4x4 5.0L V8 - Agate White Metallic S
          </h3>
          <p className="customer-testimonial">
            "A beautiful day in Tampa, FL with my Ford F-150 Lariat 4X4"
          </p>
        </div>

        {/* Repeat this structure for the rest of the showcase items, incrementing the refs.current index for each item. */}
      </div>

      <div className="cta-section">
        <h2>Ready to find your perfect vehicle?</h2>
        <p>Get started today!</p>
        <div className="cta-links">
          <Link to="/services" className="cta-link">
            Services
          </Link>
          <Link to="/howitworks" className="cta-link">
            How It Works
          </Link>
        </div>
      </div>

      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698237417/SeekPng.com_grey-png_2162589_irw3sb.png"
            alt="Scroll to top"
          />
        </button>
      )}
      </div>
    </div>
  );
}

export default Home;
