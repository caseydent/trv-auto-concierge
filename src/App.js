import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Rest of your content goes here */}
      <Home /> {/* Use the Home component here */}
      {/* Rest of your content goes here */}
    </div>
  );
}

export default App;
