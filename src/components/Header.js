// Header.js

import React from 'react';
// import './src/styles/Header.css'
import '../styles/Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">NASRADAMUFF FARM</a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <a href="/login" className="btn-login">Login</a>
        <a href="/register" className="btn-register">Register</a>
      </div>
    </header>
  );
}

export default Header;
