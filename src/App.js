import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import HowItWorks from './Pages/Howitworks/Howitworks';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/Aboutus/Aboutus';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
