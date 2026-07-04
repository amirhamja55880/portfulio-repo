import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const isAdmin = window.location.pathname === '/admin';

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [darkMode]);

  // Scroll reveal animation
  useEffect(() => {
    if (isAdmin) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isAdmin]);

  const toggleTheme = () => setDarkMode(!darkMode);

  if (isAdmin) return <AdminPanel />;

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;