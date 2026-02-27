import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wings from './components/Wings';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-[var(--color-text-primary)] font-tech">
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
    </div>
  );
}

export default App;
