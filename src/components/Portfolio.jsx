// Lokasi file: src/components/Portfolio.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-element mb-20 text-center">
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Selected Works</p>
          <h2 className="heading-display text-5xl md:text-7xl">Portofolio.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cvData.portfolio.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="reveal-element block group" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="rounded-[2rem] overflow-hidden bg-zinc-100 mb-6 relative aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-zinc-100">
                {item.image.includes('<iframe') ? (
                  <div className="w-full h-full pointer-events-none flex items-center justify-center overflow-hidden [&>iframe]:w-full [&>iframe]:h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" dangerouslySetInnerHTML={{ __html: item.image }} />
                ) : (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                )}
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}