import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* You can add other sections like About, Service, etc. here */}
    </div>
  );
}

export default App;
