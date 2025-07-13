import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(link);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-dark-900 to-primary-950 flex items-center justify-center relative overflow-hidden font-poppins">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-primary-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center z-10">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-white/20 border-t-primary-400 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">SS</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent mb-4">
            Loading Portfolio
          </h2>
          <p className="text-white/70 text-lg">Preparing something amazing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-gradient-to-br from-primary-950 via-dark-900 to-primary-950 min-h-screen relative overflow-hidden font-poppins">
      {/* Enhanced background animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-dark-900 to-primary-950 animate-gradient"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            <div className="w-1 h-1 bg-primary-400/30 rounded-full"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;