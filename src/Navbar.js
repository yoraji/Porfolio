import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Yo.Raji</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="service">Service</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
