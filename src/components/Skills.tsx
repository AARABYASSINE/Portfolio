import React, { useState, useEffect } from 'react';
import { Code, Languages, UserCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate skill bar on mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 200);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-dark-700 dark:text-light-300 font-medium">{name}</span>
        <span className="text-dark-500 dark:text-light-400">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = skillsData.filter(skill => skill.category === 'technical');
  const languageSkills = skillsData.filter(skill => skill.category === 'language');
  const softSkills = skillsData.filter(skill => skill.category === 'soft');
  
  return (
    <section id="skills" className="section-container bg-light-200 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100">
                Compétences Techniques
              </h3>
            </div>
            
            <div>
              {technicalSkills.map(skill => (
                <SkillBar key={skill.id} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* Language Skills */}
          <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <Languages className="h-6 w-6 text-secondary-500 mr-2" />
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100">
                Langues
              </h3>
            </div>
            
            <div>
              {languageSkills.map(skill => (
                <SkillBar key={skill.id} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <UserCheck className="h-6 w-6 text-accent-500 mr-2" />
              <h3 className="text-xl font-semibold text-dark-800 dark:text-light-100">
                Soft Skills
              </h3>
            </div>
            
            <div>
              {softSkills.map(skill => (
                <SkillBar key={skill.id} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;