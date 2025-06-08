import React from 'react';
import { Link } from 'react-scroll';
import { ShieldCheck, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-light-100 to-light-300 dark:from-dark-800 dark:to-dark-900 terminal-effect"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animation-delay-200 animate-slide-up">
            <div className="code-font text-primary-600 dark:text-primary-400 mb-2">
              <span className="opacity-70">$</span> Hello World!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-800 dark:text-light-100">
              Yassine Aarab
            </h1>
            <div className="flex items-center mb-6">
              <ShieldCheck className="h-6 w-6 text-secondary-500 mr-2" />
              <h2 className="text-xl md:text-2xl font-medium text-dark-600 dark:text-light-200">
                Étudiant en Ingénierie Cybersécurité
              </h2>
            </div>
            <p className="text-lg text-dark-600 dark:text-light-300 mb-8 max-w-lg">
              Passionné par la cybersécurité et le développement sécurisé.
              Actuellement en première année d'ingénierie à l'INPT de Rabat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv-yassine-aarab.pdf"
                className="btn-primary flex items-center"
                download
              >
                <Download className="h-5 w-5 mr-2" />
                Télécharger CV
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-outline flex items-center cursor-pointer"
              >
                Me Contacter
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 animation-delay-400 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-70 blur"></div>
              <div className="relative bg-light-200 dark:bg-dark-700 p-1 rounded-lg shadow-xl">
                <img 
                  src="/port.jpg" 
                  alt="Yassine Aarab" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="font-medium text-primary-700 dark:text-primary-400">Nationalités</p>
                  <p className="text-dark-600 dark:text-light-300">🇮🇹 Italie / 🇲🇦 Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-primary-600 dark:text-primary-400 cursor-pointer"
          >
            <ChevronDown className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;