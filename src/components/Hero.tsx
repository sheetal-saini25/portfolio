import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <motion.div className="container mx-auto px-6 lg:px-12 z-10" variants={variants} initial="hidden" animate={controls}>
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4">Sheetal Saini</h1>
          <div className="w-32 h-2 bg-white/10 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="text-3xl lg:text-4xl font-light h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-3">I'm a</span>
                <span className="text-white font-semibold animate-fade-in">tech intern @ LinuxWorld informatics pvt Ltd</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="px-10 py-4 glass rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white">
                Download Resume
              </button>
              <button className="px-10 py-4 border-2 border-white/20 glass rounded-full font-semibold transition-all duration-300 hover:bg-white/5 hover:scale-105 text-white">
                Contact Me
              </button>
            </div>
            <div className="flex gap-6 pt-6 justify-center lg:justify-start">
              <span className="p-4 glass rounded-full text-white/70"><Github className="w-6 h-6" /></span>
              <span className="p-4 glass rounded-full text-white/70"><Linkedin className="w-6 h-6" /></span>
            </div>
          </div>
          {/* Right side - Placeholder for profile (no image) */}
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full glass flex items-center justify-center text-6xl text-white/20 font-bold">
                SS
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;