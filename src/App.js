import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>My Portfolio</header>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <section id="about">
          <h1>About Me</h1>
          <p>Welcome to my portfolio! I am a developer passionate about building amazing projects.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my recent works.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <button>Get in Touch</button>
        </section>
      </main>
      <footer>&copy; 2025 My Portfolio</footer>
    </div>
  );
}

export default App;