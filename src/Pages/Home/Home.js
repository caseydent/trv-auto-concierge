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
        </div>
      </div>
    </div>
  );
}

export default Home;
