import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';

// Import necessary components from react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Routing logic starts here */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* Routing logic ends here */}
      </div>
    </Router>
  );
}

export default App;
