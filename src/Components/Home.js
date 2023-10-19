import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <img src="https://res.cloudinary.com/dqoibnakh/image/upload/v1697653393/ghscei35o2lourbtubg6.jpg" alt="Landrover" className="full-width-image" />
      <div className="home-text">
        <h1 className="home-heading">HASSLE-FREE OWNERSHIP</h1>
        <p className="home-subheading">We will handle it all - from dealership coordination to doorstep delivery</p>
      </div>
      {/* Any other content for the Home section can be added here */}
    </div>
  );
}

export default Home;
