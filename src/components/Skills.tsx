import React, { useState, useEffect, useRef } from 'react';
import { Server, Code, Database, Cloud, Cpu, GitBranch } from 'lucide-react';

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
      color: "from-primary-600 to-primary-500"
    },
    {
      title: "Development",
      icon: <Code className="w-7 h-7" />,
      skills: ["React", "Node.js", "Python", "JavaScript", "TypeScript"],
      color: "from-primary-500 to-primary-400"
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="w-7 h-7" />,
      skills: ["Git", "GitHub", "VS Code", "MongoDB", "PostgreSQL"],
      color: "from-primary-400 to-primary-300"
    },
    {
      title: "Emerging Tech",
      icon: <Cpu className="w-7 h-7" />,
      skills: ["Machine Learning", "Agentic AI", "TensorFlow", "scikit-learn"],
      color: "from-primary-300 to-primary-200"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Skills & Tools
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-primary-500/20 transition-all duration-1000 group hover:scale-110 border border-primary-500/20 hover:border-primary-400/40 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white group-hover:scale-125 transition-transform duration-500 shadow-lg animate-glow`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 border border-primary-500/20 hover:scale-105">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Remove Core Competencies section here */}
      </div>
    </section>
  );
};

export default Skills;