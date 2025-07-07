import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
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
              <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center z-10">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-white/20 border-t-purple-400 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SS</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Loading Portfolio
          </h2>
          <p className="text-white/70 text-lg">Preparing something amazing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Enhanced background animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>
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
            <div className="w-1 h-1 bg-purple-400/30 rounded-full"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;