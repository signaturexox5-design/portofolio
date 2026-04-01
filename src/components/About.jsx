// Lokasi file: src/components/About.jsx
import React from 'react';
import { cvData } from '../data/cv';

export default function About() {
  return (
    <>
      <div className="bg-emerald-500 text-white py-8 marquee-container shadow-xl z-20 relative">
        <div className="marquee-content items-center text-2xl md:text-4xl font-black uppercase tracking-wider">
          {[...cvData.skills, ...cvData.skills, ...cvData.skills].map((skill, index) => (
            <span key={index} className="mx-8 flex items-center whitespace-nowrap">
              {skill} <span className="text-emerald-900 ml-16">❋</span>
            </span>
          ))}
        </div>
      </div>

      <section id="tentang" className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div className="reveal-element">
              <h2 className="heading-display text-4xl md:text-6xl mb-8">
                Di Balik Layar <br />
                <span className="text-zinc-400">Sebuah Brand.</span>
              </h2>
            </div>
            <div className="reveal-element delay-100">
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 mb-8">
                Saya mahasiswa tingkat akhir S1 Manajemen Dakwah di Universitas PTIQ Jakarta. Saya percaya bahwa kesuksesan sebuah kampanye tidak hanya dari kreativitas konten, tapi juga fondasi administrasi yang kuat.
              </p>
              <p className="text-lg leading-relaxed text-zinc-500 mb-12">
                Terbiasa mengelola administrasi, mengarsipkan dokumen dengan Google Workspace, dan menjaga kedisiplinan tim. Di sisi lain, saya juga mahir meracik konten visual menggunakan Adobe Suite, CapCut, dan Canva.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2">Administrasi</h3>
                  <p className="text-zinc-500">Google Workspace, rekap data harian, dan pengarsipan terstruktur.</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2">Visual & Media</h3>
                  <p className="text-zinc-500">Adobe Premiere, Photoshop, CapCut, dan strategi media sosial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}