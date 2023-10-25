import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      {" "}
      {/* This is the parent wrapping div */}
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
        {/* Any other content for the Home section can be added here */}
      </div>
      {/* Info Section */}
      <div className="info-section">
        <div className="info-content">
          <h2 className="info-title">WHAT WE DO</h2>
          <p className="info-text">
            At TRV Auto Concierge, we specialize in sourcing and delivering a
            wide range of vehicles tailored to your preferences. With over five
            years in the industry, we're your trusted partner in procuring cars,
            recreational vehicles, boats, and motorcycles.
            {/*Additional information or text here...*/}
          </p>
          {/* New Content Block */}
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
        <h2 className="showcase-title">Our Happy Customers</h2>

        <div className="showcase-item">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698167117/Debbie_cauup3.png"
            alt="Debbie Whalen"
            className="full-width-image"
          />
          <h3 className="customer-name">Deanna Whalen - 2022 Ford Bronco</h3>
          <p className="customer-testimonial">
            "We were so excited, we couldn't resist sending you the picture and
            would be thrilled if you share it. We still have the sign hanging
            up!"
          </p>
        </div>
        <div className="showcase-item">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169178/A30600050_nonwgc.jpg"
            alt="Jimmy Cornelius"
            className="full-width-image"
          />
          <h3 className="customer-name">
            Jimmy Cornelius - 2023 Bayliner Element M17 Boat
          </h3>
          <p>
            "Enjoying the Bayliner Element M17 on the water at Tampa Bay, FL"
          </p>
        </div>
        <div className="showcase-item">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169607/A30688127_qmxpz1.jpg"
            alt="Christine Knatz"
            className="full-width-image"
          />
          <h3 className="customer-name">
            Christine Knatz - 2023 Yamaha Kodiak EPS 700 - Tactical Black
          </h3>
          <p className="customer-testimonial">
            "The 4 wheeler exceeded my expectations. From the handling to
            terrain it's truly an amazing machine. I love how easy it is to
            start, maneuver due to power steering to the ease of going into
            reverse. I can now go into trails with steep incline and use my
            winch to remove trees in my way. up!"
          </p>
        </div>
        <div className="showcase-item">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698169935/Danny_fviind.png"
            alt="Danny Carr"
            className="full-width-image"
          />
          <h3 className="customer-name">Danny Carr - 2022 Ford EcoSport S</h3>
          {/* Add customer-testimonial here <p> */}
        </div>
        <div className="showcase-item">
          <img
            src="https://res.cloudinary.com/dqoibnakh/image/upload/v1698170114/Jimmy_g4borv.png"
            alt="Jimmy Cornelius"
            className="full-width-image"
          />
          <h3 className="customer-name">
            Jimmy Cornelius - 2023 Ford F-150 Lariat 4x4 5.0L V8 - Agate White
            Metallic
          </h3>
          <p className="customer-testimonial">
            "A beautiful day in Tampa, FL with my Ford F-150 Lariat 4X4"
          </p>
        </div>
        {/* Add more showcase items as needed */}
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
    </div>
  );
}

export default Home;
