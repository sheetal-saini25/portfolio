import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Heart, Rocket } from 'lucide-react';

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div className="container mx-auto px-6 lg:px-12" variants={variants} initial="hidden" animate={controls}>
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">About Me</h2>
          <div className="w-32 h-2 bg-white/10 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass rounded-3xl p-10 shadow-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-black/40 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">From Madhya Pradesh</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Born and raised in the heart of India, I bring a unique perspective to technology with strong cultural values and determination.
                </p>
              </div>
              <div className="glass rounded-3xl p-10 shadow-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-black/40 rounded-xl shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Tech Enthusiast</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Passionate about DevOps, Full Stack Development, and emerging technologies like Machine Learning and Agentic AI.
                </p>
              </div>
            </div>
            <div className="glass rounded-3xl p-10 shadow-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-black/40 rounded-xl shadow-lg">
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
                <Rocket className="w-6 h-6 text-white/70" />
                <span className="text-white/70 font-semibold text-lg">Always learning, always growing</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;