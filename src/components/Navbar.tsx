import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Shield } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'education', label: 'Formation' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'activities', label: 'Activités' },
  { id: 'contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-bold font-poppins text-primary-700 dark:text-primary-400">
              Yassine Aarab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-4 text-dark-800 dark:text-light-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-dark-700 shadow-lg rounded-b-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  className="text-dark-600 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;