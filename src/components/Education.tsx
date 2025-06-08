import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-container bg-light-200 dark:bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Formation</h2>
        
        <div className="timeline pl-8">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="timeline-item animate-slide-up transition-transform hover:-translate-y-1"
            >
              <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between flex-wrap mb-2">
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-dark-500 dark:text-light-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-5 w-5 text-secondary-500 mr-2" />
                  <span className="text-dark-600 dark:text-light-300 font-medium">
                    {item.institution}
                  </span>
                </div>
                
                {item.description && (
                  <p className="text-dark-600 dark:text-light-400">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;