import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const roles = ["DevOps Intern", "Full Stack Learner", "Future Engineer"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className={`w-${Math.random() > 0.5 ? '1' : '2'} h-${Math.random() > 0.5 ? '1' : '2'} bg-gradient-to-r from-primary-400 to-primary-300 rounded-full opacity-${Math.random() > 0.5 ? '40' : '60'}`}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        {/* Name positioned below navbar with slide-down animation */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-300 bg-clip-text text-transparent animate-slide-down mb-4">
            Sheetal Saini
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="text-3xl lg:text-4xl font-light h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-3">I'm a</span>
                <span className="text-transparent bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text font-semibold animate-fade-in">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed max-w-lg text-center lg:text-left">
              Passionate about DevOps, Full Stack Development, and emerging technologies like Machine Learning and Agentic AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group px-10 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-500/50 animate-float border border-primary-400/30">
                <span className="flex items-center gap-3">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </button>
              <button className="group px-10 py-4 border-2 border-primary-400 rounded-full font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-400/20 hover:to-primary-300/20 hover:scale-110 backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  <Mail className="w-6 h-6 group-hover:animate-pulse" />
                  Contact Me
                </span>
              </button>
            </div>

            <div className="flex gap-6 pt-6 justify-center lg:justify-start">
              <a href="https://github.com/sheetal-saini25" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:shadow-lg border border-primary-400/30">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/sheetal-saini-b33273371" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:shadow-lg border border-primary-400/30">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right side - Enhanced Profile photo */}
          <div className={`flex justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 p-2 animate-spin-slow">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary-950/50 to-dark-900/50 backdrop-blur-sm"></div>
              </div>
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-400 to-primary-300 flex items-center justify-center animate-float">
                  <span className="text-8xl font-bold text-white drop-shadow-lg">SS</span>
                </div>
              </div>
              {/* Enhanced floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-primary-300 to-primary-200 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-r from-primary-300 to-primary-100 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute bottom-1/4 -left-6 w-5 h-5 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Scroll Down</span>
            <ChevronDown className="w-8 h-8 text-primary-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;