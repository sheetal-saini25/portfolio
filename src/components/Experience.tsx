import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, GitBranch, Container, Settings } from 'lucide-react';

const Experience = () => {
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

  const tools = [
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'GitHub', icon: <Code className="w-6 h-6" /> },
    { name: 'Jenkins', icon: <Settings className="w-6 h-6" /> },
    { name: 'Docker', icon: <Container className="w-6 h-6" /> },
    { name: 'Kubernetes', icon: <Container className="w-6 h-6" /> }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-1000 hover:scale-105 border border-purple-500/20 hover:border-purple-400/40 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl text-white shadow-lg animate-glow">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  DevOps Intern
                </h3>
                <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold text-xl">Linux World</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10 text-lg">
              Working hands-on with modern DevOps tools and practices, gaining practical experience in continuous integration, 
              containerization, and cloud infrastructure management. Learning DevOps pipelines and modern cloud practices.
            </p>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">Tools & Technologies:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className={`flex items-center gap-3 p-4 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 hover:shadow-lg transition-all duration-500 group border border-purple-500/20 hover:scale-110 delay-${index * 100} hover:border-purple-400/40`}>
                    <span className="text-purple-400 group-hover:scale-125 transition-transform duration-300">
                      {tool.icon}
                    </span>
                    <span className="text-white font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <p className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-semibold text-lg">
                💡 Currently learning DevOps pipelines and modern cloud practices through hands-on projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;