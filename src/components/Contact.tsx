import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`space-y-10 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-500/20 hover:scale-105 transition-all duration-500 hover:border-primary-400/40">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Let's Connect
                </h3>
                <p className="text-white/80 mb-10 leading-relaxed text-lg">
                  I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology. 
                  Feel free to reach out!
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-lg animate-glow">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <p className="text-white font-semibold text-lg">sheetalsaini0425@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl shadow-lg animate-glow">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Location</p>
                      <p className="text-white font-semibold text-lg">Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-500/20">
                  <p className="text-white/80 mb-6 text-lg">Follow me on social media:</p>
                  <div className="flex gap-6">
                    <a href="https://github.com/sheetal-saini25" target="_blank" rel="noopener noreferrer" className="p-4 bg-dark-800/50 backdrop-blur-lg text-white rounded-2xl hover:bg-dark-700/50 transition-all duration-300 hover:scale-125 border border-primary-500/20 shadow-lg">
                      <Github className="w-7 h-7" />
                    </a>
                    <a href="https://linkedin.com/in/sheetal-saini-b33273371" target="_blank" rel="noopener noreferrer" className="p-4 bg-primary-600/50 backdrop-blur-lg text-white rounded-2xl hover:bg-primary-700/50 transition-all duration-300 hover:scale-125 border border-primary-500/20 shadow-lg">
                      <Linkedin className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-500/20 hover:scale-105 transition-all duration-1000 delay-400 hover:border-primary-400/40 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h3 className="text-3xl font-bold text-white mb-8">
                Send me a message
              </h3>
              
              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center gap-3 backdrop-blur-lg">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-primary-500/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-primary-500/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-primary-500/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-white/50"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-primary-400/30 animate-glow"
                >
                  <Send className="w-6 h-6" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;