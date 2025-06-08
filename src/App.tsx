import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Yassine Aarab | Cybersecurity Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-800 text-dark-800 dark:text-light-200 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;