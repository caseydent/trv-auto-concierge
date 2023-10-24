import React from 'react';
import './Home.css';

function Home() {
  return (
    <div> {/* This is the parent wrapping div */}
      <div className="home-section">
        <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697653393/ghscei35o2lourbtubg6.jpg" alt="Landrover" className="full-width-image" />
        <div className="home-text">
          <h1 className="home-heading">YOUR PERSONAL VEHICLE PROCUREMENT PARTNER</h1>
          <p className="home-subheading">Simplifying the Journey<br></br>from Choice to Chassis</p>
        </div>
        {/* Any other content for the Home section can be added here */}
      </div>

      {/* New Info Section */}
      <div className="info-section">
        <h2 className="info-title">About Trifecta Retail Ventures - Auto Concierge</h2>
        <p className="info-text">
          Trifecta Retail Ventures is your trusted partner in vehicle procurement. 
          We simplify the process, ensuring you get the best vehicle that fits your needs.
          [Additional information or text here...]
        </p>
      </div>
    </div>
  );
}

export default Home;
