import React from 'react';

function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to My Portfolio</h1>
        <p className="text-lg mb-2">
          Hi, I'm <span className="yo-raji">Yo.Raji</span>, a web developer with a passion for creating beautiful and functional websites.
        </p>
        <p className="text-lg">
          Explore my <span className="text-link font-medium">projects</span> and <span className="text-link font-medium">services</span> to see what I can do for you!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-primary">Projects</h2>
          <p>Take a look at some of the apps and websites I've built, including client work and personal experiments.</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-primary">Services</h2>
          <p>From frontend development to full-stack solutions, I can help you turn your ideas into reality.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;