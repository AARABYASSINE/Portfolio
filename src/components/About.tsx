import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-dark-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">À Propos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6 text-dark-700 dark:text-light-200">
              Je suis un étudiant passionné par la cybersécurité et les technologies de l'information, 
              actuellement en première année d'ingénierie à l'Institut National des Postes et Télécommunications (INPT) à Rabat.
            </p>
            
            <p className="text-lg mb-6 text-dark-700 dark:text-light-200">
              Avec une solide formation en mathématiques et en programmation, je m'intéresse particulièrement 
              à la sécurité des réseaux, au développement sécurisé et à l'intelligence artificielle appliquée 
              à la détection des menaces.
            </p>
            
            <p className="text-lg mb-6 text-dark-700 dark:text-light-200">
              Mon parcours multiculturel et mes compétences linguistiques me permettent d'aborder les défis 
              techniques avec une perspective unique et de collaborer efficacement dans des environnements internationaux.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-dark-800 dark:text-light-100">Langues</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-light-200 dark:bg-dark-600 px-4 py-2 rounded-lg">
                  <Languages className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-dark-700 dark:text-light-200">Français</span>
                </div>
                <div className="flex items-center bg-light-200 dark:bg-dark-600 px-4 py-2 rounded-lg">
                  <Languages className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-dark-700 dark:text-light-200">Anglais</span>
                </div>
                <div className="flex items-center bg-light-200 dark:bg-dark-600 px-4 py-2 rounded-lg">
                  <Languages className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-dark-700 dark:text-light-200">Italien (natif)</span>
                </div>
                <div className="flex items-center bg-light-200 dark:bg-dark-600 px-4 py-2 rounded-lg">
                  <Languages className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-dark-700 dark:text-light-200">Arabe (natif)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-light-200 dark:bg-dark-600 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-dark-800 dark:text-light-100">Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-dark-700 dark:text-light-200">Rabat - Salé, Maroc</p>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" />
                  <a 
                    href="mailto:aarabyassine30@gmail.com" 
                    className="text-dark-700 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    aarabyassine30@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" />
                  <a 
                    href="tel:+212763952285" 
                    className="text-dark-700 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +212 763 952 285
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" />
                  <a 
                    href="https://www.linkedin.com/in/yassine-aarab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-dark-700 dark:text-light-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Yassine Aarab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;