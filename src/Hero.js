import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi there!</h1>
        <h2>I Am Yo.Raji</h2>
        <p>
          I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and design websites, graphic design, and many more...
        </p>
        <a href="portfolio" className="hero-btn">SEE PORTFOLIO</a>
      </div>
      <div className="hero-image" />
    </section>
  );
}

export default Hero;
