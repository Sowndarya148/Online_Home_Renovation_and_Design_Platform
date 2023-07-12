import React from 'react';
import logo from './logo.png';
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="title">
          <h5>Home Renovation and Design</h5>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/RegistrationPage">Register</Link></li>
      </ul>
    </nav>
  );
};

const Homepage = () => {
  return (
    <div className="homepage">
      <div 
      className="hero-section">
        <h1>Welcome to Home Renovation and Design</h1>
        <p className="sentence">Transforming houses into your dream homes</p>
        <button className="cta-button">Explore Services</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}
