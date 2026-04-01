// Lokasi file: src/components/Contact.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Contact() {
  return (
    <section id="kontak" className="py-32 px-6 md:px-12 bg-emerald-500 text-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-element">
            <h2 className="heading-display text-6xl md:text-8xl mb-8">
              Let's <br/>Work <br/>Together.
            </h2>
            <p className="text-xl font-medium text-emerald-900 max-w-md mb-12">
              Punya ide menarik atau butuh bantuan untuk mengurus konten dan administrasi? Jangan sungkan untuk menyapa.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${cvData.email}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-emerald-900 font-bold uppercase tracking-widest text-sm mb-1">Email</p>
                  <p className="text-2xl font-bold">{cvData.email}</p>
                </div>
              </a>
              
              <a href={`https://wa.me/62${cvData.phone.replace(/[-]/g, '').substring(1)}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-emerald-900 font-bold uppercase tracking-widest text-sm mb-1">WhatsApp</p>
                  <p className="text-2xl font-bold">{cvData.phone}</p>
                </div>
              </a>

              <a href={`https://instagram.com/${cvData.social}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                </div>
                <div>
                  <p className="text-emerald-900 font-bold uppercase tracking-widest text-sm mb-1">Instagram</p>
                  <p className="text-2xl font-bold">@{cvData.social}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal-element delay-200 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-emerald-400/30">
            <iframe 
              title="Peta Lokasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3023812845625!2d106.75841021476907!3d-6.223805995494204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0d0686948ad%3A0xc31c0a0684a282f9!2sPesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}