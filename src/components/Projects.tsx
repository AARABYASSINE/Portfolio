import React, { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="section-container bg-white dark:bg-dark-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="card group transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center text-light-100 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-dark-600 dark:text-light-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <span className="mr-1">{activeProject === project.id ? 'Voir moins' : 'Voir plus'}</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
                
                {activeProject === project.id && (
                  <div className="mt-4 p-4 bg-light-200 dark:bg-dark-600 rounded-lg animate-fade-in">
                    <p className="text-dark-700 dark:text-light-200">
                      {project.description}
                    </p>
                    {/* Additional project details could go here */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;