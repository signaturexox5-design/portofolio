// Lokasi file: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-black tracking-tighter flex items-center gap-1 group ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
          RANU<span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform"></span>
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-wider ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
          <a href="#tentang" className="hover:text-emerald-500 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#pengalaman" className="hover:text-emerald-500 transition-colors relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#portofolio" className="hover:text-emerald-500 transition-colors relative group">
            Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#kontak" className={`px-5 py-2.5 rounded-full transition-colors ${scrolled ? 'bg-zinc-900 text-white hover:bg-emerald-600' : 'bg-white text-zinc-900 hover:bg-emerald-500 hover:text-white'}`}>
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 -mr-2 ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 origin-top`}>
          <div className="flex flex-col p-8 space-y-6 text-lg font-bold uppercase tracking-wider text-zinc-900">
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600">About</a>
            <a href="#pengalaman" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600">Experience</a>
            <a href="#portofolio" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600">Works</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="text-emerald-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}