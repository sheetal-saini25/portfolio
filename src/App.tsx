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
      <div className="min-h-screen bg-primary-bg flex items-center justify-center font-poppins">
        <div className="text-center">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-white/20 border-t-accent rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-accent">SS</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-text-main mb-4">
            Loading Portfolio
          </h2>
          <p className="text-text-muted text-lg">Preparing something amazing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-primary-bg min-h-screen text-text-main font-poppins">
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