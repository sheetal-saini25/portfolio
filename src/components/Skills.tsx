import React, { useState, useEffect, useRef } from 'react';
import { Server, Database, Cloud, Cpu, GitBranch } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-7 h-7" />,
      skills: ["Kubernetes", "Docker", "Jenkins", "AWS", "Linux"],
      color: "from-gray-800 to-gray-700"
    },
    {
      title: "Development",
      icon: <Server className="w-7 h-7" />,
      skills: ["React", "Node.js", "Python", "JavaScript"],
      color: "from-gray-700 to-gray-600"
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="w-7 h-7" />,
      skills: ["Git", "GitHub", "VS Code", "MongoDB"],
      color: "from-gray-600 to-gray-500"
    },
    {
      title: "Emerging Tech",
      icon: <Cpu className="w-7 h-7" />,
      skills: ["Machine Learning", "Agentic AI", "TensorFlow", "scikit-learn"],
      color: "from-gray-500 to-gray-400"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Skills & Tools
          </h2>
          <div className="w-32 h-2 bg-white/10 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass rounded-3xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-1000 group hover:scale-110 border border-gray-800 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              {/* Skills List */}
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 border border-gray-700 hover:scale-105">
                  <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;