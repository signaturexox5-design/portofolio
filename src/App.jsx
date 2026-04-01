// Lokasi file: src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  
  // Ini adalah mesin yang mengurus animasi otomatis saat layar di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-zinc-50 text-zinc-900 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}