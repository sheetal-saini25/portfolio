import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      title: "Post Graduate Diploma in Computer Applications (PGDCA)",
      description: "Completed with practical exposure to software development, system programming, and database management",
      icon: <Award className="w-7 h-7" />,
      color: "from-gray-800 to-gray-700"
    },
    {
      title: "Bachelor of Science in Computer Science (B.Sc. in CS)",
      institution: "Government College Swami Vivekanand, Harda, Madhya Pradesh",
      description: "Focused on core computer science fundamentals and programming",
      icon: <GraduationCap className="w-7 h-7" />,
      color: "from-gray-700 to-gray-600"
    },
    {
      title: "Higher Secondary Schooling (12th Grade)",
      institution: "School in Madhya Pradesh",
      description: "Stream: Mathematics and Science",
      icon: <BookOpen className="w-7 h-7" />,
      color: "from-gray-600 to-gray-500"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-32 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-32 h-2 bg-white/10 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-full"></div>
            <div className="space-y-16">
              {educationData.map((item, index) => (
                <div key={index} className={`relative flex gap-12 group transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-125 transition-transform duration-500 border-4 border-white/10`}>{item.icon}</div>
                  {/* Content */}
                  <div className="flex-1 glass rounded-3xl p-10 shadow-2xl hover:shadow-white/10 transition-all duration-500 group-hover:scale-105 border border-gray-800">
                    <div className="flex items-start gap-4 mb-6">
                      <Calendar className="w-6 h-6 text-white/60 mt-1 animate-pulse" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                        {item.institution && (
                          <p className="text-white/70 font-semibold mb-3 text-lg">{item.institution}</p>
                        )}
                        <p className="text-white/80 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;