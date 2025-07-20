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
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for seamless deployment",
      tech: ["Jenkins", "Docker", "Kubernetes", "Git"],
      gradient: "from-primary-300 to-primary-200",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_devops-cicd-firstproject-activity-7348232451946680323-4_aV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      githubUrl: "https://github.com/sheetal-saini25/Devops_project1",
      category: "major"
    },
    {
      title: "Docker in Docker (DIND) DevOps Setup",
      description: "Configured and ran Docker inside a Docker container (DIND) for modern CI/CD pipelines and containerized development environments. Explored use cases in GitLab CI, Jenkins, and learned about security considerations.",
      tech: ["Docker", "DIND", "DevOps", "CI/CD", "Containers", "Linux"],
      gradient: "from-primary-500 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_docker-dind-devops-activity-7351543731080036352-swHh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "major"
    },
    {
      title: "Linux, Docker, Python & Machine Learning Hands-on Projects",
      description: "Hands-on with real-world tech tasks: Linux networking, Docker container management, Python scripting, and machine learning projects (house price prediction, salary prediction, error visualization). Built Flask full stack apps and REST APIs.",
      tech: ["Linux", "Docker", "Python", "Machine Learning", "Flask", "Full Stack", "REST API", "Networking"],
      gradient: "from-primary-400 to-primary-200",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_linux-docker-machinelearning-activity-7351299049750151170-Dd55?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    },
    {
      title: "Microsoft Uses Kubernetes (Azure Kubernetes Service)",
      description: "A deep dive into how Microsoft leverages Kubernetes and Azure Kubernetes Service (AKS) to build, scale, and manage cloud-native applications. Highlights include AKS features, DevOps integration, enterprise security, and open-source contributions.",
      tech: ["Microsoft", "Kubernetes", "Azure", "AKS", "CloudNative", "DevOps", "OpenSource"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_microsoft-kubernetes-azure-activity-7347340639983886336-m5XK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "case"
    },
    {
      title: "AWS DeepComposer - Generative AI Case Study",
      description: "Explored AWS DeepComposer to learn Generative AI through interactive music composition. Composed music using AI models like GANs, AR-CNN, and Transformers with both virtual and physical MIDI keyboards. Trained custom AI models using Amazon SageMaker and managed datasets via S3.",
      tech: ["AWS DeepComposer", "Generative AI", "Amazon SageMaker", "S3", "Jupyter Notebooks", "MIDI"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_awscasestudy-awsdeepcomposer-generativeai-activity-7349520369956831233-XabA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "case"
    },
    {
      title: "Coca-Cola AWS Cloud Computing Case Study",
      description: "A comprehensive analysis of how Coca-Cola leverages Amazon Web Services (AWS) to boost efficiency, innovation, and global operations. After migrating from traditional data centers to AWS cloud, Coca-Cola achieved 40% IT cost reduction, 80% fewer support tickets, and faster development cycles. Highlights include Coca-Cola Andina's data lake implementation serving 54 million+ consumers across South America, 80% improved analytics productivity, and serverless technologies enabling touchless experiences like the Freestyle beverage dispenser developed in 150 days.",
      tech: ["AWS", "Cloud Computing", "Data Lake", "Serverless", "Analytics", "Digital Transformation", "Case Study", "Business Growth"],
      gradient: "from-primary-600 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_cocacola-aws-cloudcomputing-activity-7349135894471176193-s7_X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "case"
    },
    {
      title: "AWS 84+ Services Learning Journey",
      description: "Explored 84+ AWS services including EC2, Lambda, S3, and VPC with real-world use cases, team discussions, and production-level understanding. Collaborative learning and presentations under expert mentorship.",
      tech: ["AWS", "Cloud", "EC2", "Lambda", "S3", "VPC", "Teamwork", "Tech Exposure"],
      gradient: "from-primary-200 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_aws-services-activity-7350834047725506560-ogGs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "case"
    },
    {
      title: "Linux Tech Vlog: Why Companies Use Linux?",
      description: "A tech vlog and open source advocacy post explaining why major companies (Google, Amazon, Netflix, NASA, etc.) rely on Linux. Covers customizability, cost savings, security, stability, cloud/DevOps friendliness, and real-world use cases in industry.",
      tech: ["Linux", "Open Source", "DevOps", "Cloud", "Security", "Tech Vlog"],
      gradient: "from-primary-400 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_linux-techvlog-opensource-activity-7349053598007267328-5nEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "case"
    },
    {
      title: "Automated Call & SMS System",
      description: "Real-world communication project using Python and Twilio API for automated phone calls and SMS messaging. Features OTP services, alerts, reminders, and emergency systems with secure API credential handling.",
      tech: ["Python", "Twilio API", "HTTP Requests", "Environment Variables", "Automation"],
      gradient: "from-primary-600 to-primary-500",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-automation-twilio-activity-7348274532522065920-8HCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    },
    {
      title: "Instagram Automation with Python",
      description: "Internship project automating Instagram photo posting using Python and the instagrapi library. Successfully logged in, uploaded a photo with a caption, and learned real-world API-based automation for social media tasks.",
      tech: ["Python", "instagrapi", "Instagram API", "Automation", "Internship"],
      gradient: "from-primary-500 to-primary-400",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-internshipproject-instagramautomation-activity-7347550407201599488-HTbz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    },
    {
      title: "Automated WhatsApp Messaging with Python",
      description: "Created a WhatsApp bot using Python and pywhatkit to automate sending and scheduling messages. Useful for reminders, alerts, and personal tasks. Demonstrates efficient, real-world communication automation.",
      tech: ["Python", "pywhatkit", "WhatsApp API", "Automation", "MiniProject"],
      gradient: "from-primary-400 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-automation-whatsappbot-activity-7347541510701121536-UjKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    },
    {
      title: "Dream Analyzer & Sweet Dreams Tips (LLM Streamlit App)",
      description: "A Streamlit web app built during LinuxWorld Internship. Uses a Large Language Model (LLM) to analyze dream types and provide personalized sleep tips for mental wellness. Enter your dream, get insights and AI-powered advice for better sleep.",
      tech: ["Python", "Streamlit", "LLM", "AI", "Mental Health", "Internship"],
      gradient: "from-primary-400 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_linuxworldinternship-streamlit-llm-activity-7346014871454429184-jgf3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      githubUrl: "https://github.com/sheetal-saini25/dream",
      category: "mini"
    },
    {
      title: "Python LinuxWorld Internship: Real-Time Practice",
      description: "Hands-on Python learning experience as an intern at LinuxWorld Informatics Pvt Ltd. Practiced Python using Jupyter Notebook and command prompt, gaining practical understanding of how Python interacts with the system.",
      tech: ["Python", "Jupyter Notebook", "Command Line", "Internship", "LinuxWorld"],
      gradient: "from-primary-300 to-primary-200",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-linuxworld-internship-activity-7342933092719812608-yMew?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      githubUrl: "https://github.com/sheetal-saini25/menu_base/blob/main/pages/Python_Tasks.py",
      category: "mini"
    },
    {
      title: "Music Festival Ticket Booking WebApp: EVENT PASS",
      description: "A 4-page Streamlit web application for booking music festival tickets. Features an attractive landing page, user registration, QR-based payment simulation, ticket verification, and WhatsApp confirmation on successful booking. Enhanced full-stack Python skills and frontend-backend integration with WhatsApp automation.",
      tech: ["Python", "Streamlit", "WhatsApp API", "Twilio or pywhatkit", "HTML/CSS", "Full Stack", "LinuxWorld"],
      gradient: "from-primary-500 to-primary-300",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_streamlit-python-linuxworld-activity-7342928552662552577-IVDt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "major"
    },
    {
      title: "JavaScript Web Development: Real-Time User-Centric Features",
      description: "A comprehensive JavaScript project implementing real-time, user-centric functionalities using pure JavaScript. Features include geolocation API for current location, Google Maps + Places API for nearby grocery stores, camera/video capture, email sending, WhatsApp messaging via API, live routes & navigation, and user activity tracking for engagement insights.",
      tech: ["JavaScript", "Geolocation API", "Google Maps API", "Places API", "Camera API", "Email API", "WhatsApp API", "Navigation API", "Frontend Development"],
      gradient: "from-primary-400 to-primary-200",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_javascript-webdevelopment-geolocation-activity-7349503909591199781-JZD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    },
    {
      title: "Monitoring System RAM using Python",
      description: "Analyzed system memory usage using the psutil library in Python. Retrieved total, available, used RAM, RAM usage percentage, and swap memory details. Useful for building performance monitors, dashboards, or automating system health checks.",
      tech: ["Python", "Jupyter Notebook", "psutil", "System Monitoring", "Automation"],
      gradient: "from-primary-300 to-primary-500",
      linkedinUrl: "https://www.linkedin.com/posts/sheetal-saini-b33273371_python-jupyternotebook-systemmonitoring-activity-7350728324945457152-Fk7n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwNuZcBvPg4CF_HD5n9LpE19Ks0gVSi5LQ",
      category: "mini"
    }
  ];

  const majorProjects = projects.filter(p => p.category === "major");
  const miniProjects = projects.filter(p => p.category === "mini");
  const caseStudies = projects.filter(p => p.category === "case");

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-[1800ms] ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)] mx-auto rounded-full"></div>
        </div>

        <h3 className="text-4xl font-semibold text-white mb-8 mt-12">Major Projects</h3>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {majorProjects.map((project, index) => (
            <div key={index} className={`group rounded-3xl p-10 shadow-2xl border border-[var(--border)] bg-[var(--card-bg)] transition-all duration-[1800ms] ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}> 
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-[var(--accent)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-black rounded-2xl shadow-lg border border-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors duration-500"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-black rounded-2xl shadow-lg border border-[var(--accent)]">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                )}
                {project.linkedinUrl ? (
                  <a 
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-2xl border border-[var(--accent)] hover:bg-[var(--accent-light)] hover:text-black transition-colors duration-500"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-2xl border border-[var(--accent)]">
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-4xl font-semibold text-white mb-8 mt-12">Mini Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {miniProjects.map((project, index) => (
            <div key={index} className={`rounded-2xl p-8 shadow-2xl border border-[#23232a] bg-[#18181b] transition-all duration-[1800ms] ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}> 
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
                  <Code className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-base">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-4 py-1 border border-[#7f9cf5] text-[#e0e7ef] rounded-full text-base font-medium bg-transparent">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3 bg-[#7f9cf5] text-black rounded-xl font-semibold shadow hover:bg-[#a3bffa] transition-colors duration-500 text-base"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-7 py-3 bg-[#7f9cf5] text-black rounded-xl font-semibold shadow text-base">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                )}
                {project.linkedinUrl ? (
                  <a 
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3 border border-[#7f9cf5] text-gray-200 rounded-xl font-semibold hover:bg-[#23232a] transition-colors duration-500 text-base"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-7 py-3 border border-[#7f9cf5] text-gray-200 rounded-xl font-semibold text-base">
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-4xl font-semibold text-white mb-8 mt-12">Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((project, index) => (
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
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-dark-800 to-dark-900 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg border border-primary-500/20"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-dark-800 to-dark-900 text-white rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg border border-primary-500/20">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                )}
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