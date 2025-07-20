import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Heart, Code, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">From Madhya Pradesh</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Born and raised in the heart of India, I bring a unique perspective to technology with strong cultural values and determination.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Tech Enthusiast</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Passionate about DevOps, Full Stack Development, and emerging technologies like Machine Learning and Agentic AI.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-primary-400 to-primary-300 rounded-xl shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Journey</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                I'm Sheetal Saini, a passionate learner from Madhya Pradesh, deeply interested in DevOps, Full Stack Development, and emerging technologies like Machine Learning and Agentic AI. My journey in tech began with curiosity and has evolved into a dedicated pursuit of excellence.
              </p>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                Currently expanding my skills through hands-on experience with modern development tools and cloud technologies, I'm committed to building innovative solutions that make a difference.
              </p>
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6 text-primary-400" />
                <span className="text-transparent bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text font-semibold text-lg">Always learning, always growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;