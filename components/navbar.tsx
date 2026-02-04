'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  
  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '🌲' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'Portfolio', path: '/portfolio', icon: '📂' },
    { name: 'Team', path: '/team', icon: '👥' },
    { name: 'Blog', path: '/blog', icon: '📖' },
    { name: 'Contact', path: '/contact', icon: '✉️' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl neon-glow">
            ./
          </div>
          <span className="font-orbitron text-2xl font-black tracking-widest text-white group-hover:text-neon-green transition-colors hidden sm:block">
            VORTEK
          </span>
        </Link>

        {/* Expandable Tabs Menu */}
        <div className="flex items-center gap-2 glass p-1 rounded-2xl border-white/5 bg-white/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const isHovered = hoveredTab === link.path;
            const isExpanded = isActive || isHovered;

            return (
              <Link
                key={link.path}
                href={link.path}
                onMouseEnter={() => setHoveredTab(link.path)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative flex items-center h-10 px-3 rounded-xl transition-all duration-500 ease-out overflow-hidden group ${
                  isActive ? 'bg-neon-green text-black' : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  width: isExpanded ? '110px' : '44px',
                }}
              >
                <span className="text-lg shrink-0 w-5 flex justify-center">{link.icon}</span>
                <span 
                  className={`ml-3 font-orbitron text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-500 ${
                    isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                  }`}
                >
                  {link.name}
                </span>
                {isActive && !isHovered && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full mb-1"></div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            className="hidden md:block text-[10px] font-orbitron font-bold text-white/40 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded"
          >
            {lang}
          </button>
          
          <Link
            href="/contact"
            className="hidden xl:block px-6 py-2 bg-transparent border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 rounded-lg font-orbitron text-[10px] tracking-widest font-bold neon-glow"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
}
