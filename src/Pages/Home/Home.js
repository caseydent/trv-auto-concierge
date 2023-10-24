import React from "react";
import "./Home.css";

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
            src="URL_OF_THE_CUSTOMER_IMAGE"
            alt="Customer Name"
            className="customer-image"
          />
          <h3 className="customer-name">Customer Name</h3>
          <p className="customer-testimonial">
            Short testimonial or description about the vehicle procured.
          </p>
        </div>

        {/* Add more showcase items as needed */}
      </div>
    </div>
  );
}

export default Home;
