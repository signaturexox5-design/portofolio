// Lokasi file: src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cvData.heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center overflow-hidden">
      {cvData.heroSlides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-zinc-950/60 z-10"></div>
          <img src={slide} alt={`Slide portfolio ${index + 1}`} className="w-full h-full object-cover scale-105" />
        </div>
      ))}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {cvData.heroSlides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-12 h-1 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-emerald-500' : 'bg-white/30'}`}></button>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <div className="max-w-3xl">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-emerald-400"></span>
            Portfolio 2026
          </p>
          <h1 className="heading-display text-5xl md:text-7xl lg:text-[6rem] mb-6 leading-tight">
            Raden Nuril.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed mb-10 font-medium">
            Spesialis media sosial dan administrasi. Siap mengelola konten visual dan membereskan pekerjaan dengan detail, tepat waktu, dan kreatif.
          </p>
          <a href="#kontak" className="inline-flex items-center gap-4 px-8 py-4 bg-emerald-500 text-white rounded-full text-lg font-bold hover:bg-emerald-600 hover:scale-105 transition-all duration-300 group shadow-lg shadow-emerald-500/20">
            Lihat Proyek
            <span className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}