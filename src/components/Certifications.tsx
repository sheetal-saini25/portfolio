import React, { useState, useEffect, useRef } from 'react';
import { Award, Star, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Post Graduate Diploma in Computer Applications (PGDCA)",
      issuer: "Accredited Institution",
      date: "2024",
      status: "Completed",
      color: "from-primary-600 to-primary-500"
    }
  ];

  const upcomingCertifications = [
    "AWS Certified Cloud Practitioner",
    "Docker Certified Associate",
    "Kubernetes Administrator (CKA)",
    "Google Cloud Professional"
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Certifications
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Completed Certifications */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary-400 animate-bounce" />
              Completed Certifications
            </h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-primary-500/20 group hover:scale-105 hover:border-primary-400/40">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${cert.color} text-white group-hover:scale-125 transition-transform duration-500 shadow-lg animate-glow`}>
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-3">{cert.title}</h4>
                      <p className="text-transparent bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text font-semibold mb-3 text-lg">{cert.issuer}</p>
                      <div className="flex items-center gap-6 text-white/80">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 animate-pulse" />
                          {cert.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary-400 fill-current animate-pulse" />
                          {cert.status}
                        </div>
                      </div>
                    </div>
                    <button className="p-3 text-white/60 hover:text-white transition-colors duration-300 hover:scale-110">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Certifications */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-primary-300 animate-pulse" />
              Future Certifications
            </h3>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-primary-500/20 shadow-2xl">
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                I'm continuously expanding my expertise through professional certifications. Here are the certifications I'm planning to pursue:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingCertifications.map((cert, index) => (
                  <div key={index} className={`flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-primary-500/20 transition-all duration-500 hover:scale-105 border border-primary-500/20 delay-${index * 100} hover:border-primary-400/40`}>
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;