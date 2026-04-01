// Lokasi file: src/components/Education.jsx
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Education() {
  return (
    <section id="pendidikan" className="py-32 px-6 md:px-12 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-zinc-900 to-zinc-900 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div className="reveal-element">
          <h2 className="heading-display text-4xl md:text-5xl mb-12 flex items-center gap-4">
            <GraduationCap className="text-emerald-400" size={48} />
            Pendidikan
          </h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="border-t border-zinc-800 pt-8 mt-8 first:border-0 first:pt-0 first:mt-0">
              <h3 className="text-3xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-emerald-400 font-medium text-xl mb-4">{edu.school}</p>
              <p className="inline-block px-4 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-sm font-bold tracking-wide mb-6">{edu.date}</p>
              <p className="text-zinc-400 text-lg leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal-element delay-200">
          <h2 className="heading-display text-4xl md:text-5xl mb-12 flex items-center gap-4">
            <Award className="text-yellow-400" size={48} />
            Penghargaan
          </h2>
          {cvData.awards.map((award, index) => (
            <div key={index} className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
              <p className="text-zinc-400 text-lg mb-4">{award.issuer}</p>
              <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}