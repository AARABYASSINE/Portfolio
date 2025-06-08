import React from 'react';
import { Link } from 'react-scroll';
import { ShieldCheck, Heart, ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 text-light-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="p-3 bg-primary-800 hover:bg-primary-700 rounded-full cursor-pointer transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <ShieldCheck className="h-8 w-8 text-primary-500 mr-2" />
            <span className="text-xl font-bold font-poppins text-white">
              Yassine Aarab
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/AARABYASSINE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/yassine-aarab-225a23315/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:aarabyassine30@gmail.com"
              className="text-light-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Yassine Aarab. Tous droits réservés.
            </p>
            
            <p className="text-light-500 text-sm flex items-center">
              Créé avec 
              <Heart className="h-4 w-4 text-error mx-1" />
              et <span className="text-primary-400 ml-1">React + Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;