import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wings from './components/Wings';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-[var(--color-text-primary)] font-tech">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wings" element={<Wings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
