import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697653393/ghscei35o2lourbtubg6.jpg" alt="Landrover" className="full-width-image" />
      <div className="home-text">
        <h1 className="home-heading">YOUR PERSONAL VEHICLE PROCUREMENT PARTNER</h1>
        <p className="home-subheading">Simplifying the Journey<br></br>from Choice to Chassis</p>
      </div>
      {/* Any other content for the Home section can be added here */}
    </div>
  );
}

export default Home;
