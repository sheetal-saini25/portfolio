import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/80 via-gray-900/80 to-black/90 backdrop-blur-xl border-t border-gray-800 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 bg-clip-text text-transparent">
                Sheetal Saini
              </span>
            </h3>
            <p className="text-white/70 leading-relaxed text-lg mb-4">
              DevOps Intern | Full Stack Learner | Future Engineer
            </p>
            <p className="text-white/60">
              Passionate about building innovative solutions with modern technologies.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/70">sheetalsaini0425@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/sheetal-saini25" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-lg rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-gray-800">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/sheetal-saini-b33273371" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-lg rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-gray-800">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center gap-2 text-lg">
            Made with <Heart className="w-5 h-5 text-white/60 fill-current animate-pulse" /> and <Code className="w-5 h-5 text-white/60" /> by Sheetal Saini
          </p>
          <p className="text-white/50 mt-3">
            © 2024 Sheetal Saini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;