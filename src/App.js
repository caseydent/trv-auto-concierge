import "./App.css";
import React, { Fragment } from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Home from "./Pages/Home/Home";
import HowItWorks from "./Pages/Howitworks/Howitworks";
import Services from "./Pages/Services/Services";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Contact from "./Pages/Contact/Contact";

// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/trv-auto-concierge">
      <Fragment>
        <div className="App">
          <Navbar />
          {/* Routing logic starts here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* Routing logic ends here */}
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
