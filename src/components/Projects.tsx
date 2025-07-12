import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "JavaScript Automation with Geolocation",
      description: "Advanced automation task using JavaScript with geolocation APIs for location-based functionality and web development",
      tech: ["JavaScript", "Geolocation API", "Web APIs", "HTML5"],
      gradient: "from-green-600 to-blue-600",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_javascript-webdevelopment-geolocation-activity-7349503909591199781-JZD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for seamless deployment",
      tech: ["Jenkins", "Docker", "Kubernetes", "Git"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Full Stack Web Application",
      description: "Modern web application with React frontend and Node.js backend, deployed on cloud",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      gradient: "from-pink-600 to-blue-600",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_awscasestudy-awsdeepcomposer-generativeai-activity-7349520369956831233-XabA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Machine Learning Model",
      description: "Predictive analytics model using Python and scikit-learn for data analysis",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Agentic AI Assistant",
      description: "Intelligent assistant leveraging LLMs for task automation and decision making",
      tech: ["Python", "OpenAI API", "LangChain", "Flask"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-1000 hover:scale-105 border border-purple-500/20 hover:border-purple-400/40 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-white/80 leading-relaxed mb-8 text-lg">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full text-sm font-medium hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg border border-purple-500/20">
                  <Github className="w-5 h-5" />
                  Code
                </button>
                {project.linkedinUrl ? (
                  <a 
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-purple-500/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-purple-500/20">
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;