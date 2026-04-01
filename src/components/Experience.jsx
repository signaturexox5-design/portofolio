// Lokasi file: src/components/Experience.jsx
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-32 px-6 md:px-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-element mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200 pb-12">
          <div>
            <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Career Path</p>
            <h2 className="heading-display text-5xl md:text-7xl">Pengalaman.</h2>
          </div>
          <p className="text-xl text-zinc-500 max-w-md">Jejak profesional dan proyek yang membentuk etos kerja saya saat ini.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="reveal-element group bg-white rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="w-full md:w-1/3 shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide mb-6">
                  {exp.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-900">{exp.title}</h3>
                <p className="text-lg text-zinc-500 font-medium">{exp.company}</p>
                <p className="text-sm text-zinc-400 mt-1 uppercase tracking-widest">{exp.type}</p>
              </div>
              
              <div className="w-full md:w-2/3">
                <ul className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-lg text-zinc-600 leading-relaxed">
                      <CheckCircle2 size={24} className="shrink-0 mr-4 text-emerald-400 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}