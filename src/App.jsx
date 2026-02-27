import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wings from './components/Wings';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-[var(--color-text-primary)] font-tech">
      <Navbar />
      <main>
        <Hero />
        <Wings />
        <Schedule />
        <Contact />
      </main>
    </div>
  );
}

export default App;
