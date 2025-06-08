import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 
       localStorage.getItem('darkMode') !== 'false');
    
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-300 dark:bg-dark-600 hover:bg-light-400 dark:hover:bg-dark-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-primary-400" />
      ) : (
        <Moon className="h-5 w-5 text-primary-600" />
      )}
    </button>
  );
};

export default ThemeToggle;