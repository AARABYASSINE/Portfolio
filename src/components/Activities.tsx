import React from 'react';
import { UsersRound, Calendar, Brain, FileWarning as Running, Pencil, PenTool, Map } from 'lucide-react';
import { activitiesData, interestsData } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
  running: <Running className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
  pencil: <Pencil className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
  'pen-tool': <PenTool className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
  map: <Map className="h-6 w-6 text-primary-600 dark:text-primary-400" />
};

const Activities: React.FC = () => {
  return (
    <section id="activities\" className="section-container bg-white dark:bg-dark-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Activités & Intérêts</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-light-100">
              Activités Extrascolaires
            </h3>
            
            <div className="space-y-6">
              {activitiesData.map(activity => (
                <div 
                  key={activity.id}
                  className="bg-light-200 dark:bg-dark-600 rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-400">
                      {activity.name}
                    </h4>
                    <div className="flex items-center text-dark-500 dark:text-light-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{activity.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <UsersRound className="h-5 w-5 text-secondary-500 mr-2" />
                    <span className="text-dark-600 dark:text-light-300 font-medium">
                      {activity.role}
                    </span>
                  </div>
                  
                  <p className="text-dark-600 dark:text-light-400">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Interests */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-light-100">
              Centres d'Intérêt
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interestsData.map(interest => (
                <div 
                  key={interest.id}
                  className="bg-light-200 dark:bg-dark-600 rounded-lg p-5 shadow-md transition-all hover:shadow-lg hover:bg-light-300 dark:hover:bg-dark-500"
                >
                  <div className="flex items-center mb-3">
                    {iconMap[interest.icon]}
                    <h4 className="ml-3 text-lg font-medium text-dark-700 dark:text-light-200">
                      {interest.name}
                    </h4>
                  </div>
                  
                  <p className="text-dark-600 dark:text-light-400 text-sm">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;