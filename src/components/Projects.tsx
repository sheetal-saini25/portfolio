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
      title: "Automated Call & SMS System",
      description: "Real-world communication project using Python and Twilio API for automated phone calls and SMS messaging. Features OTP services, alerts, reminders, and emergency systems with secure API credential handling.",
      tech: ["Python", "Twilio API", "HTTP Requests", "Environment Variables", "Automation"],
      gradient: "from-primary-600 to-primary-500",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-automation-twilio-activity-7348274532522065920-8HCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Instagram Automation with Python",
      description: "Internship project automating Instagram photo posting using Python and the instagrapi library. Successfully logged in, uploaded a photo with a caption, and learned real-world API-based automation for social media tasks.",
      tech: ["Python", "instagrapi", "Instagram API", "Automation", "Internship"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-internshipproject-instagramautomation-activity-7347550407201599488-HTbz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Automated WhatsApp Messaging with Python",
      description: "Created a WhatsApp bot using Python and pywhatkit to automate sending and scheduling messages. Useful for reminders, alerts, and personal tasks. Demonstrates efficient, real-world communication automation.",
      tech: ["Python", "pywhatkit", "WhatsApp API", "Automation", "MiniProject"],
      gradient: "from-primary-400 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-automation-whatsappbot-activity-7347541510701121536-UjKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Microsoft Uses Kubernetes (Azure Kubernetes Service)",
      description: "A deep dive into how Microsoft leverages Kubernetes and Azure Kubernetes Service (AKS) to build, scale, and manage cloud-native applications. Highlights include AKS features, DevOps integration, enterprise security, and open-source contributions.",
      tech: ["Microsoft", "Kubernetes", "Azure", "AKS", "CloudNative", "DevOps", "OpenSource"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_microsoft-kubernetes-azure-activity-7347340639983886336-m5XK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "AWS DeepComposer - Generative AI Case Study",
      description: "Explored AWS DeepComposer to learn Generative AI through interactive music composition. Composed music using AI models like GANs, AR-CNN, and Transformers with both virtual and physical MIDI keyboards. Trained custom AI models using Amazon SageMaker and managed datasets via S3.",
      tech: ["AWS DeepComposer", "Generative AI", "Amazon SageMaker", "S3", "Jupyter Notebooks", "MIDI"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_awscasestudy-awsdeepcomposer-generativeai-activity-7349520369956831233-XabA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for seamless deployment",
      tech: ["Jenkins", "Docker", "Kubernetes", "Git"],
      gradient: "from-primary-300 to-primary-200",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_devops-cicd-firstproject-activity-7348232451946680323-4_aV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Linux Tech Vlog: Why Companies Use Linux?",
      description: "A tech vlog and open source advocacy post explaining why major companies (Google, Amazon, Netflix, NASA, etc.) rely on Linux. Covers customizability, cost savings, security, stability, cloud/DevOps friendliness, and real-world use cases in industry.",
      tech: ["Linux", "Open Source", "DevOps", "Cloud", "Security", "Tech Vlog"],
      gradient: "from-primary-400 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_linux-techvlog-opensource-activity-7349053598007267328-5nEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ"
    },
    {
      title: "Machine Learning Model",
      description: "Predictive analytics model using Python and scikit-learn for data analysis",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
      gradient: "from-primary-100 to-primary-200"
    },
    {
      title: "Agentic AI Assistant",
      description: "Intelligent assistant leveraging LLMs for task automation and decision making",
      tech: ["Python", "OpenAI API", "LangChain", "Flask"],
      gradient: "from-primary-200 to-primary-300"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-primary-500/20 transition-all duration-1000 hover:scale-105 border border-primary-500/20 hover:border-primary-400/40 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
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
                  <span key={techIndex} className="px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full text-sm font-medium hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-primary-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-dark-800 to-dark-900 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg border border-primary-500/20">
                  <Github className="w-5 h-5" />
                  Code
                </button>
                {project.linkedinUrl ? (
                  <a 
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-primary-500/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-primary-500/20">
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