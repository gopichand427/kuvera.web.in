
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <LandingPage />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
