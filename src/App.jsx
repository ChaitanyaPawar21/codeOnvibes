import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import AppRoute from './routes/AppRoute';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen text-[var(--color-text-primary)] font-tech">
      {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}

      {/* Render the application components, but potentially hidden/paused until loaded */}
      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Navbar />
        <main>
          <AppRoute />
        </main>
      </div>
    </div>
  );
}

export default App;
