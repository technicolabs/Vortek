'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  return (
    <footer className="w-full bg-[#050805] border-t-2 border-white/10 relative overflow-hidden">
      {/* Massive Brand Wordmark Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap">
        <span className="text-[30vw] font-orbitron font-black tracking-tighter text-white">VORTEK</span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Taped Section: Large Headline */}
        <div className="pt-20 pb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white leading-tight">
              CULTIVATING <br />
              <span className="text-neon-green neon-text">DIGITAL ROOTS.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-12 h-1 bg-neon-green mb-4"></div>
            <p className="text-white/40 text-sm font-orbitron tracking-widest text-right uppercase">
              Dubai Hub - Global Reach
            </p>
          </div>
        </div>

        {/* Main Footer Columns with "Taped" Bordered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Brand Column */}
          <div className="py-12 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs neon-glow">./</div>
              <span className="font-orbitron text-xl font-black text-white tracking-widest">VORTEK</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              A remote-based tech agency specializing in innovative digital solutions across the UAE, GCC, and beyond.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'X', 'Instagram', 'Facebook'].map(social => (
                <button key={social} className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-neon-green hover:text-black transition-all group">
                  <span className="sr-only">{social}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ecosystem Column */}
          <div className="py-12 md:px-8">
            <h4 className="font-orbitron text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Team', href: '/team' },
                { name: 'Blog', href: '/blog' }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-neon-green text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-neon-green transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable Map Column */}
          <div className="py-12 md:px-8">
            <h4 className="font-orbitron text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-8">Location Hub</h4>
            <div 
              className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer glass rounded-2xl group ${isMapExpanded ? 'h-64' : 'h-32'}`}
              onClick={() => setIsMapExpanded(!isMapExpanded)}
            >
              {/* Fake Map UI */}
              <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #39FF14 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                {/* Simplified Map Paths/Dots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative">
                      <div className="w-4 h-4 bg-neon-green rounded-full animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-neon-green rounded-full relative z-10 shadow-[0_0_15px_rgba(57,255,20,0.8)]"></div>
                   </div>
                </div>
                {/* Dubai Landmarks Labels (visible when expanded) */}
                <div className={`absolute inset-0 p-4 transition-opacity duration-500 ${isMapExpanded ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="text-[8px] font-orbitron text-white/40 absolute top-10 left-1/2 uppercase tracking-widest">Burj Khalifa</div>
                   <div className="text-[8px] font-orbitron text-white/40 absolute bottom-10 right-10 uppercase tracking-widest">Palm Jumeirah</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-orbitron font-bold text-white tracking-widest uppercase">DUBAI, UAE</span>
                    <span className="text-[10px] text-neon-green font-orbitron animate-pulse">{isMapExpanded ? 'CLOSE' : 'EXPAND'}</span>
                 </div>
              </div>
            </div>
            <p className="text-[10px] text-white/30 mt-4 font-orbitron uppercase tracking-widest">Strategic Headquarters</p>
          </div>

          {/* Newsletter Column */}
          <div className="py-12 md:pl-8">
            <h4 className="font-orbitron text-xs font-black text-white/30 uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-white/50 text-xs mb-6">Receive digital seeds of innovation in your inbox.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green"
              />
              <button className="w-full py-3 bg-white/5 border border-white/20 text-white font-orbitron font-bold text-[10px] tracking-widest rounded-xl hover:bg-neon-green hover:text-black transition-all uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 font-orbitron tracking-widest uppercase">
            &copy; {currentYear} Vortek Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-white/30 hover:text-white font-orbitron tracking-widest uppercase transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-white/30 hover:text-white font-orbitron tracking-widest uppercase transition-colors">Terms of Growth</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
            <span className="text-[10px] text-neon-green font-orbitron font-bold tracking-widest uppercase">Signal Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
