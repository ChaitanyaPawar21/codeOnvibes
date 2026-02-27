import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wings from './components/Wings';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import LoadingScreen from './components/LoadingScreen';
>>>>>>> origin/main

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-[var(--color-text-primary)] font-tech">
<<<<<<< HEAD
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wings" element={<Wings />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
=======
      {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}

      {/* Render the application components, but potentially hidden/paused until loaded */}
      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Navbar />
        <main>
          <Hero />
          <Wings />
          <Schedule />
          <Contact />
        </main>
      </div>
>>>>>>> origin/main
    </div>
  );
}

export default App;
