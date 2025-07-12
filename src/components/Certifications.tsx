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
      color: "from-purple-600 to-pink-600"
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
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Remove Completed Certifications section here */}

          {/* Upcoming Certifications */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-pink-400 animate-pulse" />
              Future Certifications
            </h3>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20 shadow-2xl">
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                I'm continuously expanding my expertise through professional certifications. Here are the certifications I'm planning to pursue:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingCertifications.map((cert, index) => (
                  <div key={index} className={`flex items-center gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 border border-purple-500/20 delay-${index * 100} hover:border-purple-400/40`}>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
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