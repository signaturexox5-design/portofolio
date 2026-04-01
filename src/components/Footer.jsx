// Lokasi file: src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 text-center">
      <p className="text-zinc-500 font-medium uppercase tracking-widest text-sm">
        © {new Date().getFullYear()} Raden Muhammad Nuril Anwar.<br className="md:hidden"/> All rights reserved.
      </p>
    </footer>
  );
}